'use strict';

const Sketch = (p) => {
    let gray = 0;
    p.setup = () => {
        p.createCanvas(600, 800)
    };
    p.draw = () => {
        p.background(gray);
        p.rect(p.width / 2 - 25, p.height / 2 - 25, 50, 50)
    };
    p.mousePressed = () => {
        gray = (gray + 16) % 256
    }
};

export default Sketch;