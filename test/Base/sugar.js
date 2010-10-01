/**
 * Sugar methods from Douglas Crawford
 * http://www.crockford.com/javascript/inheritance.html
 */
Function.prototype.method = function (name, func) {
  this.prototype[name] = func;
  return this;
};

Function.method('inherits', function (parent) {
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

Function.method('swiss', function (parent) {
  for (var i = 1; i < arguments.length; i += 1) {
    var name = arguments[i];
    this.prototype[name] = parent.prototype[name];
  }
  return this;
});


/**
 * Helper method for extending one object with another
 * http://ejohn.org/blog/javascript-getters-and-setters/
*/
function extend(a,b) {
  for ( var i in b ) {
    var g = b.__lookupGetter__(i), s = b.__lookupSetter__(i);

    if ( g || s ) {
      if ( g )
      a.__defineGetter__(i, g);
      if ( s )
      a.__defineSetter__(i, s);
    } else {
      a[i] = b[i];
    }
  }
  return a;
}



/**
 * A generic way to define getters/setters for
 * objects in both the old Mozilla way and the new ECMA standard way,
 * which should work in I.E., at least on DOM Elements.
 *
 * more info:
 * John Resig: http://ejohn.org/blog/javascript-getters-and-setters/
 * Robert Nyman: http://bit.ly/duSGZU
 *
 * @author somethingkindawierd@gmail.com (Jon Beebe)
 */
Object.prototype.addProperty = function(label, getter, setter) {

  if(Object.defineProperty) {
    Object.defineProperty(
      this,
      label,
      {
        get : getter,
        set : setter
      }
    );
  }
  else {
    if(getter) {
      this.__defineGetter__(label, getter);
    }
    if(setter) {
      this.__defineSetter__(label, setter);
    }
  }

};

Object.prototype.addProperties = function(p) {

  for(var label in p) {
    if(p.hasOwnProperty(label)) {
      this.addProperty(label, p[label].get, p[label].set);
    }
  }

};