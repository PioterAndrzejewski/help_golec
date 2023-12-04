'use strict';
/// <reference path="../js13k2020.d.ts" />
class Distancing extends Level {
    constructor(startingPoint, curtain = 0) {
        super(startingPoint, curtain);
        this.clone = new InternetExplorer(this, 960 /* Settings.screenWidth */ - 110 /* Settings.websiteWidth */ * 0.5, 540 /* Settings.screenHeight */ * 0.5);
    }
    /** Verlet integration loop. */
    integrate() {
        do {
            if (this.state !== 3 /* LevelState.WAITING */)
                break;
            register0.setSubtract(this.projectile.center, this.clone.center);
            // normalize
            const length = register0.length();
            if (length < 64)
                break;
            register0.scalarMult(1 / length);
            // Move the clone.
            for (const vert of this.clone.vertices) {
                vert.position.add(register0);
            }
        } while (false);
        super.integrate();
    }
    getIndex() {
        return 7;
    }
}
