/* This file is part of natlib.
 * natlib, a library for games, is planned to release in early 2021.
 * https://github.com/mvasilkov/natlib
 */
'use strict';
/// <reference path="natlib.d.ts" />
/** A Verlet integration vertex. */
class NVertex {
    /** Create a new vertex. */
    constructor(parent, x, y) {
        this.parent = parent;
        this.position = new NVec2(x, y);
        this.oldPosition = new NVec2(x, y);
        this.interpolated = new NVec2;
        parent.vertices.push(this);
        parent.positions.push(this.position);
        parent.scene.vertices.push(this);
    }
    /** Verlet integration. */
    integrate(gravity = 0 /* Settings.kGravity */, fg = 0 /* Settings.kFrictionGround */) {
        const pos = this.position;
        const old = this.oldPosition;
        const x = pos.x;
        const y = pos.y;
        pos.x += (pos.x - old.x) * 1 /* Settings.kViscosity */;
        pos.y += (pos.y - old.y) * 1 /* Settings.kViscosity */ + gravity;
        old.set(x, y);
        // screen limits
        if (pos.y < 0)
            pos.y = 0;
        else if (pos.y >= 540 /* Settings.screenHeight */) {
            pos.x -= (pos.x - old.x) * fg;
            pos.y = 540 /* Settings.screenHeight */ - 1;
        }
        if (pos.x < 0)
            pos.x = 0;
        else if (pos.x >= 960 /* Settings.screenWidth */) {
            pos.x = 960 /* Settings.screenWidth */ - 1;
        }
    }
    /** Interpolate this vertex. */
    interpolate(t) {
        this.interpolated.set(lerp(this.oldPosition.x, this.position.x, t), lerp(this.oldPosition.y, this.position.y, t));
    }
}
