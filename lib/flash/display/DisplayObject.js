goog.provide('flash.display.DisplayObject');
goog.provide('DisplayObject');

goog.require('flash.events.EventDispatcher');
goog.require('flash.geom.Transform');

/**
 * Adobe DisplayObject docs: http://bit.ly/bBDEHa
 * @constructor
 */
flash.display.DisplayObject = DisplayObject = function() {

  EventDispatcher.call(this);

  //----------------------------------------------------------------------------
  // < Private Properties >                                                    -
  //----------------------------------------------------------------------------

  this.alpha_ = 1;
  this.height_ = 0;
  this.name;
  this.parent_; // DisplayObjectContainer that contains this DisplayObject
  this.stage_; // Will this be the canvas element?
  this.root_;
  this.rotation_ = 0;
  this.scrollRect_; // TODO: set default scroll rect
  this.transform_ = new Transform();
  this.visible_ = 1;
  this.width_ = 0;
  this.x_ = 0;
  this.y_ = 0;

  //----------------------------------------------------------------------------
  // </ Private Properties >                                                   -
  //----------------------------------------------------------------------------

  this.init();

};
goog.inherits(DisplayObject, EventDispatcher);




//------------------------------------------------------------------------------
// < Getters n Setters >                                                       -
//------------------------------------------------------------------------------

// Define our getters and setters
DisplayObject.prototype.getX = function() {
  //console.log('getting x'); // just to prove that we're using the getter
  return this.x_;
};
DisplayObject.prototype.setX = function(val) {
  //console.log('setting x to ' + val); // prove we're using the setter
  this.x_ = val;
};

DisplayObject.prototype.getY = function() {
  return this.y_;
};
DisplayObject.prototype.setY = function(val) {
  this.y_ = val;
};

DisplayObject.prototype.getHeight = function() {
  return this.height_;
};
DisplayObject.prototype.setHeight = function(val) {
  this.height_ = val;
};

DisplayObject.prototype.getWidth = function() {
  return this.width_;
};
DisplayObject.prototype.setWidth = function(val) {
  this.width_ = val;
};

DisplayObject.prototype.getAlpha = function() {
  return this.alpha_;
};
DisplayObject.prototype.setAlpha = function(val) {
  this.alpha_ = val;
  // TODO: Update the transform.colorTransform.alphaMultiplier value
};

DisplayObject.prototype.getName = function() {
  return this.name_;
};
DisplayObject.prototype.setName = function(val) {
  this.name_ = val;
};

DisplayObject.prototype.getRotation = function() {
  return this.rotation_;
};
DisplayObject.prototype.setRotation = function(val) {
  this.rotation_ = val;
};

DisplayObject.prototype.getTransform = function() {
  return this.transform_;
};
DisplayObject.prototype.setTransform = function(val) {
  this.transform__ = val;
};

DisplayObject.prototype.getParent = function() {
  return this.parent_;
};

DisplayObject.prototype.getStage = function() {
  return this.stage_;
};

//------------------------------------------------------------------------------
//</ Getters n Setters >                                                       -
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
//< Private Methods >                                                          -
//------------------------------------------------------------------------------

/**
 * Set the parent. Used only by the parent when the parent adds
 * this DisplayObject to the display list.
 *
 * @private
 * @param {DisplayObjectContainer} p The parent owning the display list.
 */
DisplayObject.prototype.addParent_ = function(p) {
  this.parent_ = p;
};

/**
 * Remove the parent. Used only by the parent when parent removes
 * this DisplayObject from the display list.
 *
 * @private
 */
DisplayObject.prototype.removeParent_ = function() {
  this.parent_ = null;
};

//------------------------------------------------------------------------------
//</ Private Methods >                                                         -
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// < Public Methods >                                                          -
//------------------------------------------------------------------------------

// getBounds(targetCoordinateSpace:DisplayObject):Rectangle
DisplayObject.prototype.getBounds = function(targetCoordinateSpace) {

  // TODO: Return a rectangle

};

// getRect(targetCoordinateSpace:DisplayObject):Rectangle
DisplayObject.prototype.getRect = function(targetCoordinateSpace) {

  // TODO: Return a rectangle

};

// globalToLocal(point:Point):Point
DisplayObject.prototype.globalToLocal = function(point) {

  // TODO: convert point

};

// hitTestObject(obj:DisplayObject):Boolean
DisplayObject.prototype.hitTestObject = function(obj) {

  // TODO: hit test function body

};

// hitTestPoint(x:Number, y:Number, shapeFlag:Boolean = false):Boolean
DisplayObject.prototype.hitTestPoint = function(x, y, shapeFlag) {

  // TODO: hit test function body

};

// localToGlobal(point:Point):Point
DisplayObject.prototype.localToGlobal = function(point) {

  // TODO: convert point

};

DisplayObject.prototype.init = function() {

  // TODO: DisplayObject init function. May not be necessary

};

beebe.magic.enhanceWithGettersAndSetters2(DisplayObject.prototype);

//------------------------------------------------------------------------------
// </ Public Methods >                                                         -
//------------------------------------------------------------------------------

goog.exportSymbol('flash.display.DisplayObject', flash.display.DisplayObject);
goog.exportSymbol('DisplayObject', DisplayObject);

