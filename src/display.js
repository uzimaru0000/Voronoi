'use strict'

export default class Display {
    constructor(id) {
        this._canvas = document.getElementById(id);
        this._context = this._canvas.getContext('2d');
    }

    stroke() {
        this._context.stroke();
        this._context.closePath();
    }

    fill() {
        this._context.fill();
        this._context.closePath();
    }

    fillRect(pos, size) {
        this._context.beginPath();
        this._context.fillRect(pos.x, pos.y, size.x, size.y);
        return this;
    }

    fillCircle(pos, r) {
        this._context.beginPath();
        this._context.arc(pos.x, pos.y, r, 0, Math.PI * 2, false);
        this.fill();
        return this;
    }

    strokeRect(pos, size) {
        this._context.beginPath();
        this._context.strokeRect(pos.x, pos.y, size.x, size.y);
        return this;
    }

    strokeCircle(pos, r) {
        this._context.beginPath();
        this._context.arc(pos.x, pos.y, r, 0, Math.PI * 2, false);
        this.stroke();
        return this;
    }

    moveTo(pos) {
        this._context.beginPath();
        this._context.moveTo(pos.x, pos.y);
        return this;
    }

    lineTo(pos) {
        this._context.lineTo(pos.x, pos.y);
        return this;
    }

    fillPolygon(points) {
        points.reduce((acc, x) => acc.lineTo(x), this)
              .fill();
        return this;
    }

    strokePolygon(points) {
        points.reduce((acc, x) => acc.lineTo(x), this)
              .stroke();
        return this;
    }
}
