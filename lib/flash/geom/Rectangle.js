/**
 * http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/geom/Rectangle.html
 * 
 * Use getters and setters properly: http://ejohn.org/blog/javascript-getters-and-setters/
 */
function Rectangle(x, y, width, height) {

    var p = function () {};
    p.self = this;
    
    p.x = x || 0;
    p.y = y || 0;
    p.width = width || 0;
    p.height = height || 0;    
    
    p.refresh = function () {
    
        p.topLeft = new Point(p.x, p.y);
        p.top = p.topLeft.y;
        p.right = p.x + p.width;
        p.bottom = p.y + p.height;
        p.left = p.topLeft.x;
        p.bottomRight = new Point(p.right, p.bottom);        
        p.size = new Point(width, height);
        
    };
    
    p.setX = function (x) {
    
        p.x = x;
        p.refresh();
    
    };
    
    p.setY = function (y) {
    
        p.y = y;
        p.refresh();
        
    };
    
    p.setWidth = function (w) {
    
        p.width = w;
        p.refresh();
    
    };
    
    p.setHeight = function (h) {
    
        p.height = h;
        p.refresh();
    
    };
    
    p.toString = function () {
    
        return "{x:" + p.x + ", y:" + p.y + ", width:" + p.width + ", height:" + p.height + "}";
    
    };
    
    // This will init all the calculated properties
    p.refresh();
    
    return p;

}