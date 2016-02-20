/**
 * A graph connecting game objects able to ray cast
 * and draw light ray links between nodes on a given
 * game grid
 */
class LightGraph {
    graph = new UndirGraph<Light>();

    connect(one: Light, another: Light) {
        this.graph.connect(one, another);
    }

    disconnect(one: Light, another: Light) {
        this.graph.disconnect(one, another);
    }

    clear() {
        this.graph = new UndirGraph<Light>();
    }

    remove(node: Light) {
        this.graph.remove(node);
    }

    rayCast(g: GameGrid) {
        let lights = this.graph.vertices();
        lights.forEach(l => {
            if (l.isOn()) {
                l.toggle();
            }
        });
        let sources = lights.filter(l => l instanceof LightSource);
        if (sources.length === 0) {
            return;
        }
        let nodeQueue = new Queue<Light>(sources);
        let visited = new Set<Light>();
        while (!nodeQueue.empty()) {
            let source = nodeQueue.dequeue();
            visited.put(source);
            let from = source.location();
            from = new Point(from.x + 0.5, from.y + 0.5);

            let conns = this.graph.links(source);
            for (let j = 0; j < conns.length; ++j) {
                if (visited.contains(conns[j])) {
                    continue;
                }
                let to = conns[j].location();
                to = new Point(to.x + 0.5, to.y + 0.5);

                let path = rayCast(from, to);
                let turnOn = true;
                for (let k = 1; k < path.length - 1; ++k) {
                    let loc = path[k];
                    let objects = g.getObjectsAt(loc);
                    if (!canLightPass(objects)) {
                        let l1 = new Line(from, to);
                        let l2 = getCrossedLine(path[k - 1], path[k]);
                        let inter = l1.intersect(l2);

                        let fromCoord = gridPixelLoc(g.size, from);
                        let interCoord = gridPixelLoc(g.size, inter);
                        drawLightRay(g.scheme, fromCoord, interCoord);

                        turnOn = false;
                        break;
                    }
                }
                if (turnOn) {
                    if (!conns[j].isOn()) {
                        conns[j].toggle();
                    }
                    let fromCoord = gridPixelLoc(g.size, from);
                    let interCoord = gridPixelLoc(g.size, to);
                    drawLightRay(g.scheme, fromCoord, interCoord);
                    if (!visited.contains(conns[j])) {
                        if (!(conns[j] instanceof LightReceiver)) {
                            nodeQueue.enqueue(conns[j]);
                        }
                    }
                }
            }
        }
    }
}

function drawLightRay(scheme: ColorScheme, source: Point, dest: Point) {
    CTX.beginPath();
    CTX.save();
    CTX.moveTo(source.x, source.y);
    CTX.lineTo(dest.x, dest.y);
    CTX.lineWidth = 3;
    CTX.strokeStyle = scheme.colorFor("LightOn");
    CTX.stroke();
    CTX.lineWidth = 1;
    CTX.strokeStyle = scheme.colorFor("Background");
    CTX.stroke();
    CTX.restore();
}

function canLightPass(objects: Array<GameObject>): boolean {
    if (objects.length === 0) {
        return true;
    }
    if (objects.length === 1 && objects[0].bodyType() === BodyType.Window) {
        return true;
    }
    if (objects.length >= 1) {
        let invi = objects.filter(o => o.bodyType() === BodyType.Invisible);
        if (invi.length === objects.length) {
            return true;
        }
    }
    return false;
}

function gridPixelLoc(gridSize: number, loc: Point) {
    return new Point(loc.x * gridSize, loc.y * gridSize);
}
