goog.provide('beebe');

goog.require('goog.array');
goog.require('goog.math');

/**
 * Provide a general-purpose namespace for utility methods with no other
 * place to live. Most of these used to be mixins for the underscore
 * library and have been moved here.
 */
(function() {

  beebe = {

      string: {

        /**
         * force 1st letter to lowercase.
         *
         * @param {string} string The input string.
         * @return {string} String with 1st character lowered.
         */
        lowercaseFirstLetter: function(string){
          return string.charAt(0).toLowerCase() + string.slice(1);
        }
      },

      array: {
        /**
         * Inspired by underscore.js compact
         * Remove all falsy values from the array.
         *
         * @param {array} array The array to compact.
         * @return {array} The compacted array.
         */
        compact: function(array) {
          return goog.array.filter(array, function(value){ return !!value; });
        }
      },

      func: {

        /**
         * Check a function's definition to see if it requires arguments.
         *
         * @param {Function} func The function to test.
         * @return {boolean} True if args required, false otherwise.
         */
        takesArgs: function(func) {
          return func.toString().match(/function(( *|[\w]*)\()(.+)(\))/);
        },

        /**
         * Check a function's definition to see if it requires more than
         * one argument.
         *
         * @param {Function} func The function to test.
         * @return {boolean} True if args required, false otherwise.
         */
        takesMultipleArgs: function(func) {
          return func.toString().match(/function(( *|[\w]*)\()(.+?,.+)(\))/);
        }
      },

      math: {

        /**
         * Limit a number between a given min/max.
         *
         * @deprecated Use goog.math.clamp.
         *
         * @param {number} value The input number.
         * @param {number} min The minimum value to return.
         * @param {number} max The maximum value to return.
         * @return {number} The input number if it is within bounds, or the
         *                  nearest number within the bounds.
         */
        limit: function(val, min, max) {
          return goog.math.clamp(val, min, max);
        }
      },

      magic: {

        /**
         * Enhance an object by turning all getX and setX methods into official
         * getters and setters that are aliases for the getX and setX methods.
         *
         * This class uses the underscore.each method that limits the enumerated
         * properties to only those belonging to this object. Normally, this would
         * be the proper and safe way to do this. However, when inheriting from parent
         * classes, this will not see the child prototype's setX or getX properties.
         *
         * @param {object} A class prototype, passed as Class.prototype.
         */
        enhanceWithGettersAndSetters: function(c) {

          // trace('Enhancing ', c);

          var props = {};

          // TODO: port to goog.array.forEach
          goog.array.forEach(c, function(prop, n, obj) {

            // trace('Processing property ' + n);

            if(n.indexOf('get') === 0) {
              n = beebe.string.lowercaseFirstLetter(n.substr(3));
              // trace('Name of getter is ' + n);
              props[n] = props[n] || {};
              props[n].get = prop;
            }
            else if(n.indexOf('set') === 0) {
              n = beebe.string.lowercaseFirstLetter(n.substr(3));
              // trace('Name of setter is ' + n);
              props[n] = props[n] || {};
              props[n].set = prop;
            }

          }); /* </ _.each > */

          if(props !== {}) {
            // trace('props:', props);
            Object.defineProperties(c, props);
          }
        },

        /**
         * Enhance an object by turning all getX and setX methods into official
         * getters and setters that are aliases for the getX and setX methods.
         *
         * This class DOES NOT limit the for loop to only properties belonging
         * to this object so that we can see methods defined on a child class.
         * While not typically considered a safe thing to do, this function only
         * creates getter and setter aliases where appropriate (methods prefixed with
         * 'set' or 'get', so it should not have any undesired side effects.
         *
         * @param {object} A class prototype, passed as Class.prototype.
         */
        enhanceWithGettersAndSetters2: function(c) {

          var props = {},
              prop = null,
              n = null;

          for(prop in c) {
            //trace('Processing property ' + prop);

            if(prop.indexOf('get') === 0) {
              // We only define getters using functions that do *not* take arguments.
              if(!beebe.func.takesArgs(c[prop])) {
                n = beebe.string.lowercaseFirstLetter(prop.substr(3));
                //trace('Name of getter is ' + n);
                props[n] = props[n] || {};
                //trace('defining prop ' + n + ' getter which is ', c[prop]);
                props[n].get = c[prop];
              }
            }
            else if(prop.indexOf('set') === 0) {
              // We only define setters using functions taking 1 argument.
              if(!beebe.func.takesMultipleArgs(c[prop])) {
                n = beebe.string.lowercaseFirstLetter(prop.substr(3));
                //trace('Name of setter is ' + n);
                props[n] = props[n] || {};
                //trace('defining prop ' + n + ' setter which is ', c[prop].toString());
                props[n].set = c[prop];
              }
            }
          }

          if(props !== {}) {
            // trace('props:', props);
            Object.defineProperties(c, props);
          }

        } /* </ enhanceWithGettersAndSetters2 > */

      } /* </ magic > */

  };

  goog.exportSymbol('beebe', beebe);

})();