To Do
=====

Classes
-------

Create base classes for:

*   flash.events.
    *   EventDispatcher
    *   Event (see Events below)
    *   MouseEvent
    *   KeyboardEvent
*   flash.geom.
    *   Point
    *   Rectangle
    *   Matrix
    *   Transform
    *	ColorTransform
*   flash.display.
    *   DisplayObject
    *   InteractiveObject
    *   DisplayObjectContainer
    *   Sprite
        *   ...and all graphics code to power the drawing
        *   possibly use Raphael.js to do heavy lifting on canvas

Other project related stuff
---------------------------

*   Integrate a testing framework
    *   [Wikipedia list of JS Testing Frameworks](http://en.wikipedia.org/wiki/List_of_unit_testing_frameworks#JavaScript)
    *   [qUnit](http://docs.jquery.com/Qunit)

Drawing
-------

*   Look into canvas wrappers, such as Raphael.js, [Canto.js](http://code.google.com/p/canto-js/)
    *   These will work for drawing into the canvas, but my research shows that
        the canvas does not support layers or groups, so we'll have to create
        that somehow. Maybe [layering canvas elements](http://stackoverflow.com/questions/3008635/html5-canvas-element-multiple-layers/3008863#3008863)?
        That's what [Collage.js does](http://radikalfx.com/files/collage/jcollage.js) in
        the [collage demo](http://radikalfx.com/2009/10/16/canvas-collage/).

*   Install Flex tools for compiling ActionScript 3
    *   [instructions to install the command-line Flex tools on Ubuntu](http://stevelove.org/2009/05/14/how-to-install-and-set-up-adobe-flex-sdk-on-ubuntu-linux/)
*   Create very basic ActionScript3 classes & swf that draws a Sprite + listens to MouseEvents
*   Attempt creating JS objects that duplicate swf functionality
