//point.js

(function () {
    // BODY
    return Point;
})();

class Point {
    x: number;
    y: number;

    constructor(x:number, y:number){
        this.x = x;
        this.y = y;
    }

    add(point: Point){
        return new Point(this.x + point.x, this.y + point.y);
    }
}

//clase hija

class Point3D extends Point {
    z: number;

    constructor(x:number, y:number, z:number){
        super(x, y);
        this.z = z;
    }

    add(point: Point3D){
        // llamada a la funcion padre
        var point2D = super.add(point);
        //devuelve un nuevo punto 3D
        return new Point3D(point2D.x, point2D.y, this.z + point.z);
    }
}