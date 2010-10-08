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
  var graphics_;

  //----------------------------------------------------------------------------
  // </ Private Attributes >                                                   -
  //----------------------------------------------------------------------------

  //----------------------------------------------------------------------------
  // < Getters n Setters >                                                     -
  //----------------------------------------------------------------------------

  this.addProperties({
    graphics: {
      get: function() {
        return this.graphics_;
      }
    }
  });

  // Public, priveledged methods
  this.toString = function() {
    return 'Shape:{x:' + this.x + ', y:' + this.y +
           ', w:' + this.width + ', h:' + this.height +
           ', alhpa:' + this.alpha + '}';
  };

}; /* </ flash.display.Shape > */

// Shape -> DisplayObject -> EventDispatcher -> Object
Shape.inherits(DisplayObject);