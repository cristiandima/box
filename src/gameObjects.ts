/// <reference path="../lib/howler.d.ts" />

enum BodyType {
    Solid,
    Transparent,
    Window,
    Invisible
}

enum Highlight {
    None,
    Basic,
    Linked,
    Selected
}

interface Lockable {
    addLock(lock: Lock);
    removeLock(lock: Lock);
    lockedBy(lock: Lock);
    getLocks(): Lock[];
}
function isLockable(o: GameObject): o is Lockable & GameObject {
    if (o.__implements.indexOf("Lockable,") >= 0) {
        return true;
    }
    return false;
}

interface Lock extends Hashable {
    isOpen(): boolean;
}
function isLock(o: GameObject): o is Lock & GameObject {
    if (o.__implements.indexOf("Lock,") >= 0) {
        return true;
    }
    return false;
}

interface Light extends Hashable {
    isOn();
    toggle();
    location();
}
function isLight(o: GameObject): o is Light & GameObject {
    if (o.__implements.indexOf("Light,") >= 0) {
        return true;
    }
    return false;
}

abstract class GameObject implements Hashable {
    __implements = "";
    protected code: number;

    grid: GameGrid;
    highlightLevel = Highlight.None;
    selected = false;

    constructor(grid: GameGrid) {
        this.grid = grid;
        this.code = HashCoder.nextHash();
        this.grid.register(this);
    }

    hashCode() {
        return this.code;
    }

    location() {
        return this.grid.locate(this);
    }

    move(loc: Point): void {
        this.grid.move(this, loc);
    }

    update(): void {
    }

    renderPriority() {
        return 0;
    }

    highlight(scheme: ColorScheme): void {
        if (this.highlightLevel === Highlight.None) {
            return;
        }
        let x = this.location().x * this.grid.size - this.grid.size * 0.05;
        let y = this.location().y * this.grid.size - this.grid.size * 0.05;
        CTX.beginPath();
        CTX.save();
        CTX.rect(x, y, this.grid.size * 1.1, this.grid.size * 1.1);
        let color;
        if (this.highlightLevel === Highlight.Basic) {
            color = scheme.colorFor("HighlightBasic");
        } else if (this.highlightLevel === Highlight.Linked) {
            color = scheme.colorFor("HighlightLinked");
        } else if (this.highlightLevel === Highlight.Selected) {
            color = scheme.colorFor("HighlightSelected");
        }
        CTX.strokeStyle = color;
        CTX.lineWidth = 3;
        CTX.stroke();
        CTX.restore();
    }

    abstract render(scheme: ColorScheme): void;
    abstract bodyType(): BodyType;
}

class Square extends GameObject {
    bodyType() {
        return BodyType.Transparent;
    }

    render(scheme: ColorScheme) {
        this.highlight(scheme);
        let x = this.location().x * this.grid.size + this.grid.size * 0.15;
        let y = this.location().y * this.grid.size + this.grid.size * 0.15;
        CTX.beginPath();
        CTX.save();
        CTX.rect(x, y, this.grid.size * 0.7, this.grid.size * 0.7);
        CTX.fillStyle = scheme.colorFor("Box");
        CTX.fill();
        CTX.restore();
    }
}

class Box extends GameObject {
    bodyType() {
        return BodyType.Transparent;
    }

    render(scheme: ColorScheme) {
        this.highlight(scheme);
        let x = this.location().x * this.grid.size + this.grid.size * 0.15;
        let y = this.location().y * this.grid.size + this.grid.size * 0.15;
        CTX.beginPath();
        CTX.save();
        CTX.rect(x, y, this.grid.size * 0.7, this.grid.size * 0.7);
        CTX.fillStyle = scheme.colorFor("WhiteBox");
        CTX.fill();
        CTX.restore();
    }
}

class Door extends GameObject implements Lockable {
    __implements = "Lockable,";
    private open = false;
    private locks = new Array<Lock>();

    addLock(lock: Lock) {
        this.locks.push(lock);
    }

    removeLock(lock: Lock) {
        for (let i = 0; i < this.locks.length; ++i) {
            if (this.locks[i] === lock) {
                this.locks.splice(i, 1);
                break;
            }
        }
    }

    lockedBy(lock: Lock) {
        return this.locks.indexOf(lock) != -1;
    }

    getLocks() {
        return this.locks;
    }

    bodyType() {
        return !this.open ? BodyType.Solid : BodyType.Invisible;
    }

    update() {
        let prevState = this.open;
        this.open = false;
        let lockCount = this.locks.length;
        if (lockCount > 0) {
            if (this.locks.filter(s => s.isOpen()).length == lockCount) {
                this.open = true;
            }
        }
        if (!prevState && this.open) {
            var sound = new Howl({
                urls: ['sounds/door-open.wav']
            }).play();
        }
    }

    render(scheme: ColorScheme) {
        this.highlight(scheme);
        if (this.open) {
            return;
        }
        for (let j = 0; j < 2; ++j) {
            let w = this.grid.size;
            let h = this.grid.size;
            let x = this.location().x * this.grid.size;
            let y = this.location().y * this.grid.size;
            if (j == 0) {
                w = this.grid.size * 0.1;
                x += this.grid.size * 0.15;
            } else {
                h = this.grid.size * 0.1;
                y += this.grid.size * 0.15;
            }
            for (let i = 0; i < 4; ++i) {
                CTX.beginPath();
                CTX.rect(x, y, w, h);
                CTX.fillStyle = scheme.colorFor("Door");
                CTX.fill();
                if (j == 0) {
                    x += this.grid.size * 0.2;
                } else {
                    y += this.grid.size * 0.2;
                }
            }
        }
    }
}

class Portal extends GameObject implements Lockable {
    __implements = "Lockable,";
    private open = false;
    private locks = new Array<Lock>();

    public target: Portal;

    addLock(lock: Lock) {
        this.locks.push(lock);
    }

    removeLock(lock: Lock) {
        for (let i = 0; i < this.locks.length; ++i) {
            if (this.locks[i] === lock) {
                this.locks.splice(i, 1);
                break;
            }
        }
    }

    lockedBy(lock: Lock) {
        return this.locks.indexOf(lock) != -1;
    }

    getLocks() {
        return this.locks;
    }

    isUnlocked() {
        let lockCount = this.locks.length
        if (lockCount > 0) {
            if (this.locks.filter(s => s.isOpen()).length == lockCount) {
                return true;
            }
        }
        return false;
    }

    bodyType() {
        return BodyType.Transparent;
    }

    update() {
        let prevState = this.open;
        let unlocked = this.isUnlocked();
        this.open = false;
        if (unlocked || (this.target && this.target.isUnlocked())) {
            this.open = true;
        }

        if (!prevState && unlocked && this.open) {
            var sound = new Howl({
                urls: ['sounds/portal-open.wav']
            }).play();
        }

        if (this.open && this.target !== undefined) {
            let player = this.grid.getPlayer();
            if (player.location().equals(this.location())) {
                if (player.lastPosition !== undefined
                    && !player.lastPosition.equals(this.target.location())) {
                    player.moveTo(this.target.location(), true);
                }
            }
        }
    }

    render(scheme: ColorScheme) {
        this.highlight(scheme);
        let x = this.location().x * this.grid.size + this.grid.size * 0.5;
        let y = this.location().y * this.grid.size + this.grid.size * 0.5;
        CTX.beginPath();
        CTX.save();
        CTX.arc(x, y, this.grid.size * 0.5, 0, 2 * Math.PI);
        let openColor = scheme.colorFor("PortalOn");
        let closedColor = scheme.colorFor("PortalOff");
        CTX.lineWidth = 5;
        CTX.strokeStyle = this.open ? openColor : closedColor;
        CTX.stroke();
        CTX.restore();
    }
}

class LightSource extends GameObject implements Light {
    __implements = "Light,";
    isOn() {
        return true;
    }

    toggle() {

    }

    bodyType() {
        return BodyType.Solid;
    }

    renderPriority() {
        return -20;
    }

    render(scheme: ColorScheme) {
        this.highlight(scheme);
        let cornerX = this.location().x * this.grid.size;
        let cornerY = this.location().y * this.grid.size;
        let x = cornerX + this.grid.size * 0.5;
        let y = cornerY + this.grid.size * 0.5;
        CTX.beginPath();
        CTX.rect(cornerX, cornerY, this.grid.size, this.grid.size);
        CTX.fillStyle = scheme.colorFor("Platform");
        CTX.fill();
        CTX.beginPath();
        CTX.arc(x, y, this.grid.size * 0.5, 0, 2 * Math.PI);
        CTX.fillStyle = scheme.colorFor("LightOn");
        CTX.fill();
    }
}

class LightReceiver extends GameObject implements Lock, Light {
    __implements = "Lock,Light,";
    private links = new Array<Lockable>();
    private on = false;

    isOn() {
        return this.on;
    }

    toggle() {
        this.on = !this.on;
    }

    isOpen() {
        return this.isOn();
    }

    bodyType() {
        return BodyType.Solid;
    }

    renderPriority() {
        return -20;
    }

    render(scheme: ColorScheme) {
        this.highlight(scheme);
        let x = this.location().x * this.grid.size + this.grid.size * 0.5;
        let y = this.location().y * this.grid.size + this.grid.size * 0.5;
        CTX.beginPath();
        CTX.arc(x, y, this.grid.size * 0.5, 0, 2 * Math.PI);
        // asdasdasdasdasd
        if (this.isOpen()) {
            CTX.fillStyle = scheme.colorFor("LightOn");
        } else {
            CTX.fillStyle = scheme.colorFor("LightOff");
        }
        CTX.fill();
    }
}

class LightConnector extends GameObject implements Light {
    __implements = "Light,";
    private on = false;
    isOn() {
        return this.on;
    }

    toggle() {
        this.on = !this.on;
    }

    bodyType() {
        return BodyType.Transparent;
    }

    renderPriority() {
        return -20;
    }

    render(scheme: ColorScheme) {
        this.highlight(scheme);
        let x = this.location().x * this.grid.size + this.grid.size * 0.5;
        let y = this.location().y * this.grid.size + this.grid.size * 0.5;
        CTX.beginPath();
        CTX.arc(x, y, this.grid.size * 0.3, 0, 2 * Math.PI);
        if (this.isOn()) {
            CTX.fillStyle = scheme.colorFor("LightOn");
        } else {
            CTX.fillStyle = scheme.colorFor("LightOff");
        }
        CTX.fill();
    }
}

class Player extends GameObject {
    grabbed: boolean;
    grabbedObject: GameObject;
    lastPosition: Point;

    bodyType() {
        return BodyType.Solid;
    }

    renderPriority() {
        return -100;
    }

    render(scheme: ColorScheme) {
        this.highlight(scheme);
        let x = this.location().x * this.grid.size;
        let y = this.location().y * this.grid.size;
        CTX.beginPath();
        // top left corner
        CTX.moveTo(x, y + this.grid.size * 0.33);
        CTX.lineTo(x, y);
        CTX.lineTo(x + this.grid.size * 0.33, y);
        // top right corner
        CTX.moveTo(x + this.grid.size * 0.66, y);
        CTX.lineTo(x + this.grid.size, y);
        CTX.lineTo(x + this.grid.size, y + this.grid.size * 0.33);
        // bot right corner
        CTX.moveTo(x + this.grid.size, y + this.grid.size * 0.66);
        CTX.lineTo(x + this.grid.size, y + this.grid.size);
        CTX.lineTo(x + this.grid.size * 0.66, y + this.grid.size);
        // bot left corner
        CTX.moveTo(x + this.grid.size * 0.33, y + this.grid.size);
        CTX.lineTo(x, y + this.grid.size);
        CTX.lineTo(x, y + this.grid.size * 0.66);

        CTX.save();
        CTX.lineWidth = 5;
        CTX.strokeStyle = scheme.colorFor("Player");
        CTX.stroke();
        CTX.restore();
    }

    moveTo(loc: Point, teleport = false) {
        let canMove = true;
        if (loc.x >= this.grid.width || loc.y >= this.grid.height
            || loc.x < 0 || loc.y < 0) {
            return;
        }
        let objects = this.grid.getObjectsAt(loc);
        if (this.grabbed && objects.length > 1) {
            return;
        }
        if (this.grabbed && objects.length == 1) {
            let obj = objects[0];
            if (!(obj instanceof Platform)
                && !(obj instanceof Door)
                && !(obj instanceof Portal)) {
                return;
            }
        }
        for (let obj of objects) {
            let bType = obj.bodyType();
            if (bType == BodyType.Solid || bType == BodyType.Window) {
                return;
            }
        }
        if (canMove) {
            this.lastPosition = this.location();
            this.grid.move(this, loc);
            if (teleport) {
                var sound = new Howl({
                    urls: ['sounds/teleport.wav']
                }).play();
            } else {
                var sound = new Howl({
                    urls: ['sounds/player-move.wav'],
                    volume: 0.5
                }).play();
            }

            if (this.grabbed) {
                this.grid.move(this.grabbedObject, loc);
            }
        }
    }

    grab() {
        if (this.grabbed) {
            let loc = this.location();
            let objects = this.grid.getObjectsAt(loc);
            if (objects.filter(o => o instanceof Door).length === 0) {
                this.grabbed = false;
                this.grabbedObject = undefined;
                var sound = new Howl({
                    urls: ['sounds/grab.wav']
                }).play();
            }
        } else {
            let objects = this.grid.getObjectsAt(this.location());
            for (let i = 0; i < objects.length; ++i) {
                if (objects[i] instanceof Square ||
                    objects[i] instanceof LightConnector) {
                    this.grabbedObject = objects[i];
                    this.grabbed = true;
                    var sound = new Howl({
                        urls: ['sounds/grab.wav']
                    }).play();
                }
            }
        }
    }
}

class Wall extends GameObject {
    bodyType() {
        return BodyType.Solid;
    }

    render(scheme: ColorScheme) {
        this.highlight(scheme);
        let x = this.location().x * this.grid.size;
        let y = this.location().y * this.grid.size;
        CTX.beginPath();
        CTX.save();
        CTX.rect(x, y, this.grid.size, this.grid.size);
        CTX.fillStyle = scheme.colorFor("Wall");
        CTX.fill();
        CTX.restore();
    }
}

class Platform extends GameObject implements Lock {
    __implements = "Lock,";
    isOpen() {
        let stuff = this.grid.getObjectsAt(this.location());
        if (stuff.length > 1) {
            return true;
        } else {
            return false;
        }
    }

    bodyType() {
        return BodyType.Transparent;
    }

    renderPriority() {
        return 10;
    }

    render(scheme: ColorScheme) {
        this.highlight(scheme);
        let x = this.location().x * this.grid.size + 0.05 * this.grid.size;
        let y = this.location().y * this.grid.size + 0.05 * this.grid.size;
        CTX.beginPath();
        CTX.rect(x, y, this.grid.size * 0.9, this.grid.size * 0.9);
        CTX.fillStyle = scheme.colorFor("Platform");
        CTX.fill();
    }
}

class WindowWall extends GameObject {
    bodyType() {
        return BodyType.Window;
    }

    render(scheme: ColorScheme) {
        this.highlight(scheme);
        let x = this.location().x * this.grid.size;
        let y = this.location().y * this.grid.size;

        CTX.beginPath();
        CTX.rect(x, y, this.grid.size, this.grid.size);
        CTX.fillStyle = scheme.colorFor("Wall");
        CTX.fill();

        CTX.beginPath();
        y = this.location().y * this.grid.size + this.grid.size * 0.33;
        CTX.rect(x, y, this.grid.size, 0.33 * this.grid.size);
        CTX.fillStyle = scheme.colorFor("Background");
        CTX.fill();
    }
}

class WindowWallVertical extends WindowWall {
    render(scheme: ColorScheme) {
        this.highlight(scheme);
        let x = this.location().x * this.grid.size;
        let y = this.location().y * this.grid.size;

        CTX.beginPath();
        CTX.rect(x, y, this.grid.size, this.grid.size);
        CTX.fillStyle = scheme.colorFor("Wall");
        CTX.fill();

        CTX.beginPath();
        x = this.location().x * this.grid.size + this.grid.size * 0.33;
        CTX.rect(x, y, 0.33 * this.grid.size, this.grid.size);
        CTX.fillStyle = scheme.colorFor("Background");
        CTX.fill();
    }
}

class Mine extends GameObject {
    path = new Array<Point>();
    curPos = 0;
    direction = 1;
    lastUpdate = -1;
    highlightPath = false;

    bodyType() {
        return BodyType.Solid;
    }

    destination() {
        return this.path[this.path.length - 1];
    }

    makePath(target: Point) {
        this.resetPatrol();
        let path = rayCast(this.location(), target);
        if (path.length > 1) {
            this.path = path;
        }
    }

    clearPath() {
        this.resetPatrol();
        this.path = new Array<Point>();
    }

    resetPatrol() {
        if (this.path[0] !== undefined) {
            this.move(this.path[0]);
        }
        this.curPos = 0;
        this.direction = 1;
        this.lastUpdate = -1;
    }

    highlight(scheme: ColorScheme) {
        super.highlight(scheme);
        if (this.highlightPath) {
            for (let loc of this.path) {
                let x = loc.x * this.grid.size - this.grid.size * 0.05;
                let y = loc.y * this.grid.size - this.grid.size * 0.05;
                CTX.beginPath();
                CTX.save();
                CTX.rect(x, y, this.grid.size * 1.1, this.grid.size * 1.1);
                CTX.strokeStyle = scheme.colorFor("HighlightBasic");
                CTX.lineWidth = 3;
                CTX.stroke();
                CTX.restore();
            }
        }
    }

    render(scheme: ColorScheme) {
        this.highlight(scheme);
        let x = this.location().x * this.grid.size;
        let y = this.location().y * this.grid.size;

        CTX.beginPath();
        CTX.save();
        CTX.rect(x, y, this.grid.size, this.grid.size);
        CTX.fillStyle = scheme.colorFor("Mine");
        CTX.fill();
        let s = this.grid.size;
        let area = [
            new Point(x - s, y - s), new Point(x, y - s),
            new Point(x + s, y - s), new Point(x - s, y),
            new Point(x + s, y), new Point(x - s, y + s),
            new Point(x, y + s), new Point(x + s, y + s),
        ];
        CTX.globalAlpha = 0.1;
        for (let p of area) {
            CTX.beginPath();
            CTX.rect(p.x, p.y, this.grid.size, this.grid.size);
            CTX.fill();
            CTX.fillStyle = scheme.colorFor("Mine");
        }
        CTX.restore();
    }

    update() {
        if (this.grid.gameState !== GameState.Live
            && this.grid.gameState !== GameState.Testing) {
            return;
        }
        let speed = 1000 / 3;
        if (this.lastUpdate == -1) {
            this.patrol()
            this.lastUpdate = (new Date()).getTime();
        } else {
            let curTime = (new Date()).getTime();
            if (curTime - this.lastUpdate > speed) {
                this.patrol();
                this.lastUpdate = curTime;
            }
        }
    }

    private patrol() {
        if (this.path.length < 1) {
            return;
        }
        if (this.curPos === this.path.length - 1) {
            this.direction = -1;
        }
        if (this.curPos === 0) {
            this.direction = 1;
        }
        this.curPos += this.direction;
        let next_pos = this.path[this.curPos];
        let targets = this.grid.getObjectsAt(next_pos);
        if (!this.canWalkThrough(targets)) {
            this.direction = -this.direction;
            this.curPos += this.direction * 2;
            next_pos = this.path[this.curPos];
            if (next_pos !== undefined) {
                targets = this.grid.getObjectsAt(next_pos);
                if (!this.canWalkThrough(targets)) {
                    this.curPos += -this.direction;
                    next_pos = this.location();
                }
            } else {
                next_pos = this.location();
            }
        }
        this.grid.move(this, next_pos);
    }

    private canWalkThrough(objects: Array<GameObject>) {
        if (objects.length === 0) {
            return true;
        }
        if (objects.every(o => o.bodyType() === BodyType.Invisible)) {
            return true;
        }
        return false;
    }
}
