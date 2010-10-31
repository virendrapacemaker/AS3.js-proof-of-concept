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

  // TODO: nomalize function body

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



/**
 * This is a quick hack to show goog inheritance along with the new
 * functions to auto-create getters and setters from get* and set*
 * methods of a class.
 *
 * Notice that the enhance function must be called from the bottom to the
 * top of the inheritance stack. Calling it the other way around, from the
 * parent down to the child, will result in children not getting set...
 *
 * @param x
 * @param y
 * @param w
 */
Point2 = function(x, y, w) {

  Point.call(this, x, y);

  this.w_ = w || 0;

};
goog.inherits(Point2, Point);

Point2.prototype.setW = function(val) {
  this.w_ = val;
};

Point2.prototype.getW = function() {
  return this.w_;
};

_.enhanceWithGettersAndSetters(Point2.prototype);
_.enhanceWithGettersAndSetters(Point.prototype);

// The following code has been moved to sugar.js and mixed-in to the _ library
//enhanceWithGettersAndSetters(Point);
//
//function lowercaseFirstLetter(string)
//{
//    return string.charAt(0).toLowerCase() + string.slice(1);
//}
//
//function enhanceWithGettersAndSetters(c) {
//
//  trace('Enhancing ', c);
//
//  var props = {};
//
//  for(prop in c.prototype) {
//
//    if(c.prototype.hasOwnProperty(prop)) {
//
//      trace('Processing property ' + prop);
//
//      if(prop.indexOf('get') === 0) {
//        var n = prop.substr(3);
//        n = lowercaseFirstLetter(n);
//        trace('Name of getter is ' + n);
//
//        props[n] = props[n] || {};
//        props[n].get = c.prototype[prop];
//
//      }
//      else if(prop.indexOf('set') === 0) {
//        var n = prop.substr(3);
//        n = lowercaseFirstLetter(n);
//        trace('Name of setter is ' + n);
//
//        props[n] = props[n] || {};
//        props[n].set = c.prototype[prop];
//
//      }
//
//    }
//
//  }
//
//  if(props !== {}) {
//    trace('props:', props);
//    Object.defineProperties(c.prototype, props);
//  }
//}
