'use strict';
/// <reference path="../js13k2020.d.ts" />
class End extends Level {
    static getUserAgent() {
        return Firefox;
    }
    constructor(startingPoint, curtain = 0) {
        super(startingPoint, curtain);
        this.website = new NoWebsite;
        new InternetExplorer(this, 960 /* Settings.screenWidth */ * 0.5, 540 /* Settings.screenHeight */ * 0.5);
        new BigBrother(this, 960 /* Settings.screenWidth */ - this.startingPoint.x, 540 /* Settings.screenHeight */ * 0.5);
        for (let y = 1; y <= 3; ++y) {
            for (let x = 0; x < y; ++x) {
                new Box(this, 960 /* Settings.screenWidth */ - 64 * x - 32 * (3 - y) - 33, 540 /* Settings.screenHeight */ - 64 * (3 - y) - 33, 64, 0.5, 0.5);
            }
        }
    }
    /** Solve constraints and collisions. */
    solve() {
        super.solve();
        if (this.state === 3 /* LevelState.WAITING */) {
            this.state = 0 /* LevelState.INITIAL */;
        }
    }
    getIndex() {
        return 9;
    }
}
