'use strict';
const register0 = new NVec2;
const register1 = new NVec2;
// Play a sound.
function sound(snd) {
    try {
        if (snd.buf === null) {
            snd.buf = ac.createBuffer(1, snd.raw.length, zzfxR);
            snd.buf.getChannelData(0).set(snd.raw);
        }
        const bufs = ac.createBufferSource();
        bufs.buffer = snd.buf;
        bufs.connect(ac.destination);
        bufs.start();
    }
    catch (err) {
    }
}
const sndLaunch = {
    // zzfxMicro.apply(null, [,,398,.02,.06,.4,2,0,2.4,,,,,,,,.03,.79,.01])
    raw: zzfxMicro.apply(null, [, , 132, , , .46, , .11, 9.1, , , , , .1, , , .04, .56, .05]),
    buf: null,
};
const sndFail = {
    raw: zzfxMicro.apply(null, [, , 382, , , .48, 2, .35, -0.6, , , , , , , , .2, .72, .09]),
    buf: null,
};
const sndWin = {
    // zzfxMicro.apply(null, [,,345,.01,.17,.87,2,1.05,.2,,67,.03,.02,,-0.2,,,.79,,.04])
    raw: zzfxMicro.apply(null, [, , 345, .01, .17, .87, 1, 1.05, .2, , 67, .03, .02, , -0.2, , , .79, , .04]),
    buf: null,
};
let audioInitialized = false;
// Initialize audio.
function initializeAudio() {
    try {
        audioInit().then(playLoop);
    }
    catch (err) {
    }
    audioInitialized = true;
}
