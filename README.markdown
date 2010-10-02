Project Description
===================

Inception
---------

This project started as a curiosity of Jon Beebe, wondering if it'd be possible
to port ActionScript 3 classes to JavaScript so that AS3 code could run natively
in Javascript.

Proof-of-concept
----------------

To consider the proof-of-concept successful, I must be able to run ActionScript3
code, with minimal alterations, in an HTML5 page. I must be able to:

*   Create Sprites in a canvas element
*   Perform basic drawing in the sprites, such as creating a circle and filling
    it with a color and stroke.
*   Process basic events, such as mouse and keyboard events

Testing
=======

The barrier to entry for contributors needs to be low. As such it will not be
necessary to own the Flash or Flex IDE to code or run the AS3 samples.

See the ReadMe in the as3 folder for more on the ActionScript 3 examples.

Coding Standards
================

All code should pass the Google Linter in --strict mode. Therefore, code to the
[Google Style guidelines](http://bit.ly/goog-js-style-guide)

Once installed run your script(s) through the linter

    $ gjslint --strict AS3.js/lib/flash/geom/Point.js
    1 files checked, no errors found. # <-- here's the result you want to see :)

Namespacing
-----------

Namespace all Classes inside their respective AS3 path, e.g.

    flash.js // wrapper object
    flash.display.js // wrapper object
    flash.display.Sprite.js // contains Graphics class

When defining a class alias it to a global of the class name, e.g.

    flash.display.Sprite = Sprite = function() {...}

This enables us to follow the AS3 shortcuts of using:

    var s = new Sprite();
    
Instead of:

    var s = new flash.display.Sprite();

Both are legal it AS3, so we make both available in this project.

See the [Adobe Packages & namespaces Docs](http://bit.ly/adobe-as3-pkg-nmspace)
for info on packaging/namespacing is ActionScript 3