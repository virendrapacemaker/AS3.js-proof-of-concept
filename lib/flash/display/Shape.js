/**
 * Adobe Sprite docs: http://bit.ly/9A0wD2
 *
 * @constructor
 */
flash.display.Shape = Shape = function() {

  var self = this;
  
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

  //this.addProperties({
  Object.defineProperties(this, {
    graphics: {
      get: function() {
        return self.graphics_;
      }
    }
  });

  // Public, priveledged methods
  self.toString = function() {
    return 'Shape:{x:' + self.x + ', y:' + self.y +
           ', w:' + self.width + ', h:' + self.height +
           ', alhpa:' + self.alpha + '}';
  };
  
  return self;

}; /* </ flash.display.Shape > */

// Shape -> DisplayObject -> EventDispatcher -> Object
Shape.inherits(DisplayObject);
