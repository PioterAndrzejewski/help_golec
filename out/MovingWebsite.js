'use strict';
class MovingWebsite extends Website {
    constructor() {
        super();
        this.n = 0;
        this.old = {
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
        };
    }
    update() {
        if (this.n > 80)
            return;
        ++this.n;
        this.old.x = this.x;
        this.old.y = this.y;
        this.old.width = this.width;
        this.old.height = this.height;
        if (this.n <= 25) {
            const t = this.n * 0.04;
            this.x = lerp(850 /* MW.x0 */, 807 /* MW.x1 */, easeInQuad(t));
            this.y = lerp(172 /* MW.y0 */, 387 /* MW.y1 */, easeInQuad(t));
            this.width = lerp(110 /* MW.width0 */, 153 /* MW.width1 */, easeInQuad(t));
            this.height = lerp(196 /* MW.height0 */, 153 /* MW.height1 */, easeInQuad(t));
        }
        else { // this.n <= 80
            const t = (this.n - 25) / 55;
            this.x = lerp(807 /* MW.x1 */, 252 /* MW.x2 */, easeOutQuad(t));
            this.y = lerp(387 /* MW.y1 */, 430 /* MW.y2 */, easeOutQuad(t));
            this.width = lerp(153 /* MW.width1 */, 196 /* MW.width2 */, easeOutQuad(t));
            this.height = lerp(153 /* MW.height1 */, 110 /* MW.height2 */, easeOutQuad(t));
        }
    }
    paint(canvas, t) {
        let x;
        let y;
        let width;
        let height;
        if (this.n > 80) {
            x = this.x;
            y = this.y;
            width = this.width;
            height = this.height;
        }
        else {
            x = lerp(this.old.x, this.x, t);
            y = lerp(this.old.y, this.y, t);
            width = lerp(this.old.width, this.width, t);
            height = lerp(this.old.height, this.height, t);
        }
        canvas.fillStyle = '#f1f1f1';
        canvas.fillRect(x, y, width, height);
        const text = 'OSZCZĘDNOŚCI';
        const textX = this.x + 60; // Adjust the X position as needed
        const textY = this.y + 50; // Adjust the Y position as needed
        canvas.fillStyle = 'black'; // Set the text color
        canvas.font = '14px Arial'; // Set the font style
        canvas.fillText(text, textX, textY);
    }
}
