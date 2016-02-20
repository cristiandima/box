class Point {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    equals(that: Point) {
        return this.x === that.x && this.y == that.y;
    }
}

class Line {
    private slope: number;
    private intercept: number;
    private vertical = false;
    private x: number;

    constructor(a: Point, b: Point) {
        if (b.x === a.x) {
            this.vertical = true;
            this.slope = undefined;
            this.intercept = undefined;
            this.x = a.x;
        } else {
            let slope = (b.y - a.y) / (b.x - a.x);
            let intercept = -slope * a.x + a.y;
            this.slope = slope;
            this.intercept = intercept;
        }
    }

    intersect(that: Line) {
        if (this.vertical) {
            return new Point(this.x, that.slope * this.x + that.intercept);
        }
        if (that.vertical) {
            return new Point(that.x, this.slope * that.x + this.intercept);
        }
        let x = (that.intercept - this.intercept) / (this.slope - that.slope);
        let y = this.slope * x + this.intercept;
        return new Point(x, y);
    }
}

/**
 * Assuming a grid of squares of side equal to 1 this function takes
 * the coordinates of two points and returns the coordinates of the
 * grid squares crossed by a ray cast between the two given points.
 *
 * Note that while the function can take points like (1.5, 1.5) it will
 * return points of form (1, 1), (2, 2) etc
 */
function rayCast(source: Point, dest: Point) {
    let dx = Math.abs(source.x - dest.x);
    let dy = Math.abs(source.y - dest.y);
    let xStep = (dest.x > source.x) ? 1 : -1;
    let yStep = (dest.y > source.y) ? 1 : -1;
    let error = dx - dy;

    let x = source.x;
    let y = source.y;
    let path = new Array<Point>();
    dx *= 2;
    dy *= 2;

    while (true) {
        path.push(new Point(Math.floor(x), Math.floor(y)));
        if (x === dest.x && y === dest.y) {
            break;
        }
        if (error > 0) {
            x += xStep;
            error -= dy;
        } else if (error < 0) {
            y += yStep;
            error += dx;
        } else {
            // move diagonally
            x += xStep;
            y += yStep;
            error += dx;
            error -= dy;
        }
    }
    return path;
}

/**
 * Takes two grid square coordinates and returns the side of the
 * destination square which gets crossed moving from source to dest
 * @param {Point} source
 * @param {Point} dest
 */
function getCrossedLine(source: Point, dest: Point): Line {
    // left of the dest square
    if (source.x < dest.x) {
        return new Line(dest, new Point(dest.x, dest.y + 1));
    }
    // right of the dest square
    if (source.x > dest.x) {
        let p1 = new Point(dest.x + 1, dest.y);
        let p2 = new Point(dest.x + 1, dest.y + 1);
        return new Line(p1, p2);
    }
    // above
    if (source.x === dest.x && source.y < dest.y) {
        return new Line(dest, new Point(dest.x + 1, dest.y));
    }
    // below
    if (source.x === dest.x && source.y > dest.y) {
        let p1 = new Point(dest.x, dest.y + 1);
        let p2 = new Point(dest.x + 1, dest.y + 1);
        return new Line(p1, p2);
    }
    // identical coordinates
    return undefined;
}