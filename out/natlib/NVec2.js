/* This file is part of natlib.
 * natlib, a library for games, is planned to release in early 2021.
 * https://github.com/mvasilkov/natlib
 */
'use strict';
/** A 2D vector. */
class NVec2 {
    /** Create a new vector. */
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    /** Set the `x` and `y` components of this vector. */
    set(x, y) {
        this.x = x;
        this.y = y;
    }
    /** Copy the values of the other vector's `x` and `y` properties to this vector. */
    setTo(other) {
        this.x = other.x;
        this.y = other.y;
    }
    /** Compute the Euclidean length of this vector. */
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    /** Compute the squared distance from this vector to the other one. */
    distanceSquared(other) {
        const x = this.x - other.x;
        const y = this.y - other.y;
        return x * x + y * y;
    }
    /** Add the other vector to this one. */
    add(other) {
        this.x += other.x;
        this.y += other.y;
    }
    /** Subtract the other vector from this one. */
    subtract(other) {
        this.x -= other.x;
        this.y -= other.y;
    }
    /** Set this vector to `a` − `b`. */
    setSubtract(a, b) {
        this.x = a.x - b.x;
        this.y = a.y - b.y;
    }
    /** Compute the dot product of this vector and the other one. */
    dot(other) {
        return this.x * other.x + this.y * other.y;
    }
    /** Multiply this vector by the scalar `a`. */
    scalarMult(a) {
        this.x *= a;
        this.y *= a;
    }
    /** Set this vector to the multiple of the other vector by the scalar `a`. */
    setScalarMult(other, a) {
        this.x = other.x * a;
        this.y = other.y * a;
    }
    /** Set this vector to the normal to the edge `ab`. */
    setNormal(a, b) {
        // perpendicular
        this.x = a.y - b.y;
        this.y = b.x - a.x;
        // normalize
        const length = this.length();
        if (length < Number.MIN_VALUE)
            return;
        this.scalarMult(1 / length);
    }
}
