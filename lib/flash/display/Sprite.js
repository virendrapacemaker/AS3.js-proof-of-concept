/**
 * http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/display/Sprite.html
 * 
 * Currently, there is a lot more functionality going on here that I care to implement at the moment, but I will still have
 * all of the variables and functions defined, just not implemented.
 * 
 * Also, I plan to have all of the public method return as a normal closure from js.
 */

function Sprite(){
	
	sprite = function(){};
	sprite.self = this;
	
	var buttonMode,
		dropTarget,
		graphics,
		hitArea,
		soundTransform,
		useHandCursor;
		
		
	
	return {
		
		/*
		 * @param bool lockCenter
		 * @param object:Rectangle bounds
		 * 
		 * @return void
		 */
		startDrag : function( lockCenter, bounds ){
			
			var _lockCenter = lockCenter || false;
			var _bounds = bounds || null;
			
		},
		
		/*
		 * @param int touchPointID
		 * @param bool lockCenter
		 * @param object:Rectangle bounds
		 * 
		 * @return void		
		 */
		startTouchDrag : function( touchPointID, lockCenter, bounds ){
		
			var _touchPointID = touchPointID;
			var _lockCenter = lockCenter || false;
			var _bounds = bounds || null;
			
		},
		
		/*
		 * @return void
		 */
		stopDrag : function(){
			
			
		},
		
		/*
		 * @param int touchPointID
		 * 
		 * @return void
		 */
		stopTouchDrag : function( touchPointID ){
				
			var _touchPointID = touchPointID;
		
		}
		
		
	};
	
	
	
}
