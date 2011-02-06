goog.provide('Graphics');
goog.provide('flash.display.Graphics');

goog.require('flash.display');

/**
 * Adobe Docs flash.display.graphics: http://bit.ly/aUtxIB
 *
 * @param {object} canvas The dom element to draw into.
 * @return {Graphics} A Graphics object.
 */
flash.display.Graphics = function(canvas) {

  /**
   * The dom canvas element to draw into
   * @private
   * @type {object}
   */
  var canvas_ = canvas,
      graphics = {};

  graphics.beginFill = function(color, alpha) {

    // TODO: beginFill function body.

  };

  graphics.lineTo = function(x, y) {

    // TODO: lineTo function body.

  };

  graphics.moveTo = function(x, y) {

    // TODO: moveTo function body.

  };

  graphics.endFill = function() {

    // TODO: endFill function body.

  };

  return graphics;

};

goog.exportSymbol('flash.display.Graphics', flash.display.Graphics);
goog.exportSymbol('Graphics', Graphics);

