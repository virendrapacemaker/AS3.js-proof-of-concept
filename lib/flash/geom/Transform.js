goog.provide('flash.geom.Transform');

goog.require('flash.geom');
goog.require('flash.geom.Matrix');
goog.require('flash.geom.ColorTransform');

/**
 * http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/geom/Transform.html
 */
flash.geom.Transform = Transform = function() {

  this.colorTransform_ = new ColorTransform();
  this.matrix = new Matrix();

};

Transform.prototype.getColorTransform = function() {
  return this.colorTransform_;
};

Transform.prototype.setColorTransform = function(val) {
  this.colorTransform_ = val;
};

Transform.prototype.getConcatenatedColorTransform = function() {
  // TODO: return the the combined color transformations applied to the display
  // object and all of its parent objects, back to the root level.
};

Transform.prototype.getMatrix = function() {
  return this.matrix_;
};

Transform.prototype.setMatrix = function(val) {
  if(!val) {
    throw new flash.errors.TypeError('You cannot set the matrix to a null value');
  }
  else { this.matrix_ = val; }
};

Transform.prototype.getConcatenatedMatrix = function() {
  // TODO: return A Matrix object representing the combined transformation
  // matrixes of the display object and all of its parent objects, back to
  // the root level.

  // if this object has parent, concatenate this matrix with parent.
  // recurse until we get to the stage
};

Transform.prototype.getPixelBounds = function() {
  //  TODO: return A Rectangle object that defines the bounding rectangle of the display object on the Stage.
};

_.enhanceWithGettersAndSetters2(Transform.prototype);

goog.exportSymbol('flash.geom.Transform', flash.geom.Transform);
goog.exportSymbol('Transform', Transform);