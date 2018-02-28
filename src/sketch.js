//Force page refresh on hot reload

import {recalculateWindow} from './helpers'

const Sketch = (p) => {
    let gray = 0;
    p.setup = function () {
        p.createCanvas(window.innerWidth, window.innerHeight)
    };
    p.draw = function () {
        p.background(gray);
        p.rect(p.width/2 - 25, p.height/2 - 25, 50, 50)
    };
    p.mousePressed = function () {
        gray = (gray + 16) % 256
    }
};

export default Sketch;