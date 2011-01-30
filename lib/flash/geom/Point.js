goog.provide('flash.geom.Point');
goog.provide('Point');

goog.require('flash.geom');

/**
 * Adobe Docs: http://bit.ly/b2RieL
 *
 * // TODO: Reconstruct Point so we can inherit from it. Use .addProperties
 * for getters and setters
 *
 * @constructor
 * @param {number} x The x coordinate.
 * @param {number} y The y coordinate.
 */
flash.geom.Point = Point = function(x, y) {

  this.x_ = x || 0;
  this.y_ = y || 0;

};

/**
 * @this flash.geom.Point
 * @return The x coordinate.
 */
Point.prototype.getX = function() {
  //console.log('using .getX');
  return this.x_;
};

/**
 * @this flash.geom.Point
 * @param {number} val The x coordinate.
 */
Point.prototype.setX = function(val) {
  //console.log('using .setX to set val=' + val);
  this.x_ = val;
};

/**
 * @this flash.geom.Point
 * @return The y coordinate
 */
Point.prototype.getY = function() {
  return this.y_;
};

/**
 * @this flash.geom.Point
 * @param {number} val The y coordinate.
 */
Point.prototype.setY = function(val) {
  this.y_ = val;
};

/**
 * @this flash.geom.Point
 * @return The length from {0,0}.
 */
Point.prototype.getLength = function() {
  return Math.sqrt((this.x_ * this.x_) + (this.y_ * this.y_));
};

Point.prototype.add  = function(v) {

  return new Point(this.x_ + v.x, this.y_ + v.y);

};

Point.prototype.clone  = function() {

  return new Point(this.x_, this.y_);

};

Point.prototype.distance  = function(pt1, pt2) {

  var a = Math.abs(pt2.x - pt1.x),
      b = Math.abs(pt2.y - pt1.y);

  return Math.sqrt((a * a) + b * b);

};

Point.prototype.equals  = function(toCompare) {

  return (this.x_ === toCompare.x) && (this.y_ === toCompare.y);

};

/**
* interpolate(pt1:Point, pt2:Point, f:Number):Point
* [static] Determines a point between two specified points.
*
* @param {Point} pt1 Point to compare.
* @param {Point} pt2 Point to compare.
* @param {number} f position between points, from 0 to 1.
*
* @return {Point} A new point.
*/
Point.prototype.interpolate  = function(pt1, pt2, f) {

  // http://en.wikipedia.org/wiki/Linear_interpolation

  var a = pt1.x + ((pt2.x - pt1.x) * f),
      b = pt1.y + (a - pt1.x) * ((pt2.y - pt1.y) / (pt2.x - pt1.x));

  return new Point(a, b);

};

/**
* normalize(thickness:Number):void
* Scales line segment, between (0,0) and current point, to a set length.
*/
Point.prototype.normalize  = function(thickness) {

  var n = (this.getLength() - thickness) / this.getLength();

  //console.log('Thickness = ', thickness, ', length: ', this.getLength(), ', n: ', n);

  return new Point(this.x_ - (this.x_ * n), this.y_ - (this.y_ * n));

};

Point.prototype.offset  = function(dx, dy) {

  this.x_ = this.x_ + dx;
  this.y_ = this.y_ + dy;

};

/**
 * Wikipedia article on converting between polar and cartesian:
 * http://bit.ly/cuZNzu
 *
 * polar(len:Number, angle:Number):Point
 * [static] Converts a pair of polar coordinates to a
 * Cartesian point coordinate.
 *
 * @param {number} len — The length coordinate of the polar pair.
 * @param {number} angle — The angle, in radians, of the polar pair.
 *
 * @return {Point} a new point.
 */
Point.prototype.polar  = function(len, angle) {

  // Convert cartesian to polar
  /*
  var a = this.length,
  theta = Math.atan2(y_, x_);

  return new Point(a, theta);
  */

  var x = len * Math.cos(angle),
      y = len * Math.sin(angle);

  return new Point(x, y);

};

Point.prototype.subtract  = function(v) {

  return new Point(this.x_ - v.x, this.y_ - v.y);

};

Point.prototype.toString  = function() {

  return '{x:' + this.x_ +
         ', y:' + this.y_ +
         ', length:' + this.getLength() + '}';

};

_.enhanceWithGettersAndSetters2(Point.prototype);

goog.exportSymbol('flash.geom.Point', flash.geom.Point);
goog.exportSymbol('Point', flash.geom.Point);

