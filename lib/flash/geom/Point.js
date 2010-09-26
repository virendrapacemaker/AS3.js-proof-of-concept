/**
 * http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/geom/Point.html
 * 
 * Use getters and setters properly: http://ejohn.org/blog/javascript-getters-and-setters/
 */
function Point(x, y) {

    var p = function () {};
    p.self = this;
    
    p.x = x || 0;
    p.y = y || 0;
    // TODO Can we override the .length property so this matches AS3?
    p.len = Math.sqrt((p.x * p.x) + (p.y * p.y));
    
    p.add = function (v) {
    
        return new Point(p.x + v.x, p.y + v.y);
    
    };
    
    p.clone = function () {
    
        return new Point(p.x, p.y);
    
    };
    
    p.distance = function (pt1, pt2) {
    
        var a = Math.abs(pt2.x - pt1.x),
            b = Math.abs(pt2.y - pt1.y);
            
        return Math.sqrt((a * a) + b * b);
        
    };
    
    p.equals = function (toCompare) {
    
        return (p.x === toCompare.x) && (p.y === toCompare.y);
    
    };
    
    /**
     * interpolate(pt1:Point, pt2:Point, f:Number):Point
     * [static] Determines a point between two specified points.
    */
    p.interpolate = function (pt1, pt2, f) {
    
        // TODO
    
    };
    
    /**	
     * normalize(thickness:Number):void
     * Scales the line segment between (0,0) and the current point to a set length.
     */
    p.normalize = function (thickness) {
    
        // TODO
    
    };
    
    p.offset = function (dx, dy) {
    
        p.x = p.x + dx;
        p.y = p.y + dy;
    
    };
    
    /**
     * polar(len:Number, angle:Number):Point
     * [static] Converts a pair of polar coordinates to a Cartesian point coordinate.
     */
    p.polar = function (len, angle) {
    
        // TODO
    
    };
    
    p.subtract = function (v) {
    
        return new Point(p.x - v.x, p.y - v.y);
    
    };
    
    p.toString = function () {
    
        return "{x:" + p.x + ", y:" + p.y + ", length:" + p.len + "}";
    
    };
    
    return p;

}