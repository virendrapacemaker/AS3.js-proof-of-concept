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

Timeline
--------

The entire swf runs within the root Stage timeline. As such we will need to
implement the timing system that loops through the code according to the swf
frames-per-second.

Individual MovieClip (and descendent) elements have their own timelines (a
MovieClip is a Sprite extended with a timeline.) To properly support MovieClip
functionality we will need to nest timelines, with each having it's own state
(playing, stopped, etc.)

Drawing
-------

*   Look into canvas wrappers, such as Raphael.js,
    [Canto.js](http://code.google.com/p/canto-js/), or
    [Artisan.js](http://artisanjs.com/)
    *   These will work for drawing into the canvas, but my research shows that
        the canvas does not support layers or groups, so we'll have to create
        that somehow. Maybe [layering canvas elements](http://stackoverflow.com/questions/3008635/html5-canvas-element-multiple-layers/3008863#3008863)?
        That's what [Collage.js does](http://radikalfx.com/files/collage/jcollage.js) in
        the [collage demo](http://radikalfx.com/2009/10/16/canvas-collage/).
    *   [Artisan.js](http://artisanjs.com/) supports [layers](http://www.luzcannon.com/article/layers-artisan-js).
        We could use Artisan, or at least [learn from it's code](http://github.com/davidbrooks/Artisan).

*   How will we actually implement the display stack?
    *   As objects in the dom? We could render each DisplayObject as a canvas
        element in the dom, positioned absolutely to the parent (Stage) div.

        Advantages:

        *   Each element is distinct, so redraws only happen for individual
            elements.

        Disadvantages:

        *   This has a drawback in that we cannot support layer effects such as
            blending.
        *   Potential for css conflicts.

    *   All objects could be in memory, rendered onto one root canvas element.

        Advantages:

        *   follows the current flash model with one element in the dom -- no
            worries about css conflicts.
        *   blend modes can be supported
        *   we have complete control over every pixel.

        Disadvantages:

        *   We must update the entire display stack for every loop through
            of the timeline, i.e. 30 x per second for a 30fps swf.
        *   Or we will have to implement some smart-rendering code that only
            redraws the portion of the canvas that's being updated. This can
            be done, but it'd be cumbersome.
        *   We'll need our own manager for looping through the display object
            stack and managing mouse-interactions, i.e. detecting a click.

Other project related stuff
---------------------------

*   Integrate a testing framework
    *   [Wikipedia list of JS Testing Frameworks](http://en.wikipedia.org/wiki/List_of_unit_testing_frameworks#JavaScript)
    *   [qUnit](http://docs.jquery.com/Qunit)

