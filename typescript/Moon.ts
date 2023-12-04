'use strict'
/// <reference path="js13k2020.d.ts" />

class Moon {
    x: number
    y: number
    width: number
    height: number

    constructor() {
        this.x = Settings.screenWidth - Settings.websiteWidth
        this.y = (Settings.screenHeight - Settings.websiteHeight) * 0.5
        this.width = Settings.websiteWidth
        this.height = Settings.websiteHeight
    }

    update() {
    }

    contains(p: IVec2): boolean {
        return (
            p.x >= this.x && p.x - this.x < this.width &&
            p.y >= this.y && p.y - this.y < this.height
        )
    }

    paint(canvas: CanvasRenderingContext2D, _t: number) {
        canvas.fillStyle = '#f1f1f1'
        canvas.fillRect(this.x, this.y, this.width, this.height)

        // canvas.drawImage(WEBSITE_PICTURE,
        //     this.x + (Settings.websiteWidth - Settings.websitePicWidth) * 0.5,
        //     this.y + (Settings.websiteHeight - Settings.websitePicHeight) * 0.5,
        //     Settings.websitePicWidth, Settings.websitePicHeight)

        const text = 'KSIĘZYC';
        const textX = this.x + 50; // Adjust the X position as needed
        const textY = this.y + 50; // Adjust the Y position as needed
    
        canvas.fillStyle = 'black'; // Set the text color
        canvas.font = '16px Arial'; // Set the font style
    
        canvas.fillText(text, textX, textY);
    }
}
