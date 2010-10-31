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

Transform.prototype.getMatrix = function() {
  return this.matrix_;
};

Transform.prototype.setMatrix = function(val) {
  this.matrix_ = val;
};
