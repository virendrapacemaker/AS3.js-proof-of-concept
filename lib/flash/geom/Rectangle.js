/**
 * Adobe flash.geom documentation http://bit.ly/cTf9YF
 *
 * Use getters and setters properly:
 * http://ejohn.org/blog/javascript-getters-and-setters/
 *
 * @param {number} x Origin on x axis.
 * @param {number} y Origin on y axis.
 * @param {number} width Width of rectangle.
 * @param {number} height Height of rectangle.
 *
 * @return {Rectangle} A new Rectangle object.
 */
function Rectangle(x, y, width, height) {

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

            // contains(x:Number, y:Number):Boolean
            contains: function(x, y) {
                // Remember that y=0 on the top/left corner,
                // not the bottom/left corner
                return (x > x_) && (x < r_); // && (y > y_) && (y < b_);
            },

            // containsPoint(point:Point):Boolean
            containsPoint: function(point) {
                return this.contains(point.x, point.y);
            },

            // containsRect(rect:Rectangle):Boolean
            containsRect: function(rect) {
                return this.contains(rect.left, rect, top) &&
                    this.contains(rect.right, rect.top) &&
                    this.contains(rect.right, rect.bottom) &&
                    this.contains(rect.left, rect.bottom);
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

            tl_ = new Point(x_, y_);
            t_ = tl_.y;
            r_ = x_ + w_;
            b_ = y_ + h_;
            l_ = tl_.x;
            br_ = new Point(r_, b_);
            size_ = new Point(w_, h_);

        };

    refresh();

    return rect;

}
