/**
 * http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/display/DisplayObject.html
 */
function DisplayObject () {

    // Public
    var c = function () {};

    // Private
    var p = function () {};
    
    
    
    
    // Publicly accessible properties
    // TODO incomplete list of properties
    c.alpha = 1; // 0 = transparent, 1 = opaque
    c.blendMode = '';
    c.height;
    c.mouseX;
    c.mouseY;
    c.name;
    c.parent;
    c.root;
    c.visible;
    c.width;
    c.x;
    c.y;
    c.z;
    
    
    
    
    // Publicly accessible methods
    
    // getBounds(targetCoordinateSpace:DisplayObject):Rectangle
    c.getBounds = function(targetCoordinateSpace) {
    
        // Return a rectangle
    
    };
    
    // getRect(targetCoordinateSpace:DisplayObject):Rectangle
    c.getRect = function (targetCoordinateSpace) {
    
        // Return a rectangle
    
    };
    
    // globalToLocal(point:Point):Point
    c.globalToLocal = function (point) {
    
        
    
    };
    
    // globalToLocal3D(point:Point):Vector3D
    c.globalToLocal3D = function (point) {
    
    
    
    };    
    
    // hitTestObject(obj:DisplayObject):Boolean
    c.hitTestObject = function (obj) {
    
    
    
    };
    
    // hitTestPoint(x:Number, y:Number, shapeFlag:Boolean = false):Boolean
    c.hitTestPoint = function( x, y, shapeFlag) {
    
    
    
    };
    
    // localToGlobal(point:Point):Point
    c.localToGlobal = function (point) {
    
    
    
    };
    
    
    
    
    // Events
    c.Events = {
    
        'added':'ADDED'
    
    }
    
}