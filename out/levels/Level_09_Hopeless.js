'use strict';
/// <reference path="../js13k2020.d.ts" />
class Hopeless extends Level {
    static getUserAgent() {
        return InternetExplorer;
    }
    constructor(startingPoint, curtain = 0) {
        super(startingPoint, curtain);
        this.website = new NoWebsite;
        this.duration = 196;
        this.autoWin = true;
        new WebsiteBox(this, 960 /* Settings.screenWidth */ - 110 /* Settings.websiteWidth */ - 1, (540 /* Settings.screenHeight */ - 196 /* Settings.websiteHeight */) * 0.5);
    }
    /** Verlet integration loop. */
    integrate() {
        let gravity;
        let fg;
        if (this.state === 3 /* LevelState.WAITING */ || this.state === 4 /* LevelState.FAILING */ || this.state === 6 /* LevelState.WINNING */) {
            gravity = 0.9;
            fg = 0.5;
        }
        else {
            gravity = 0 /* Settings.kGravity */;
            fg = 0 /* Settings.kFrictionGround */;
        }
        for (let i = 0; i < this.vertices.length; ++i) {
            this.vertices[i].integrate(gravity, fg);
        }
    }
    getIndex() {
        return 8;
    }
}
