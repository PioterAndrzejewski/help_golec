'use strict';
/// <reference path="js13k2020.d.ts" />
const Levels = [
    Level,
    TheWall,
    Opening,
    Breach,
    Banned,
    Reversal,
    Moving,
    Distancing,
    Hopeless,
    End,
];
let activeLevel;
let nextLevel;
(function () {
    const startingPoint = new NVec2(350, 540 /* Settings.screenHeight */ * 0.5);
    const captureDistSquared = 64 /* Settings.targetCaptureDist */ ** 2;
    const releaseDistSquared = 256 /* Settings.targetReleaseDist */ ** 2;
    let updatesToRetractFiringPin;
    let updatesToWin;
    let panningCounter;
    activeLevel = new Levels[0](startingPoint);
    function update() {
        activeLevel.integrate();
        activeLevel.solve();
        if (activeLevel.state === 2 /* LevelState.FIRING */) {
            if (--updatesToRetractFiringPin <= 0) {
                activeLevel.firingPin.retract();
                activeLevel.firingPin = null;
                activeLevel.state = 3 /* LevelState.WAITING */;
                updatesToWin = 2;
            }
        }
        else if (activeLevel.state === 3 /* LevelState.WAITING */) {
            if (++activeLevel.waited >= activeLevel.duration) {
                if (activeLevel.autoWin) {
                    activeLevel.state = 6 /* LevelState.WINNING */;
                    nextLevel = new Levels[(activeLevel.getIndex() + 1) % Levels.length](startingPoint);
                    panningCounter = 0;
                    // Reset pointer.
                    pointer.dragging = false;
                    pointer.vertex = undefined;
                    sound(sndWin);
                }
                else {
                    activeLevel.state = 4 /* LevelState.FAILING */;
                    sound(sndFail);
                }
            }
            else if (activeLevel.website.contains(activeLevel.projectile.center)) {
                if (--updatesToWin <= 0) {
                    activeLevel.state = 6 /* LevelState.WINNING */;
                    nextLevel = new Levels[(activeLevel.getIndex() + 1) % Levels.length](startingPoint);
                    panningCounter = 0;
                    // Reset pointer.
                    pointer.dragging = false;
                    pointer.vertex = undefined;
                    sound(sndWin);
                }
            }
        }
        else if (activeLevel.state === 4 /* LevelState.FAILING */) {
            if (++activeLevel.curtain >= 24 /* Settings.waitCurtain */) {
                activeLevel = new Levels[activeLevel.getIndex()](startingPoint, 24 /* Settings.waitCurtain */);
                activeLevel.state = 5 /* LevelState.RESTARTING */;
                // Reset pointer.
                pointer.dragging = false;
                pointer.vertex = undefined;
            }
        }
        else if (activeLevel.state === 5 /* LevelState.RESTARTING */) {
            if (--activeLevel.curtain <= 0) {
                activeLevel.state = 0 /* LevelState.INITIAL */;
            }
        }
        else if (activeLevel.state === 6 /* LevelState.WINNING */) {
            if (++panningCounter > 69 /* Settings.waitNextLevel */) {
                activeLevel = nextLevel;
            }
        }
    }
    function render(t) {
        // Panning variables.
        let tPan;
        let sPan;
        // Panning part 1.
        if (activeLevel.state === 6 /* LevelState.WINNING */) {
            canvas.fillStyle = EARTH_BACK;
            canvas.fillRect(0, 0, 960 /* Settings.screenWidth */, 540 /* Settings.screenHeight */);
            canvas.save();
            tPan = (panningCounter - 1 + t) / 69 /* Settings.waitNextLevel */;
            sPan = lerp(1, 0.5, easeInOutQuad(tPan));
            canvas.translate(960 /* Settings.screenWidth */ * 0.5, 540 /* Settings.screenHeight */ * 0.5);
            canvas.scale(sPan, sPan);
            canvas.translate(-960 /* Settings.screenWidth */ * 0.5, -540 /* Settings.screenHeight */ * 0.5);
            canvas.translate(lerp(0, -960 /* Settings.screenWidth */, easeInOutQuad(tPan)), 0);
            canvas.beginPath();
            canvas.rect(0, 0, 960 /* Settings.screenWidth */, 540 /* Settings.screenHeight */);
            canvas.clip();
        }
        // #region Pointer events.
        else if (pointer.dragging && activeLevel.state !== 5 /* LevelState.RESTARTING */) {
            if (!pointer.vertex && startingPoint.distanceSquared(pointer) <= captureDistSquared) {
                pointer.vertex = activeLevel.reticle.targetingVertex;
                if (activeLevel.state === 0 /* LevelState.INITIAL */)
                    activeLevel.state = 1 /* LevelState.AIMING */;
            }
            if (pointer.vertex) {
                const pos = activeLevel.reticle.targetingVertex.position;
                pos.setTo(pointer);
                const dist = startingPoint.distanceSquared(pos);
                if (dist > releaseDistSquared) {
                    pos.subtract(startingPoint);
                    pos.scalarMult(256 /* Settings.targetReleaseDist */ / Math.sqrt(dist));
                    pos.add(startingPoint);
                }
                activeLevel.updateTargeting(pos);
            }
        }
        else if (activeLevel.state === 1 /* LevelState.AIMING */) {
            if (activeLevel.launch()) {
                activeLevel.state = 2 /* LevelState.FIRING */;
                updatesToRetractFiringPin = 4;
                sound(sndLaunch);
            }
            else
                activeLevel.state = 0 /* LevelState.INITIAL */;
        }
        // #endregion
        // #region Paint active level.
        paintBackground(canvas, t, activeLevel);
        activeLevel.website.paint(canvas, t);
        for (const b of activeLevel.bodies) {
            b.paint(canvas, t);
        }
        // #endregion
        paintCurtain(canvas, t, activeLevel);
        // Panning part 2.
        if (activeLevel.state === 6 /* LevelState.WINNING */) {
            canvas.restore();
            canvas.save();
            canvas.translate(lerp(960 /* Settings.screenWidth */, 0, easeInOutQuad(tPan)), 0);
            // #region Paint next level.
            paintBackground(canvas, t, nextLevel);
            nextLevel.website.paint(canvas, t);
            for (const b of nextLevel.bodies) {
                b.paint(canvas, t);
            }
            // #endregion
            canvas.restore();
        }
    }
    handleResize();
    startMainloop(update, render);
})();
