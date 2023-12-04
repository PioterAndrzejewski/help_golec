'use strict';
/// <reference path="js13k2020.d.ts" />
const FAILURE_BACK = canvas.createLinearGradient(0, 0, 960 /* Settings.screenWidth */, 0);
// Colors: https://uigradients.com/#DayTripper
FAILURE_BACK.addColorStop(0, '#f857a6');
FAILURE_BACK.addColorStop(1, '#ff5858');
function walloftext(canvas, text) {
    canvas.font = systemFont;
    canvas.textAlign = 'center';
    canvas.textBaseline = 'top';
    canvas.fillStyle = '#fff';
    for (let x = 80; x < 960 /* Settings.screenWidth */; x += 160) {
        for (let y = 15; y < 540 /* Settings.screenHeight */; y += 45) {
            canvas.fillText(text, x, y);
        }
    }
}
const FAILURE_PICTURE = prerender(960 /* Settings.screenWidth */, 540 /* Settings.screenHeight */, canvas => {
    canvas.fillStyle = FAILURE_BACK;
    canvas.fillRect(0, 0, 960 /* Settings.screenWidth */, 540 /* Settings.screenHeight */);
    walloftext(canvas, 'PAPA GODNOŚĆ');
});
const FAILURE_MOVED_PICTURE = prerender(960 /* Settings.screenWidth */, 540 /* Settings.screenHeight */, canvas => {
    canvas.fillStyle = FAILURE_BACK;
    canvas.fillRect(0, 0, 960 /* Settings.screenWidth */, 540 /* Settings.screenHeight */);
    walloftext(canvas, 'PAPA PERSPEKTYWY');
});
const WALL_PICTURE = prerender(960 /* Settings.screenWidth */, 540 /* Settings.screenHeight */, canvas => {
    canvas.beginPath();
    for (let x = 0; x < 960 /* Settings.screenWidth */ + 540 /* Settings.screenHeight */; x += 20) {
        canvas.moveTo(x, 0);
        canvas.lineTo(x - 540 /* Settings.screenHeight */, 540 /* Settings.screenHeight */);
    }
    canvas.strokeStyle = FAILURE_BACK;
    canvas.stroke();
});
function paintBackground(canvas, t, level) {
    canvas.clearRect(0, 0, 960 /* Settings.screenWidth */, 540 /* Settings.screenHeight */);
    if (level.constructor === Level) {
        canvas.font = systemFont;
        canvas.textAlign = 'center';
        canvas.textBaseline = 'top';
        canvas.fillStyle = '#f1f1f1';
        canvas.fillText('1. Ciągnij', level.startingPoint.x, level.startingPoint.y + 48);
        canvas.fillText('2. Puść', level.startingPoint.x - 256 /* Settings.targetReleaseDist */, level.startingPoint.y + 48);
    }
    else if (level.constructor === End) {
        canvas.font = systemFont;
        canvas.textAlign = 'center';
        canvas.textBaseline = 'middle';
        canvas.fillStyle = '#f1f1f1';
        canvas.fillText('Golec, stolec, pierdolec, kondomomolec, wigilia 2023', 960 /* Settings.screenWidth */ * 0.5, 540 /* Settings.screenHeight */ - 24);
        canvas.font = systemFontHeading;
        canvas.fillStyle = EARTH_BACK;
        canvas.fillText('Udało się zdobyć godność dla Golec!', 960 /* Settings.screenWidth */ * 0.5, 540 /* Settings.screenHeight */ * 0.25);
    }
}
function paintCurtain(canvas, t, level) {
    let width;
    if (level.state === 3 /* LevelState.WAITING */) {
        width = (level.waited - 1 + t) / level.duration * 960 /* Settings.screenWidth */;
        canvas.fillStyle = FAILURE_BACK;
        canvas.fillRect(0, 0, width, 3);
    }
    else if (level.state === 4 /* LevelState.FAILING */) {
        width = easeOutQuad((level.curtain - 1 + t) / 24 /* Settings.waitCurtain */) * 0.5 * 1102 /* Settings.displaySize */;
        canvas.fillStyle = FAILURE_BACK;
        canvas.fillRect(0, 0, 960 /* Settings.screenWidth */, 3);
        _paintCurtain(canvas, level.curtainPicture, 0, 540 /* Settings.screenHeight */, width);
        _paintCurtain(canvas, level.curtainPicture, 960 /* Settings.screenWidth */, 0, -width);
    }
    else if (level.state === 5 /* LevelState.RESTARTING */) {
        width = easeInQuad((level.curtain + 1 - t) / 24 /* Settings.waitCurtain */) * 0.5 * 1102 /* Settings.displaySize */;
        _paintCurtain(canvas, level.curtainPicture, 0.5 * 960 /* Settings.screenWidth */, 0.5 * 540 /* Settings.screenHeight */, -width, width);
    }
}
function _paintCurtain(canvas, picture, x, y, width, start = 0) {
    canvas.save();
    canvas.translate(x, y);
    canvas.rotate(-0.5124); // Math.atan2(-540, 960)
    canvas.beginPath();
    canvas.lineTo(start, -500);
    canvas.lineTo(width, -500);
    canvas.lineTo(width, 1000);
    canvas.lineTo(start, 1000);
    canvas.closePath();
    canvas.restore();
    canvas.save();
    canvas.clip();
    // canvas.fillStyle = FAILURE_BACK
    // canvas.fillRect(0, 0, Settings.screenWidth, Settings.screenHeight)
    canvas.drawImage(picture, 0, 0, 960 /* Settings.screenWidth */, 540 /* Settings.screenHeight */);
    canvas.restore();
}
