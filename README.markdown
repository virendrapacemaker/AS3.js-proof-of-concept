Project Description
===================

Inception
---------

This project started as a curiosity of Jon Beebe, wondering if it'd be possible
to port the ActionScript 3 api to JavaScript so that AS3 code could run natively
in Javascript.

Proof-of-concept
----------------

To consider the proof-of-concept successful, I must be able to run ActionScript3
code, with minimal alterations, in an HTML5 page. I must be able to:

*   Create Sprites in a canvas element
*   Perform basic drawing in the sprites, such as creating a circle and filling
    it with a color and stroke.
*   Process basic events, such as mouse and keyboard events

Intermetiate-goal
-----------------

Port all core display classes*: http://www.adobe.com/livedocs/flash/9.0/main/wwhelp/wwhimpl/common/html/wwhelp.htm?context=LiveDocs_Parts&file=00000143.html

*with the exception possibly being the legacy AVM1Movie class.

End-goal
--------

Port the entire AS3 api to JavaScript.

Testing
=======

The barrier to entry for contributors needs to be low. As such it will not be
necessary to own the Flash or Flex IDE to code or run the AS3 samples.

See the ReadMe in the /as3 folder for more on the ActionScript 3 examples.
See the notes on Google Closure below.

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
    flash.display.Sprite.js // contains Sprite class definition

When defining a class alias it to a global of the class name, e.g.

    flash.display.Sprite = Sprite = function() {...}

This enables us to follow the AS3 shortcuts of using:

    var s = new Sprite();

Instead of:

    var s = new flash.display.Sprite();

Both are legal it AS3, so we make both available in this project.

See the [Adobe Packages & namespaces Docs](http://bit.ly/adobe-as3-pkg-nmspace)
for info on packaging/namespacing is ActionScript 3

Google Closure
============

We use Google Closure to provide some basic functionality, such as classes and inheritenc, as well as to compile the project into its final form.

Compiling is demonstrated in the Point demo -- `test/flash/geom/point2.html`.

change to the root of the AS3.js project, and run this command in your terminal:

    ./compile.sh

you should see something like this echoed to the terminal:

    closure-library/closure/bin/build/closurebuilder.py: Scanning paths...
    closure-library/closure/bin/build/closurebuilder.py: 706 sources scanned.
    closure-library/closure/bin/build/closurebuilder.py: Building dependency tree..
    closure-library/closure/bin/build/closurebuilder.py: Compiling with the following command: java -jar compiler.jar --js closure-library/closure/goog/base.js --js lib/support/underscore.js --js lib/support/sugar.js --js lib/flash/flash.js --js lib/flash/geom/geom.js --js lib/flash/geom/Point.js
    closure-library/closure/bin/build/closurebuilder.py: JavaScript compilation succeeded.

At which point, if you look in the test/flash/geom/ folder you'll see a freshly compiled `point.compiled.js` file.

To compare, load `test/flash/geom/point2.html` and you'll see a similar point demo loading all the files individually.

