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
      y_;

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




////////////////////////////////////////////////////////////////////////////////




/**
 * Classical Inheritance using Crawford's sugar functions
 * http://www.crockford.com/javascript/inheritance.html
 *
 * @this W
 *
 * @param {number} x The x.
 * @param {number} y The y.
 * @param {number} w The w.
 * @param {number} h The h.
 */
function W(x, y, w, h) {

  var width_,
      height_;

  this.addProperties({
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

  this.init(x, y, w, h);

}

// Inherit from our parent class
W.inherits(Base);



// Override the toString function
W.method('toString', function() {
  var s = 'W = {x:' + this.x + ', y:' + this.y +
          ', width:' + this.width +
          ', height:' + this.height +
          ', length:' + this.length + '}';
  return s;
});

// Extend the init function.
// Be sure to call the parent init via uber
W.method('init', function(x, y, w, h) {
  this.uber('init', x, y);
  this.height = h || 0;
  this.width = w || 0;
});




////////////////////////////////////////////////////////////////////////////////





/**
 * Classical Inheritance v2
 * This is probably a better way because the getters/setters are added after
 * extending the class, therefore they will overwrite the parent class's
 * version of them if it has one.
 *
 * Classical Inheritance using Crawford's sugar functions
 * http://www.crockford.com/javascript/inheritance.html
 *
 * @this J
 *
 * @param {number} x The x.
 * @param {number} y The y.
 * @param {number} w The w.
 * @param {number} h The h.
 */
function J(x, y, w, h) {

  var width_,
      height_;

  this.init(x, y, w, h);

}

// Inherit from our parent class
J.inherits(Base);

// Add all getter/setter properties
J.addProperties({
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
J.method('toString', function() {
  var s = 'J = {x:' + this.x + ', y:' + this.y +
          ', width:' + this.width +
          ', height:' + this.height +
          ', length:' + this.length + '}';
  return s;
});

// Extend the init function.
// Be sure to call the parent init via uber
J.method('init', function(x, y, w, h) {
  this.uber('init', x, y);
  this.height = h || 0;
  this.width = w || 0;
});




////////////////////////////////////////////////////////////////////////////////




/**
 * Parasitic Inheritance
 * http://www.crockford.com/javascript/inheritance.html
 *
 * Pros: all code contained within the Parasite wrapper function
 * Cons: it can only be extennded via parasitic inheritance.
 *       we cannot access that.prototype because it's private to the class
 *
 * @this Parasite
 *
 * @param {number} x The x.
 * @param {number} y The y.
 * @param {number} w The w.
 * @param {number} h The h.
 */
function Parasite(x, y, w, h){

  var width_,
      height_,
      that = new Base(x, y);

  that.addProperties({
    width : {
      get : function() {
        return width_;
      },
      set : function(val) {
          width_ = val;
        }
      },
      height : {
        get : function() {
          return height_;
        },
        set : function(val) {
          height_ = val;
        }
      }
  });

  // Override a function
  that.toString = function() {
    var s = 'W = {x:' + this.x +
            ', y:' + this.y +
            ', width:' + this.width +
            ', height:' + this.height +
            ', length:' + this.length + '}';
    return s;
  };

  // Initialize attributes
  that.height = h || 0;
  that.width = w || 0;

  return that;

}
