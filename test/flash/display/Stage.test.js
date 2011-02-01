// Let's create our Stage object
// This is code that will never be used by a normal user
// since there is only one Stage, and it's auto-created
// when the flash plugin is created.

goog.require('flash.display.StageAlign');
goog.require('flash.display.StageDisplayState');
goog.require('flash.display.StageQuality');
goog.require('flash.display.StageScaleMode');

goog.require('flash.display.Stage');
goog.require('flash.display.Shape');
goog.require('flash.display.Sprite');
        
window.onload = function() {
  trace('window.onload');
  init();
};

function init() {

  trace('init');

/*
  var elem = document.getElementById('stageCanvas');


  if (elem && elem.getContext) {
    // Get the 2d context.
    // Remember: you can only initialize one context per element.
    var context = elem.getContext('2d');
    var canvas_ = elem;

    if (context) {
      // You are done! Now you can draw your first rectangle.
      // You only need to provide the (x,y) coordinates, followed by the width and
      // height dimensions.
      context.fillRect(0, 0, 150, 100);
    }

  }
  */

  // Let's listen for some events
  var listener = {

    onAdded: function(event) {
      trace('*** Caught Event*** Stage.added: ', event);
    }

  };

  var S = new Stage('stageCanvas');
  trace('Stage object: ', S);

  trace('Stage.width = ' + S.width);
  S.width = 500;
  trace('Stage.width = ' + S.width);

  trace('Stage.height = ' + S.height);
  S.height = 200;
  trace('Stage.height = ' + S.height);

  S.align = StageAlign.TOP_LEFT;
  S.displayState = StageDisplayState.NORMAL;
  S.frameRate = 30;
  S.quality = StageQuality.HIGH;
  S.scaleMode = StageScaleMode.NO_SCALE;
  S.showDefaultContextMenu = false;

  S.addEventlistener(Event.ADDED, listener.onAdded);

  trace('Stage object: ', S);

  trace('----------------------------------------------');

  var shape = new Shape();
  trace('Created: ', shape.toString(), shape);

  shape.x = 50;
  shape.y = 90;
  shape.width = 160;
  shape.height = 100;
  shape.alpha = 0.5;
  shape.name = 'Ken';

  trace('Created: ', shape.toString(), shape);

  S.addChild(shape);

  trace('----------------------------------------------');

  var shape2 = new Shape();
  trace('Created: ', shape2.toString(), shape2);

  shape2.x = 10;
  shape2.y = 10;
  shape2.width = 120;
  shape2.height = 80;
  shape2.alpha = 0.8;
  shape2.name = 'Barbie';

  trace('Created: ', shape2.toString(), shape2);

  S.addChild(shape2);

  trace('----------------------------------------------');

  trace('Getting Shape "Ken" by name: ', S.getChildByName('Ken'));

  trace('Getting Shape "Barbie" by name: ', S.getChildByName('Barbie'));

  trace('----------------------------------------------');

  trace('Will swap children...');

  trace('Display List before: ', S.displayListToString());

  S.swapChildren(S.getChildByName('Ken'), S.getChildByName('Barbie'));

  trace(S.displayListToString());

  S.swapChildrenAt(0,1);

  trace(S.displayListToString());

  trace('----------------------------------------------');

}
