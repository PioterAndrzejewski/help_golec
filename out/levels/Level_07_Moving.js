'use strict';
/// <reference path="../js13k2020.d.ts" />
class Moving extends Level {
    constructor(startingPoint, curtain = 0) {
        super(startingPoint, curtain);
        this.website = new MovingWebsite;
        this.curtainPicture = FAILURE_MOVED_PICTURE;
    }
    /** Solve constraints and collisions. */
    solve() {
        super.solve();
        if (this.state === 3 /* LevelState.WAITING */ || this.state === 4 /* LevelState.FAILING */ || this.state === 6 /* LevelState.WINNING */) {
            this.website.update();
        }
    }
    getIndex() {
        return 6;
    }
}
