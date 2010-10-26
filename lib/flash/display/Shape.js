/**
 * Adobe Sprite docs: http://bit.ly/9A0wD2
 *
 * @constructor
 */
flash.display.Shape = Shape = function() {
  
  //----------------------------------------------------------------------------
  // < Private Attributes >                                                    -
  //----------------------------------------------------------------------------

  /**
   * The graphics object for vector drawing
   * @type {flash.display.Graphics}
   */
  this.graphics_;

  //----------------------------------------------------------------------------
  // </ Private Attributes >                                                   -
  //----------------------------------------------------------------------------

}; /* </ flash.display.Shape > */

// Shape -> DisplayObject -> EventDispatcher -> Object
goog.inherits(Shape, DisplayObjectContainer);




//----------------------------------------------------------------------------
// < Getters n Setters >                                                     -
//----------------------------------------------------------------------------

//this.addProperties({
Object.defineProperties(Shape.prototype, {
  graphics: {
    get: function() {
      return this.graphics_;
    }
  }
});

// Public, priveledged methods
Shape.prototype.toString = function() {
  return 'Shape:{x:' + this.x + ', y:' + this.y +
         ', w:' + this.width + ', h:' + this.height +
         ', alhpa:' + this.alpha + '}';
};
