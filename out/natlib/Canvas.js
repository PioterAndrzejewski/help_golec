'use strict';
/// <reference path="natlib.d.ts" />
function setSize($can, can, width, height) {
    if (window.devicePixelRatio > 1.44) {
        $can.height = 2 * height;
        $can.width = 2 * width;
        can.scale(2, 2);
    }
    else {
        $can.height = height;
        $can.width = width;
    }
}
const $canvas = $('.can');
const canvas = $canvas.getContext('2d');
setSize($canvas, canvas, 960 /* Settings.screenWidth */, 540 /* Settings.screenHeight */);
// #region Autosize canvas.
const aspectRatio = 16 / 9;
let uiScale = 1;
let transformProperty = 'transform';
if (!(transformProperty in $canvas.style)) {
    transformProperty = 'webkitTransform';
}
const hasVisualViewport = typeof visualViewport !== 'undefined';
function handleResize() {
    let w = hasVisualViewport ? visualViewport.width : innerWidth;
    let h = hasVisualViewport ? visualViewport.height : innerHeight;
    if (w / h > aspectRatio)
        w = h * aspectRatio;
    else
        h = w / aspectRatio;
    uiScale = 960 /* Settings.screenWidth */ / w;
    const k = w / 960 /* Settings.screenWidth */;
    $canvas.style[transformProperty] = `scale3d(${k},${k},1)`;
}
addEventListener('resize', handleResize);
addEventListener('orientationchange', handleResize);
if (hasVisualViewport)
    visualViewport.addEventListener('resize', handleResize);
// #endregion
const systemFont = `16px -apple-system, 'Segoe UI', system-ui, Roboto, sans-serif`;
const systemFontHeading = systemFont.replace('16', 'bold 48');
$canvas.addEventListener('contextmenu', event => {
    event.preventDefault();
});
