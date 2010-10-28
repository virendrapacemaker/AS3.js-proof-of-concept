if (!console) { 
    var console = { log:function() {} }; 
}


/**
 * Sugar methods from Douglas Crawford
 * http://bit.ly/crawford-inheritance
 *
 * @this Function
 * @param {string} name The name of the method to add.
 * @param {function} func The function to add.
 * @return {Function} The function object.
 */
Function.prototype.method = function(name, func) {
  this.prototype[name] = func;
  return this;
};

Function.method('inherits', function(parent) {
  var d = {}, p = (this.prototype = new parent());
  this.method('uber', function uber(name) {
    if (!(name in d)) {
      d[name] = 0;
    }
    var f, r, t = d[name], v = parent.prototype;
    if (t) {
      while (t) {
        v = v.constructor.prototype;
        t -= 1;
      }
      f = v[name];
    } else {
      f = p[name];
      if (f == this[name]) {
        f = v[name];
      }
    }
    d[name] += 1;
    r = f.apply(this, Array.prototype.slice.apply(arguments, [1]));
    d[name] -= 1;
    return r;
  });
  return this;
});

Function.method('swiss', function(parent) {
  for (var i = 1; i < arguments.length; i += 1) {
    var name = arguments[i];
    this.prototype[name] = parent.prototype[name];
  }
  return this;
});


/**
 * A generic way to define getters/setters for
 * objects in both the old Mozilla way and the new ECMA standard way,
 * which should work in I.E., at least on DOM Elements.
 *
 * more info:
 * John Resig: http://ejohn.org/blog/javascript-getters-and-setters/
 * Robert Nyman: http://bit.ly/duSGZU
 *
 * https://developer.mozilla.org/en/JavaScript/Reference/global_objects/object/defineproperties
 * https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/defineProperty
 *
 * @author somethingkindawierd@gmail.com (Jon Beebe)
 */
if (!Object.defineProperty && Object.__defineGetter__) {
  /**
   * very basic implementation ECMA5 Object.defineProperty
   * @param {object} target The object to define properties on.
   * @param {string} label The property label.
   * @param {object} funcs The functions for the label.
   */
  Object.prototype.defineProperty = function(target, label, funcs) {
    if (funcs.get) {
      target.__defineGetter__(label, funcs.get);
    }
    if (funcs.set) {
      target.__defineSetter__(label, funcs.set);
    }
  };
}

if (!Object.defineProperties) {
  /**
   * very basic implementation ECMA5 Object.defineProperties
   * @param {object} target The object to define properties on.
   * @param {object} p All properties to define.
   */
  Object.prototype.defineProperties = function(target, p) {
    for (var label in p) {
      if (p.hasOwnProperty(label)) {
        Object.defineProperty(
            target,
            label,
            {
              get: p[label].get,
              set: p[label].set
            }
        );
      }
    }
  };
}
