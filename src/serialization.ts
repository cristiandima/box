/**
 * Serializes a GameGrid object into a javascript "level" object
 * which can be used to update an empty grid
 * @param {GameGrid} g [description]
 */
function serialize(g: GameGrid) {
    let all = g.allObjects();
    let level = {};
    for (let obj of all) {
        if (obj instanceof Mine) {
            level[obj.hashCode()] = {
                "name": objToClassName(obj),
                "path": JSON.stringify(obj.path.map(p => [p.x, p.y])),
                "loc": [obj.location().x, obj.location().y]
            }
        } else if (obj instanceof Door) {
            level[obj.hashCode()] = {
                "name": objToClassName(obj),
                "locks": obj.getLocks().map(l => l.hashCode()),
                "loc": [obj.location().x, obj.location().y]
            }
        } else if (obj instanceof Portal) {
            level[obj.hashCode()] = {
                "name": objToClassName(obj),
                "locks": obj.getLocks().map(l => l.hashCode()),
                "loc": [obj.location().x, obj.location().y],
                "target": obj.target.hashCode()
            }
        } else {
            level[obj.hashCode()] = {
                "name": objToClassName(obj),
                "loc": [obj.location().x, obj.location().y],
            }
        }
    }
    return level;
}

/**
 * Uses the given level object to update the given game
 * grid with the saved level objects
 * @param {{}}     level [description]
 * @param {GameGrid} g     [description]
 */
function deserialize(level: {}, g: GameGrid) {
    let objMap: { [id: string]: GameObject } = {};
    for (let key in level) {
        let props = level[key];
        objMap[key] = nameToGameObject(props.name, g);
        objMap[key].move(new Point(props.loc[0], props.loc[1]));
    }
    for (let key in objMap) {
        let obj = objMap[key];
        let props = level[key];
        if (isLockable(obj)) {
            for (let i = 0; i < props.locks.length; ++i) {
                let l = objMap[props.locks[i]];
                if (isLock(l)) {
                    obj.addLock(l);
                }
            }
            if (obj instanceof Portal) {
                obj.target = <Portal>objMap[props.target];
            }
        }
        if (obj instanceof Mine) {
            obj.path = JSON.parse(props.path).map(p => new Point(p[0], p[1]));
        }
    }
}

function objToClassName(obj) {
    return obj.constructor.name;
}

function nameToGameObject(name: String, grid: GameGrid) {
    switch (name) {
        case "Wall":
            return new Wall(grid);
        case "WindowWall":
            return new WindowWall(grid);
        case "WindowWallVertical":
            return new WindowWallVertical(grid);
        case "Player":
            return new Player(grid);
        case "Platform":
            return new Platform(grid);
        case "Mine":
            return new Mine(grid);
        case "Square":
            return new Square(grid);
        case "Door":
            return new Door(grid);
        case "Box":
            return new Box(grid);
        case "Portal":
            return new Portal(grid);
        case "LightSource":
            return new LightSource(grid);
        case "LightReceiver":
            return new LightReceiver(grid);
        case "LightConnector":
            return new LightConnector(grid);
        default:
            return undefined;
    }
}
