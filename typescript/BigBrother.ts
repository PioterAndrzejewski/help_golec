'use strict'
/// <reference path="js13k2020.d.ts" />

/* Traced using the Polar Bears tool:
 * https://codepen.io/mvasilkov/details/VwaMMPK
 */
const CHROME_YELLOW = [
    [0, 0, 1, 0],
    [1, 1, 1, 0],
    [2, 2, 1, 0],
    [3, 3, 1, 0],
    [4, 4, 1, 0],
    // [4, 5, 0.88, 0.12],
    [5, 5, 1, 0], // Intentional overlap.
    [1, 2, 0.31, 0.15],
    [12, 11, 0.44, 0.01],
    // [15, 14, 0.78, 0.22],
    [14, 14, 1, 0], // Intentional overlap.
    [15, 15, 1, 0],
]

const CHROME_GREEN = [
    [5, 5, 1, 0],
    [6, 6, 1, 0],
    [7, 7, 1, 0],
    [8, 8, 1, 0],
    [9, 9, 1, 0],
    // [9, 10, 0.56, 0.44],
    [10, 10, 1, 0], // Intentional overlap.
    [7, 6, 0.31, 0.15],
    [1, 2, 0.31, 0.15],
    [4, 5, 0.88, 0.12],
]

const CHROME_RED = [
    [10, 10, 1, 0],
    [11, 11, 1, 0],
    [12, 12, 1, 0],
    [13, 13, 1, 0],
    [14, 14, 1, 0],
    [15, 14, 0.78, 0.22],
    [12, 11, 0.44, 0.01],
    [7, 6, 0.31, 0.15],
    [9, 10, 0.56, 0.44],
]

const CHROME_BLUE = [
    [0, 1, 0.45, 0],
    [1, 0, 0.44, 0.01],
    [2, 3, 0.44, 0.01],
    [3, 4, 0.44, 0.01],
    [4, 3, 0.45, 0],
    [5, 6, 0.44, 0.01],
    [6, 7, 0.45, 0.01],
    [7, 8, 0.44, 0.01],
    [8, 9, 0.46, 0],
    [9, 10, 0.45, 0.01],
    [10, 11, 0.45, 0.01],
    [11, 10, 0.45, 0],
    [12, 11, 0.44, 0.01],
    [13, 12, 0.44, 0.01],
    [14, 13, 0.44, 0.01],
    [15, 14, 0.44, 0.01],
]
const jonak = new Image();
jonak.src = 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/370628986_1046976443114784_3099792772355061102_n.png?_nc_cat=109&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=3K6VTg9ofuEAX9uor8R&_nc_ht=scontent-waw1-1.xx&oh=03_AdTRQtb50vdOUs1gm7Ip8a6HZskNIbyHHyzPoY4xelX4UQ&oe=6595C20B'

class BigBrother extends UserAgent {
    paint(canvas: CanvasRenderingContext2D, t: number) {
        this.interpolate(t)

        this.tracePath(canvas, CHROME_YELLOW)

        this.tracePath(canvas, CHROME_GREEN)

        this.tracePath(canvas, CHROME_RED)

        canvas.lineWidth = 1 // restore

        const imageX = this.center.x - this.halfExtents.x;
        const imageY = this.center.y - this.halfExtents.y - 10;
        const imageWidth = this.halfExtents.x * 2;
        const imageHeight = this.halfExtents.y * 2.6;


        canvas.drawImage(jonak, imageX, imageY, imageWidth, imageHeight);
    }
}
