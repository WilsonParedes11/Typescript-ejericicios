"use strict";
//point.js
(function () {
    // BODY
    return Point;
})();
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    add(point) {
        return new Point(this.x + point.x, this.y + point.y);
    }
}
//clase hija
class Point3D extends Point {
    constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }
    add(point) {
        // llamada a la funcion padre
        var point2D = super.add(point);
        //devuelve un nuevo punto 3D
        return new Point3D(point2D.x, point2D.y, this.z + point.z);
    }
}
