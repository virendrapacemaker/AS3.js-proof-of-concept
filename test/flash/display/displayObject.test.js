goog.require('flash.display.Shape');
goog.require('flash.display.Sprite');

window.onload = function() {
  trace('window.onload');
  init();
};


function init() {
  trace('----------------------------------------------');
  
  
  var shape = new Shape();
  trace('Created: ', shape.toString(), shape);
  
  shape.x = 50;
  shape.y = 90;
  shape.width = 160;
  shape.height = 100;
  shape.alpha = 0.5;
  
  trace('Created: ', shape.toString(), shape);
  
  
  trace('----------------------------------------------');
  
  
  var shape2 = new Shape();
  trace('Created: ', shape2.toString(), shape2);
  
  shape2.x = 100;
  shape2.y = 100;
  
  trace('Created: ', shape2.toString(), shape2);
  trace('Other: ', shape.toString(), shape);
  
  
  trace('----------------------------------------------');
  
  
  var sprite = new Sprite();
  trace('Created: ', sprite.toString(), sprite);
  
  sprite.x = 50;
  sprite.y = 90;
  
  trace('Created: ', sprite.toString(), sprite);
  trace('Sprite now has ' + sprite.numChildren + ' children');
  
  
  trace('----------------------------------------------');
  
  
  
  var sprite2 = new Sprite();
  sprite2.x = 99;
  sprite2.y = 99;
  sprite2.width = 10;
  sprite2.height = 10;
  
  trace('Created: ', sprite2.toString(), sprite2);
  trace('Sprite2 now has ' + sprite2.numChildren + ' children');
  
  
  trace('----------------------------------------------');
  
  trace('Do the display lists equal eachother?');
  trace('==', sprite2.displayList_ == sprite.displayList_);
  trace('===', sprite2.displayList_ === sprite.displayList_);
  
  
  trace('----------------------------------------------');
  
  
  
  trace('adding child to sprite: ', sprite.addChild(shape));
  
  trace('adding child to sprite: ', sprite.addChild(shape2));
  
  var shape3 = new Shape();
  trace('Created: ', shape3);
  
  trace('adding child to sprite: ', sprite.addChild(shape3));
  trace('Sprite now has ' + sprite.numChildren + ' children');
  trace('Sprite.toString:');
  trace(sprite.toString());
  
  
  trace('----------------------------------------------');
  
  
  var shape4 = new Shape();
  trace('Created: ', shape4.toString(), shape4);
  
  shape4.x = 100;
  shape4.y = 100;
  
  trace('adding child to sprite: ', sprite2.addChild(shape4));
  
  
  trace('----------------------------------------------');
  
  trace('adding child to sprite: ', sprite.addChild(sprite2));
  trace('Sprite now has ' + sprite.numChildren + ' children');
  trace('Sprite.toString:');
  trace(sprite.toString());
  
  
  trace('----------------------------------------------');
  
  trace('instanceof tests...');
  
  trace('Sprite instanceof Sprite? ', sprite instanceof Sprite);
  trace('Sprite instanceof DisplayObject? ', sprite instanceof DisplayObject);
  trace('Sprite instanceof EventDispatcher? ', sprite instanceof EventDispatcher);
  
  trace('Shape instanceof Sprite? ', shape instanceof Sprite);
  trace('Shape instanceof DisplayObject? ', shape instanceof DisplayObject);
  trace('Shape instanceof EventDispatcher? ', shape instanceof EventDispatcher);
  
  
  trace('----------------------------------------------');
  
  trace('Transform tests');
  
  trace('Sprite transform: ', sprite.transform);
  trace('Sprite transform matrix: ', sprite.transform.matrix);
  try {
    trace('Set matrix to null (error) ', sprite.transform.matrix = null);
  }
  catch (e) {
    trace('Error setting matrix to null: ', e);
    trace('Stack trace = ', e.getStackTrace(), e.getStackTrace().join("\n\n"));
  }
}



