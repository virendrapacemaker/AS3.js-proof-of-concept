var flash = flash || {};
flash.geom = flash.geom || {};

$(document).ready(function(){
 
//	var matrix = new Matrix();
//	console.log('--empty matrix initialization--');
//	console.log(matrix);
//	console.log(matrix.toString());

    /*
    test("Empty constructor initialization", function(){
	    	var a = matrix.a;
	    	ok(a, 1, "expecting 1");
	});
	*/
	
});


/**
 * This is a very hacky test to see if I can override the .length
 * property of a function object, and to see if I can do inheritance
 * on getter/setters.
 *
 * @this Base
 *
 * @param {number} x The x.
 * @param {number} y The y.
 */
var Base = function(x, y) {

  // Private attributes
  var x_,
      y_,
      param_ = 3;

  // Private method with access to private attributes
  function getParam() {
    return param_;
  }

  // Priveleged method can access the private stuff
  // Notice we override this in one of the child classes
  this.doStuff = function(b) {
    console.log(this);
    console.log(b);
    console.log('getParam = ', getParam());
    console.log('param_ = ', param_);
  };


  // Define our getters and setters
  this.addProperties({
    x: {
      get: function() {
        return x_;
      },
      set: function(val) {
        x_ = val;
      }
    },
    y: {
      get: function() {
        return y_;
      },
      set: function(val) {
        y_ = val;
      }
    },
    length: {
      get: function() {
        return Math.sqrt((x_ * x_) + (y_ + y_));
      }
    }
  });

  // Initialize attributes
  this.init(x, y);

};


/**
 * Render this object as a string
 *
 * @return {string} Object rendered as string.
 */
Base.prototype.toString = function() {
  var s = 'Base = {x:' + this.x +
          ', y:' + this.y +
          ', length:' + this.length + '}';
  return s;
};

/**
 * Init this object
 * Called by the constructor
 *
 * @param {number} x The x.
 * @param {number} y The y.
 */
Base.prototype.init = function(x, y) {
  this.x = x || 0;
  this.y = y || 0;
};


/**
 * Classical Inheritance v2
 * This is probably a better way because the getters/setters are added after
 * extending the class, therefore they will overwrite the parent class's
 * version of them if it has one.
 *
 * Classical Inheritance using Crawford's sugar functions
 * http://www.crockford.com/javascript/inheritance.html
 *
 * @this Child2
 *
 * @param {number} x The x.
 * @param {number} y The y.
 * @param {number} w The w.
 * @param {number} h The h.
 */

function Child2(x, y, w, h) {

  var width_,
      height_,
      param_ = 9;

  // Priveleged method can access the private stuff
  // notice that this was defined in Base class, which
  // we inherit from later. The parent function is
  // accessed via the .uber() method.
  this.doStuff = function(b) {

    console.log('------------------\n',
      'uber.doStuff: ');
    this.uber('doStuff', b);
    console.log('------------------');

    console.log('My doStuff:');
    console.log('this: ', this);
    console.log('input param: ', b);
    console.log('param_ = ', param_);
    console.log('width: ', this.width);

    console.log('------------------');
  };

  this.init(x, y, w, h);

}

// Inherit from our parent class
goog.inherits(Child2, Base);



// Add all getter/setter properties
Child2.addProperties({
  width: {
    get: function() {
      return width_;
    },
    set: function(val) {
      width_ = val;
    }
  },
  height: {
    get: function() {
      return height_;
    },
    set: function(val) {
      height_ = val;
    }
  }
});

// Override the toString function
Child2.method('toString', function() {
  var s = 'Child2 = {x:' + this.x + ', y:' + this.y +
          ', width:' + this.width +
          ', height:' + this.height +
          ', length:' + this.length + '}';
  return s;
});

// Extend the init function.
// Be sure to call the parent init via uber
Child2.method('init', function(x, y, w, h) {
  this.uber('init', x, y);
  this.height = h || 0;
  this.width = w || 0;
});



/**
 * Classical Inheritance v3
 * This is an attempt to test Google's inherits function 
 * to see if the getters/setters are passed down the chain
 * as we would hope.
 * 
 * Again, this version sets the setters afterwards so as
 * to overwrite any getters/setters that are in the parent
 * obj.
 *
 * Classical Inheritance using Google's goog.inherits()
 * [your path]/closure-library/closure/goog
 *
 * @this Child3
 *
 * @param {number} x The x.
 * @param {number} y The y.
 * @param {number} w The w.
 * @param {number} h The h.
 */
/*
function Child3(x, y, w, h) {

  var width_,
      height_,
      param_ = 10;

  // Priveleged method can access the private stuff
  // notice that this was defined in Base class, which
  // we inherit from later. The parent function is
  // accessed via the .uber() method.
  this.doStuff = function(b) {

    //console.log('------------------\n',
    //  'uber.doStuff: ');
    //this.uber('doStuff', b);
    //console.log('------------------');

    //console.log('My doStuff:');
    //console.log('this: ', this);
    //console.log('input param: ', b);
    //console.log('param_ = ', param_);
    //console.log('width: ', this.width);

    //console.log('------------------');
  };

  this.init(x, y, w, h);

}

goog.inherits(Child3, Base);

// Add all getter/setter properties
Child3.addProperties({
  width: {
    get: function() {
      return width_;
    },
    set: function(val) {
      width_ = val;
    }
  },
  height: {
    get: function() {
      return height_;
    },
    set: function(val) {
      height_ = val;
    }
  }
});

// Override the toString function
Child3.method('toString', function() {
  var s = 'Child3 = {x:' + this.x + ', y:' + this.y +
          ', width:' + this.width +
          ', height:' + this.height +
          ', length:' + this.length + '}';
  return s;
});


// <this class naem>.superClass_ (google's action via inherits)
Child3.method('init', function(x, y, w, h) {
  Child3.superClass_.init(x,y);
  console.log(Child3.superClass_.x);
  console.log(Child3.superClass_);
  this.height = h || 0;
  this.width = w || 0;
});
*/
var ch2 = new Child2(1,2,3,4);
console.log(ch2);
console.log(ch2.toString());

//var ch3 = new Child3(1,2,3,4);
//ch3.x = 10;
//console.log(ch3);
//console.log(ch3.toString());

/*
var ch1 = new Child2(1,2,3,4);
console.log(ch1);
var ch3 = new Child3(5,6,7,8);
console.log(ch3);
*/


