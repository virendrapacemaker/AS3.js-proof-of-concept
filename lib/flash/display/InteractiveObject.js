goog.provide('flash.display.InteractiveObject');
goog.provide('InteractiveObject');

goog.require('flash.display');
goog.require('flash.display.DisplayObject');

/**
 * Adobe InteractiveObject docs: http://bit.ly/9avgab
 * @constructor
 */
flash.display.InteractiveObject = InteractiveObject = function() {

  DisplayObject.call(this);

  this.accessibilityImplementation_;
  this.doubleClickEnabled_;
  this.focusRect_;
  this.mouseEnabled_;
  this.tabEnabled_;
  this.tabIndex_;

};
goog.inherits(InteractiveObject, DisplayObject);

goog.exportSymbol('flash.display.InteractiveObject', flash.display.InteractiveObject);
goog.exportSymbol('InteractiveObject', InteractiveObject);