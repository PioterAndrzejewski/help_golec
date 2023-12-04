'use strict'
/// <reference path="js13k2020.d.ts" />

/* Traced using the Polar Bears tool:
 * https://codepen.io/mvasilkov/details/VwaMMPK
 */
const INTERNET_EXPLORER = [
    [1, 1, 1, 0],
    [2, 2, 1, 0],
    [3, 3, 1, 0],
    [4, 4, 1, 0],
    [5, 5, 1, 0],
    [6, 6, 1, 0],
    [7, 7, 1, 0],
    [8, 8, 1, 0],
    [9, 9, 1, 0],
    [10, 10, 1, 0],
    [11, 11, 1, 0],
    [12, 12, 1, 0],
    [13, 13, 1, 0],
    [14, 14, 1, 0],
    [15, 15, 1, 0],
    [0, 0, 1, 0],
    [0, 1, 0.68, 0.33],
    [8, 7, 0.48, 0.33],
    [8, 9, 0.43, 0.38],
    [15, 0, 0.38, 0.08],
    [15, 14, 0.46, 0],
    [14, 13, 0.51, 0.01],
    [13, 12, 0.54, 0.01],
    [12, 11, 0.55, 0.01],
    [11, 12, 0.54, 0.01],
    [10, 11, 0.51, 0],
    [9, 8, 0.47, 0],
    [9, 8, 0.38, 0.09],
    [7, 8, 0.33, 0.14],
    [7, 8, 0.46, 0.01],
    [6, 7, 0.51, 0.01],
    [5, 6, 0.55, 0],
    [4, 5, 0.54, 0.01],
    [3, 4, 0.54, 0.01],
    [2, 1, 0.52, 0],
    [2, 1, 0.41, 0.11],
    [1, 0, 0.86, 0.14],
]

const INTERNET_EXPLORER_BACK = canvas.createRadialGradient(
    256, 256, 363, // Math.ceil(Math.sqrt(2 * 65536)),
    256, 128, 0
)
INTERNET_EXPLORER_BACK.addColorStop(1 - 1, '#0d79c8')
// INTERNET_EXPLORER_BACK.addColorStop(1 - 0.9544, '#1c87cf')
// INTERNET_EXPLORER_BACK.addColorStop(1 - 0.8397, '#3ea5dd')
// INTERNET_EXPLORER_BACK.addColorStop(1 - 0.7163, '#59bee9')
// INTERNET_EXPLORER_BACK.addColorStop(1 - 0.5832, '#6ed2f2')
// INTERNET_EXPLORER_BACK.addColorStop(1 - 0.4357, '#7ddff9')
INTERNET_EXPLORER_BACK.addColorStop(1 - 0.2624, '#86e8fd')
INTERNET_EXPLORER_BACK.addColorStop(1 - 0, '#89eafe')

const theimage = new Image();
theimage.src = "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/385533508_258865453538004_9066029919447688264_n.png?_nc_cat=100&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=ymJhP41h1EIAX864e9f&_nc_oc=AQn5Mb9PpW2cpBsDZ0rRTTWb7CaI6MHvXN-CM2tgspi1qWhS5UzshXj18pgd7lk9AI8&_nc_ht=scontent-waw1-1.xx&oh=03_AdTkKPeiVGLI1mElg9O3l-CuTEYKyszbcn-Q-PP96bmWHA&oe=65959A0E"



class InternetExplorer extends UserAgent {
    paint(canvas: CanvasRenderingContext2D, t: number) {
        this.interpolate(t)

        this.tracePath(canvas, INTERNET_EXPLORER)

        // canvas.save()
        // enclose(this.center.x - this.halfExtents.x, this.center.y - this.halfExtents.y,
        //     this.center.x + this.halfExtents.x, this.center.y + this.halfExtents.y)

        // canvas.fillStyle = INTERNET_EXPLORER_BACK // '#0078d7'
        // canvas.fill()
        
        const imageX = this.center.x - this.halfExtents.x;
        const imageY = this.center.y - this.halfExtents.y - 10;
        const imageWidth = this.halfExtents.x * 2;
        const imageHeight = this.halfExtents.y * 2.6;


        canvas.drawImage(theimage, imageX, imageY, imageWidth, imageHeight);

        canvas.restore()
    }
}
