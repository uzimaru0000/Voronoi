'use strict'

import Point from './point'
import Display from './display'

window.onload = () => {
    const display = new Display('canvas');

    const func = x => -1/160 * Math.pow(x - 320, 2) + 640;

    const pos = [...Array(100)].map((_, i) => (640 / 99) * i)
        .map(x => new Point(x, func(x)));

    display.fillPolygon(pos);
};
