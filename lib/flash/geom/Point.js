/**
 * Adobe Docs: http://bit.ly/b2RieL
 *
 * // TODO: Reconstruct Point so we can inherit from it. Use .addProperties
 * for getters and setters
 *
 * @constructor
 * @param {number} x The x coordinate.
 * @param {number} y The y coordinate.
 *
 * @return {Point} A point object.
 */
flash.geom.Point = Point = function(x, y) {

  var x_ = x || 0,
      y_ = y || 0,
      len = 0,

      o = {

        // Property Getters and Setters
        set x(val) {
          x_ = val;
        },

        get x() {
          return x_;
        },

        set y(val) {
          y_ = val;
        },

        get y() {
          return y_;
        },

        get length() {

          return Math.sqrt((x_ * x_) + (y_ * y_));

        },

        // Public Methods

        add: function(v) {

          return new Point(x_ + v.x, y_ + v.y);

        },

        clone: function() {

          return new Point(x_, y_);

        },

        distance: function(pt1, pt2) {

          var a = Math.abs(pt2.x - pt1.x),
              b = Math.abs(pt2.y - pt1.y);

          return Math.sqrt((a * a) + b * b);

        },

        equals: function(toCompare) {

          return (x_ === toCompare.x) && (y_ === toCompare.y);

        },

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
        interpolate: function(pt1, pt2, f) {

          // http://en.wikipedia.org/wiki/Linear_interpolation

          var a = pt1.x + ((pt2.x - pt1.x) * f),
              b = pt1.y + (a - pt1.x) * ((pt2.y - pt1.y) / (pt2.x - pt1.x));

          return new Point(a, b);

        },

        /**
        * normalize(thickness:Number):void
        * Scales line segment, between (0,0) and current point, to a set length.
        */
        normalize: function(thickness) {

          // TODO: nomalize function body

        },

        offset: function(dx, dy) {

          x_ = x_ + dx;
          y_ = y_ + dy;

        },

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
        polar: function(len, angle) {

          // Convert cartesian to polar
          /*
          var a = this.length,
          theta = Math.atan2(y_, x_);

          return new Point(a, theta);
          */

          var x = len * Math.cos(angle),
              y = len * Math.sin(angle);

          return new Point(x, y);

        },

        subtract: function(v) {

          return new Point(x_ - v.x, y_ - v.y);

        },

        toString: function() {

          return '{x:' + x_ + ', y:' + y_ + ', length:' + this.length + '}';

        }

      };

  return o;

};
