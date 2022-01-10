class Point {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(pointA, pointB) {
        let xDistance = pointA.x - pointB.x;
        let yDistance = pointA.y - pointB.y;

        let distance = Math.sqrt(xDistance **2 + yDistance ** 2);

        return distance;
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));
