enum GameState {
    Live,
    Testing,
    Editor,
    Over,
    Completed
}

class ColorScheme {
    private colorMap: { [key: string]: string; } = {
        "Background": "#ffffff",
        "Player": "black",
        "Wall": "#1E1E20",
        "Box": "#703030",
        "Mine": "#8A0917",
        "WhiteBox": "black",
        "Door": "#17607D",
        "Platform": "#2F343B",
        "Default": "black",
        "PortalOn": "#FF6138",
        "PortalOff": "#6B6B6B",
        "LightOn": "#105B63",
        "LightOff": "#6B6B6B",
        "HighlightBasic": "#1E1E20",
        "HighlightLinked": "#FF6138",
        "HighlightSelected": "#8A0917"
    }

    constructor(colorMap?: { [key: string]: string; }) {
        if (colorMap !== undefined) {
            this.colorMap = colorMap;
        }
    }

    colorFor(name: string) {
        let color = this.colorMap[name];
        if (color !== undefined) {
            return color;
        }
        return this.defaultColor();
    }

    defaultColor() {
        return this.colorMap["Default"] || "#000000";
    }

    updateColor(name: string, color: string) {
        this.colorMap[name] = color;
    }
}

/**
 * A GameGrid holds all game objects for a level in multiple data sets and
 * is the only one acting on the objects. All game objects must register
 * with a grid before they can do any useful work. Game objects hold
 * a reference to their game grid and expose various game grid related
 * methods but these are nothing but abstractions on top of game grid
 * methods. A game grid always controls everything.
 *
 * Game objects are held in a bidimensional array as well as a location
 * map which maps objects to their location for quick access. A render
 * queue controls the order in which the objects render (this is so boxes
 * render on top of platform and not under and so on). A light graph
 * controls the light beam aspects of the game.
 */
class GameGrid {
    private grid: Array<GameObject>[][];
    private renderQueue: PriorityQueue<GameObject>;
    private locationMap: Dictionary<GameObject, Point>;
    private player: Player;
    private box: Box;

    width: number;
    height: number;
    size: number;
    scheme: ColorScheme;
    gameState = GameState.Live;
    lg: LightGraph;

    constructor(w: number, h: number, size: number) {
        this.width = w;
        this.height = h;
        this.size = size;
        this.scheme = new ColorScheme();
        this.grid = new Array();
        for (let i = 0; i < w; ++i) {
            let col = new Array();
            for (let j = 0; j < h; ++j) {
                col.push(new Array<GameObject>());
            }
            this.grid.push(col);
        }
        this.renderQueue = new PriorityQueue<GameObject>();
        this.locationMap = new Dictionary<GameObject, Point>();
        this.lg = new LightGraph();
    }

    locate(obj: GameObject) {
        return this.locationMap.get(obj);
    }

    register(obj: GameObject) {
        if (obj instanceof Player) {
            this.player = obj;
        }
        if (obj instanceof Box) {
            this.box = obj;
        }
        if (this.locationMap.contains(obj) || obj.grid !== this) {
            return;
        }
        this.grid[0][0].push(obj);
        this.locationMap.put(obj, new Point(0, 0));
        this.renderQueue.push(obj, obj.renderPriority());
    }

    move(obj: GameObject, dest: Point) {
        if (!this.locationMap.contains(obj)) {
            return;
        }
        let from = obj.location();
        this.locationMap.put(obj, dest);
        let objects = this.grid[from.x][from.y];
        for (let i = 0; i < objects.length; ++i) {
            if (objects[i] === obj) {
                objects.splice(i, 1);
                this.grid[dest.x][dest.y].push(obj);
                break;
            }
        }
    }

    private lastLocMap: Dictionary<GameObject, Point>;

    /**
     * Saves the current location of all objects.
     */
    snapshot() {
        this.lastLocMap = this.locationMap.clone();
    }

    /**
     * Moves all objects back to where they were when
     * the last snapshot was taken. Once restored the last
     * snapshot is destroyed and further restore calls do nothing
     * until another snapshot is taken.
     */
    restore() {
        if (this.lastLocMap !== undefined) {
            for (let key of this.lastLocMap.keys()) {
                this.move(key, this.lastLocMap.get(key));
                if (key instanceof Mine) {
                    key.resetPatrol();
                }
            }
            this.lastLocMap = undefined;
        }
    }

    /**
     * Returns all game obejects on the current game grid
     */
    allObjects() {
        return this.locationMap.keys();
    }

    /**
     * Returns an array containing all objects
     * at the given grid coordinate
     */
    getObjectsAt(pos: Point) {
        return this.grid[pos.x][pos.y];
    }

    /**
     * Returns the coordinates of the grid square the mouse is in
     * @param  {MouseEvent} mouseEvent
     * @return {Point}
     */
    getPosition(mouseEvent: MouseEvent): Point {
        let x = mouseEvent.offsetX;
        let y = mouseEvent.offsetY;
        return new Point(Math.floor(x / this.size), Math.floor(y / this.size));
    }

    getPlayer() {
        return this.player;
    }

    getBox() {
        return this.box;
    }

    update() {
        if (this.gameState === GameState.Completed
            || this.gameState === GameState.Over) {
            return;
        }
        if (this.gameState === GameState.Live) {
            this.checkGameStatus();
        }
        for (let obj of this.locationMap.keys()) {
            obj.update();
        }
    }

    render() {
        CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);
        CTX.beginPath();
        CTX.fillStyle = this.scheme.colorFor("Background");
        CTX.rect(0, 0, CANVAS.width, CANVAS.height);
        CTX.fill();

        if (this.gameState === GameState.Editor) {
            CTX.save();
            CTX.strokeStyle = this.scheme.colorFor("HighlightBasic");
            let s = this.size;
            for (let line = 0; line < this.grid.length; ++line) {
                for (let col = 0; col < this.grid[line].length; col++) {
                    CTX.beginPath();
                    CTX.rect(line * s, col * s, s, s);
                    CTX.stroke();
                }
            }
            CTX.restore();
        }

        for (let obj of this.renderQueue.data) {
            obj.item.render(this.scheme);
        }

        this.lg.rayCast(this);

        let gs = this.gameState;
        if (gs === GameState.Completed || gs === GameState.Over) {
            CTX.beginPath();
            CTX.save();
            CTX.globalAlpha = 0.7;
            CTX.fillStyle = this.scheme.colorFor("HighlightBasic");
            CTX.fillRect(0, 0, CANVAS.width, CANVAS.height);
            CTX.restore();

            CTX.beginPath();
            CTX.save();
            CTX.fillStyle = this.scheme.colorFor("Background");
            let msg, shift, hShift, helpMsg;
            if (this.gameState === GameState.Completed) {
                msg = "LEVEL COMPLETE";
                shift = 150;
                hShift = 135;
                helpMsg = "hit space to go back to the menu";
            } else {
                msg = "GAME OVER";
                shift = 100;
                hShift = 135;
                helpMsg = "hit space to retry the same level";
            }
            let textX = CANVAS.width / 2 - shift;
            let textY = CANVAS.height / 2;
            CTX.font = "bold 40px Roboto"
            CTX.fillText(msg, textX, textY);


            let x = CANVAS.width / 2 - hShift;
            let y = CANVAS.height / 2 + 25;
            CTX.font = "20px Roboto"
            CTX.fillText(helpMsg, x, y);
        }
    }

    remove(obj: GameObject) {
        let loc = obj.location();
        let targetObjects = this.grid[loc.x][loc.y];
        for (let i = 0; i < targetObjects.length; ++i) {
            if (targetObjects[i] === obj) {
                targetObjects.splice(i, 1);
                break;
            }
        }
        if (this.player === obj) {
            this.player = undefined;
        }
        if (this.box === obj) {
            this.box = undefined;
        }
        this.locationMap.remove(obj);
        this.renderQueue.remove(obj);
        if (isLight(obj)) {
            this.lg.remove(obj);
        }
        if (isLock(obj)) {
            for (let target of this.locationMap.keys()) {
                if (isLockable(target)) {
                    target.removeLock(obj);
                }
            }
        }
    }

    getSelected() {
        let selected = new Array<GameObject>();
        for (let obj of this.locationMap.keys()) {
            if (obj.selected) {
                selected.push(obj);
            }
        }
        return selected;
    }

    unselectAll() {
        for (let obj of this.locationMap.keys()) {
            if (obj.selected) {
                obj.selected = false;
            }
        }
    }

    resetHighlight() {
        for (let obj of this.locationMap.keys()) {
            obj.highlightLevel = Highlight.None;
            if (obj instanceof Mine) {
                obj.highlightPath = false;
            }
        }
    }

    checkGameStatus() {
        if (this.player === undefined || this.box === undefined) {
            return;
        }
        // level completed
        if (this.player.location().equals(this.box.location())) {
            this.gameState = GameState.Completed;
            var sound = new Howl({
                urls: ['sounds/success.wav']
            }).play();
            updateHistory();
        }
        // mine hit
        for (let obj of this.locationMap.keys()) {
            if (obj instanceof Mine) {
                let mLoc = obj.location();
                let pLoc = this.player.location();
                let yDiff = Math.abs(mLoc.y - pLoc.y);
                let xDiff = Math.abs(mLoc.x - pLoc.x);
                if (yDiff < 2 && xDiff < 2) {
                    this.gameState = GameState.Over;
                    var sound = new Howl({
                        urls: ['sounds/failure.wav']
                    }).play();
                    break;
                }
            }
        }
    }

    /**
     * Removes all objects from the game grid and resets
     * all internal state
     */
    clear() {
        this.player = undefined;
        this.box = undefined;
        this.grid = new Array();
        for (let i = 0; i < this.width; ++i) {
            let col = new Array();
            for (let j = 0; j < this.height; ++j) {
                col.push(new Array<GameObject>());
            }
            this.grid.push(col);
        }
        this.renderQueue = new PriorityQueue<GameObject>();
        this.locationMap = new Dictionary<GameObject, Point>();
        this.lg.clear();
    }
}
