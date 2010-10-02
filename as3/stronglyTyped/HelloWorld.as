package {

  import flash.display.Sprite;
  import flash.events.MouseEvent;
  
  public class HelloWorld extends Sprite {
  
		public function HelloWorld()
		{
		
      var circle:Sprite = new Sprite();
      circle.graphics.beginFill(0xFFCC00);
      circle.graphics.drawCircle(0, 0, 40);
      
      var target1:Sprite = new Sprite();
      target1.graphics.beginFill(0xCCFF00);
      target1.graphics.drawRect(0, 0, 100, 100);
      target1.name = "target1";
      
      var target2:Sprite = new Sprite();
      target2.graphics.beginFill(0xCCFF00);
      target2.graphics.drawRect(0, 200, 100, 100);
      target2.name = "target2";
      
      addChild(target1);
      addChild(target2);
      addChild(circle);
      
      circle.addEventListener(MouseEvent.MOUSE_DOWN, mouseDown) 
      
      function mouseDown(event:MouseEvent):void {
          circle.startDrag();
      }
      circle.addEventListener(MouseEvent.MOUSE_UP, mouseReleased);
      
      function mouseReleased(event:MouseEvent):void {
          circle.stopDrag();
          trace(circle.dropTarget.name);
      }
      
    }
    
  }

}