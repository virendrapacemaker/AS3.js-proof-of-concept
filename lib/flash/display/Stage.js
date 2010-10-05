flash.display.Stage = Stage = function() {};

// Stage -> DisplayObjectContainer -> InteractiveObject ->
//          DisplayObject -> EventDispatcher -> Object
Stage.inherits(DisplayObjectContainer);
