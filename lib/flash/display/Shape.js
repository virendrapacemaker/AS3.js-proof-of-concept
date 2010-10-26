/**
 * Adobe Sprite docs: http://bit.ly/9A0wD2
 *
 * @constructor
 */
flash.display.Shape = Shape = function() {

  DisplayObjectContainer.call(this);

  /**
   * The graphics object for vector drawing
   * @type {flash.display.Graphics}
   */
  this.graphics_;

}; /* </ flash.display.Shape > */
goog.inherits(Shape, DisplayObjectContainer);
//Shape -> DisplayObject -> EventDispatcher -> Object

Object.defineProperties(Shape.prototype, {
  graphics: {
    get: function() {
      return this.graphics_;
    }
  }
});

/**
 * Render the shape to string.
 *
 * @override
 * @return {string} String representation of Shape.
 */
Shape.prototype.toString = function() {
  return 'Shape:{x:' + this.x + ', y:' + this.y +
         ', w:' + this.width + ', h:' + this.height +
         ', alhpa:' + this.alpha + '}';
};

