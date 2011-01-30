goog.provide('flash.display.Shape');
goog.provide('Shape');

goog.require('flash.display');
goog.require('flash.display.DisplayObjectContainer');

/**
 * Adobe Sprite docs: http://bit.ly/9A0wD2
 *
 * @constructor
 */
flash.display.Shape = function() {

  DisplayObjectContainer.call(this);

  /**
   * The graphics object for vector drawing
   * @type {flash.display.Graphics}
   */
  this.graphics_;

}; /* </ flash.display.Shape > */
goog.inherits(flash.display.Shape, DisplayObjectContainer);
//Shape -> DisplayObject -> EventDispatcher -> Object

Object.defineProperties(flash.display.Shape.prototype, {
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
flash.display.Shape.prototype.toString = function() {
  return 'Shape:{x:' + this.x + ', y:' + this.y +
         ', w:' + this.width + ', h:' + this.height +
         ', alhpa:' + this.alpha + '}';
};

goog.exportSymbol('flash.display.Shape', flash.display.Shape);
goog.exportSymbol('Shape', flash.display.Shape);