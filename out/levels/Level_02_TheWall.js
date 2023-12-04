'use strict';
/// <reference path="../js13k2020.d.ts" />
class TheWall extends Level {
    constructor(startingPoint, curtain = 0) {
        super(startingPoint, curtain);
        this.wall = new Wall(this, startingPoint.x + 256, (540 /* Settings.screenHeight */ - 256) * 0.5, 1, 9999);
    }
    getIndex() {
        return 1;
    }
}
