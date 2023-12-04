'use strict';
/// <reference path="../js13k2020.d.ts" />
class Reversal extends Level {
    constructor(startingPoint, curtain = 0) {
        super(startingPoint, curtain);
        register0.set((960 /* Settings.screenWidth */ - 110 /* Settings.websiteWidth */ - startingPoint.x) * 0.5, -540 /* Settings.screenHeight */ * 0.125);
        // Move the projectile.
        for (const vert of this.projectile.vertices) {
            vert.position.add(register0);
            vert.oldPosition.add(register0);
        }
        this.projectile.center.add(register0);
        // This is our new projectile.
        new Box(this, startingPoint.x, startingPoint.y, 64, 0.5, 4);
    }
    getIndex() {
        return 5;
    }
}
