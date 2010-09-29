/**
 * Adobe Docs flash.display.graphics: http://bit.ly/aUtxIB
 *
 * Use getters and setters properly:
 * http://ejohn.org/blog/javascript-getters-and-setters/
 *
 * @param {object} canvas The dom element to draw into
 *
 * @return {Graphics} A Graphics object
 */
flash.display.Graphics = function (canvas) {

  /**
   * The dom canvas element to draw into
   * @private
   * @type {object}
   */
  var canvas_ = Raphael(canvas),
      graphics = {};

  graphics.beginFill = function(color, alpha) {};
  graphics.lineTo = function(x, y) {};
  graphics.moveTo = function(x, y) {};
  graphics.endFill = function() {};

  return graphics;

}