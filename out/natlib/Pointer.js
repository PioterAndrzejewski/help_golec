'use strict';
/** The pointer. */
const pointer = {
    dragging: false,
    x: 0,
    y: 0,
};
/** Set the pointer position. */
function setPointerPosition(event) {
    const r = $canvas.getBoundingClientRect();
    pointer.x = (event.clientX - r.left) * uiScale;
    pointer.y = (event.clientY - r.top) * uiScale;
}
/** Mouse events. */
document.addEventListener('mousedown', event => {
    event.preventDefault();
    pointer.dragging = true;
    setPointerPosition(event);
});
document.addEventListener('mousemove', event => {
    event.preventDefault();
    setPointerPosition(event);
});
document.addEventListener('mouseup', event => {
    event.preventDefault();
    pointer.dragging = false;
    pointer.vertex = undefined;
    if (!audioInitialized) {
        initializeAudio();
    }
});
/** Touch events. */
document.addEventListener('touchstart', event => {
    event.preventDefault();
    pointer.dragging = true;
    setPointerPosition(event.targetTouches[0]);
});
document.addEventListener('touchmove', event => {
    event.preventDefault();
    setPointerPosition(event.targetTouches[0]);
});
document.addEventListener('touchend', event => {
    event.preventDefault();
    pointer.dragging = false;
    pointer.vertex = undefined;
    if (!audioInitialized) {
        initializeAudio();
    }
});
document.addEventListener('touchcancel', event => {
    event.preventDefault();
    pointer.dragging = false;
    pointer.vertex = undefined;
});
