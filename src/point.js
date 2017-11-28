'use strict'

export default class Point {
    constructor(x, y) {
        this.x = x || 0;
        this.y = y || 0;
    }

    get length() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }

    get normalized() {
        return this.div(this.length);
    }

    add(p) {
        return new Point(this.x + p.x, this.y + p.y);
    }

    mul(n) {
        return new Point(this.x * n, this.y * n);
    }

    sub(p) {
        return this.add(p.mul(-1));
    }

    div(n) {
        return this.mul(1/n);
    }

}
