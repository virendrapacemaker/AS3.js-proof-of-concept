/**
 * http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/geom/Matrix.html
 * 
 * Use getters and setters properly: http://ejohn.org/blog/javascript-getters-and-setters/
 * (a:Number = 1, b:Number = 0, c:Number = 0, d:Number = 1, tx:Number = 0, ty:Number = 0)
 * @param int a
 * @param int b
 * @param int c
 * @param int d
 * @param int tx
 * @param int ty
 */

flash.geom.Matrix = Matrix = function(a, b, c, d, tx, ty){

    matrix = this;

        /**
        * @var int a The value that affects the positioning of 
        * pixels along the x axis when scaling or rotating an image.
        */
    var a = a || 1,
       /**
       * @var int b The value that affects the positioning of pixels
       * along the y axis when rotating or skewing an image.
       */
       b = b || 0,
       /**
       * @var int c The value that affects the positioning of pixels
       * along the x axis when rotating or skewing an image.
       */
       c = c || 0,
       /**
       * @var int d The value that affects the positioning of 
       * pixels along the x axis when scaling or rotating an image.
       */
       d = d || 1,
       /**
       * @var int tx The distance by which to translate each point 
       * long the x axis.
       */
       tx = tx || 0,
       /**
       * @var int ty The distance by which to translate each point 
       * along the y axis.
       */
       ty = ty || 0;
       
   
   return {
	   
	   /**
	    * @return {Matrix} Matrix
	    */
	   clone : function(){
		   
		   
		   
	   },
	   
	   // TODO: 'concat' is a reserved word in javascript...
	   // make sure this is possible, otherwise override the function.
	   /**
	    * Concatenates a matrix with the current matrix,
	    * effectively combining the geometric effects of
	    * the two.
	    * 
	    * @link {http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/geom/Matrix.html#concat()}
	    * 
	    * @param {Matrix} m
	    * 
	    * @return void
	    */
	   matrix.prototype.concat : function(m){
		   
	   },
	   
	   /**
	    * Includes parameters for scaling, rotation, and translation.
	    * createBox(scaleX:Number, scaleY:Number, rotation:Number = 0, tx:Number = 0, ty:Number = 0):void
	    * 
	    * @param float scaleX
	    * @param float scaleY
	    * @param float rotation
	    * @param float tx
	    * @param float ty
	    * 
	    * @return void
	    */
	    createBox : function(scaleX, scaleY, rotation, tx, ty){
			
			
			
		},
		
		/**
		 * Creates the specific style of matrix expected by the beginGradientFill() and
		 * lineGradientStyle() methods of the Graphics class.
		 * createGradientBox(width:Number, height:Number, rotation:Number = 0, tx:Number = 0, ty:Number = 0):void
		 * 
		 * @link {http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/geom/Matrix.html#createGradientBox()}
		 * 
		 * @param float width
		 * @param float height
		 * @param float rotation
		 * @param float tx
		 * @param float ty
		 * 
		 * @return void
		 */
		createGradientBox : function(width, height, rotation, tx, ty){
		
	    },
	    
	    /**
	     * Given a point in the pretransform coordinate space, returns the coordinates of that point after
	     * the transformation occurs.
	     * deltaTransformPoint(point:Point):Point
	     * 
	     * @link {http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/geom/Matrix.html#deltaTransformPoint()}
	     * 
	     * @param {Point} point
	     * 
	     * @return {Point} 
	     */
	      deltaTransformPoint : function(point){
		  
		  
		  
		  },
		  
		  /**
		   * Sets each matrix property to a value that causes a null transformation.
		   * identity():void
		   * 
		   * @link {http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/geom/Matrix.html#identity()}
		   * 
		   * @return void
		   *
		   */
		   identity : function(){},
		   
		   
		   /**
		   * Performs the opposite transformation of the original matrix.
		   * invert():void
		   * 
		   * @link {http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/geom/Matrix.html#invert()}
		   * 
		   * @return void
		   *
		   */
		   invert : function(){},
		   
		   /**
		   * Applies a rotation transformation to the Matrix object.
		   * rotate(angle:Number):void
		   * 
		   * @link {http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/geom/Matrix.html#rotate()}
		   * 
		   * @return void
		   *
		   */
		   rotate : function(){},
		   
		   /**
		   * Applies a scaling transformation to the matrix.
		   * scale(sx:Number, sy:Number):void
		   * 
		   * @link http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/geom/Matrix.html#scale()}
		   * 
		   * @param float sx
		   * @param float sy
		   * 
		   * @return void
		   *
		   */
		   scale : function(sx, sy){},
		   
		   /**
		   * Returns a text value listing the properties of
		   * the Matrix object.
		   * toString():String
		   *  
		   * @link {http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/geom/Matrix.html#toString()}
		   * 
		   * @return string
		   *
		   * TODO: need to test this override...see if it works.
		   */
		   matrix.prototype.toString : function(){},
		  
		  
		  /**
		   * Returns the result of applying the geometric transformation represented by the Matrix
		   * object to the specified point.
		   * transformPoint(point:Point):Point
		   * 
		   * @link {http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/geom/Matrix.html#transformPoint()}
		   * 
		   * @param {Point} point
		   * 
		   * @return {Point}
		   *
		   */
		   transformPoint : function(point){},
		   
		   /**
		   * Translates the matrix along the x and y axes, as specified by the dx and dy parameters.
		   * translate(dx:Number, dy:Number):void
		   * 
		   * @link {http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/geom/Matrix.html#translate()}
		   * 
		   * @param float dx
		   * @param float dy
		   * 
		   * @return void
		   *
		   */
		   translate : function(point){}
	 
	 
	   
   };
   
   
}
