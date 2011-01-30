goog.provide('flash.geom.Rectangle');
goog.provide('Rectangle');

goog.require('flash.geom');

/**
 * Adobe flash.geom documentation http://bit.ly/b2RieL
 * Using rectangles: http://bit.ly/cdgFee
 *
 * // TODO: Reconstruct Point so we can inherit from it. Use .addProperties
 * for getters and setters
 *
 * @author somethingkindawierd@gmail.com (Jon Beebe)
 *
 * @constructor
 * @param {number} x Origin on x axis.
 * @param {number} y Origin on y axis.
 * @param {number} width Width of rectangle.
 * @param {number} height Height of rectangle.
 *
 * @return {Rectangle} A new Rectangle object.
 */
flash.geom.Rectangle = Rectangle = function(x, y, width, height) {

  var x_ = x || 0,
      y_ = y || 0,
      w_ = width || 0,
      h_ = height || 0,
      tl_ = new Point(0, 0),
      t_ = 0,
      r_ = 0,
      b_ = 0,
      l_ = 0,
      br_ = new Point(0, 0),
      size_ = new Point(0, 0),
      update_ = true,

      rect = {

        //-----------------------------------------------------------------
        // < Setters >
        //-----------------------------------------------------------------
        set x(val) {
          x_ = val;
          refresh();
        },

        set y(val) {
          y_ = val;
          refresh();
        },

        set height(val) {
          h_ = val;
          refresh();
        },

        set width(val) {
          w_ = val;
          refresh();
        },

        set top(val) {
          var diff = val - t_;
          y_ = y_ + diff;
          h_ = h_ - diff;
          refresh();
        },

        set bottom(val) {
          var diff = val - b_;
          h_ = h_ + diff;
          refresh();
        },

        set left(val) {
          var diff = val - x_;
          x_ = x_ + diff;
          w_ = w_ - diff;
          refresh();
        },

        set right(val) {
          var diff = val - r_;
          w_ = w_ + diff;
          refresh();
        },

        set topLeft(pt) {
          this.update_ = false;
          this.left = pt.x;
          this.update_ = true;
          this.top = pt.y;
        },

        set bottomRight(pt) {
          this.update_ = false;
          this.right = pt.x;
          this.update_ = true;
          this.bottom = pt.y;
        },
        //-----------------------------------------------------------------
        // </ Setters >
        //-----------------------------------------------------------------

        //-----------------------------------------------------------------
        // < Getters >
        //-----------------------------------------------------------------
        get x() {
          return x_;
        },

        get y() {
          return y_;
        },

        get width() {
          return w_;
        },

        get height() {
          return h_;
        },

        get topLeft() {
          return tl_;
        },

        get top() {
          return t_;
        },

        get right() {
          return r_;
        },

        get bottom() {
          return b_;
        },

        get left() {
          return l_;
        },

        get bottomRight() {
          return br_;
        },

        get size() {
          return s_;
        },
        //-----------------------------------------------------------------
        // </ Getters >
        //-----------------------------------------------------------------

        //-----------------------------------------------------------------
        // < Public Methods >
        //-----------------------------------------------------------------

        clone: function() {
          return new Rectangle(x_, y_, w_, h_);
        },

        // contains(x:Number, y:Number):Boolean
        contains: function(x, y) {
          // Remember that y=0 on the top/left corner,
          // not the bottom/left corner
          //console.log('x = ' + x + ', x_ = ' + x_ + ', r_ = ' + r_);
          //console.log('y = ' + y + ', y_ = ' + y_ + ', b_ = ' + b_);

          return (x > x_) && (x < r_) && (y < y_) && (y > b_);
        },

        // containsPoint(point:Point):Boolean
        containsPoint: function(point) {
          return this.contains(point.x, point.y);
        },

        // containsRect(rect:Rectangle):Boolean
        containsRect: function(rect) {
          return this.contains(rect.left, rect.top) &&
                 this.contains(rect.right, rect.top) &&
                 this.contains(rect.right, rect.bottom) &&
                 this.contains(rect.left, rect.bottom);
        },

        // public function union(toUnion:Rectangle):Rectangle
        union: function(toUnion) {

          var x, y, width, height;

          x = (x_ < toUnion.x) ? x_ : toUnion.x;
          y = (y_ > toUnion.y) ? y_ : toUnion.y;
          r = (r_ > toUnion.right) ? r_ : toUnion.right;
          b = (b_ < toUnion.bottom) ? b_ : toUnion.bottom;

          width = r - x;
          height = b - y;

          return new Rectangle(x, y, width, height);

        },

        intersects: function(r) {

          return containsPoint(r.topLeft) ||
                 containsPoint(r.bottomLeft) ||
                 contains(r.left, r.bottom) ||
                 contains(r.top, r.right);

        },

        // public function intersection(toIntersect:Rectangle):Rectangle
        intersection: function(r) {

          var x = 0, y = 0, width = 0, height = 0;

          if (intersects(r)) {

            x = (x_ > r.x) ? x_ : r.x;
            y = (y_ < r.y) ? y_ : r.y;
            r = (r_ < r.right) ? r_ : r.right;
            b = (b_ > r.bottom) ? b_ : r.bottom;

            width = r - x;
            height = b - y;

          }

          return new Rectangle(x, y, width, height);

        },

        isEmpty: function() {
          return (w_ > 0) && (h_ > 0);
        },

        // inflate(dx:Number, dy:Number):void
        inflate: function(dx, dy) {

          // These equations came straight from AS3 docs
          x_ = x_ - dx;
          w_ = w_ + (2 * dx);
          y_ = y_ - dy;
          h_ = h_ + (2 * dy);

          refresh();

        },

        inflatePoint: function(point) {

          inflate(point.x, point.y);

        },

        offset: function(dx, dy) {

          x_ = x_ + dx;
          y_ = y_ + dy;

          refresh();

        },

        offsetPoint: function(pt) {
          this.offset(pt.x, pt.y);
        },

        setEmpty: function() {
          x_ = y_ = w_ = h_ = 0;
          refresh();
        },

        /**
        * equals(toCompare:Rectangle):Boolean
         *
         * @param {Rectangle} r Rectangle to compare to.
         *
         * @return {bool} true if match, false otherwise.
         */
        equals: function(r) {
          return (r.x === x_) && (r.y === y_) &&
                 (r.width === w_) && (r.height === h_);
        },

        toString: function() {
          var s = '{x:' + x_ + ', y:' + y_;
          s += ', width:' + w_ + ', height:' + h_ + '}';
          return s;
        }

        //-----------------------------------------------------------------
        // </ Public Methods >
        //-----------------------------------------------------------------

      },

      refresh = function() {
        if (update_) {
          tl_ = new Point(x_, y_);
          t_ = tl_.y;
          r_ = x_ + w_;
          b_ = y_ + h_;
          l_ = tl_.x;
          br_ = new Point(r_, b_);
          size_ = new Point(w_, h_);
        }
      }; /* </ refresh > */

  refresh();

  return rect;

};

goog.exportSymbol('flash.geom.Rectangle', flash.geom.Rectangle);
goog.exportSymbol('Rectangle', flash.geom.Rectangle);