To Do
=====

Namespacing
-----------

See the [Adobe Docs](http://help.adobe.com/en_US/ActionScript/3.0_ProgrammingAS3/WS5b3ccc516d4fbf351e63e3d118a9b90204-7f9e.html) for info on packaging/namespacing

Mozilla's [Javascript Packages](http://www.mozilla.org/js/simple-packages.html)?

Develop the namespace structure, such as

    as3.js // main namespace
    as3.flash.js // wrapper object
    as3.flash.display.js // wrapper object
    as3.flash.display.Graphics.js // contains Graphics class

When doing this, how can we say

    var p = new Point(x, y);

when point in defined in as3.flash.geom.Point ? Will we need to say

    var p = new as3.flash.geom.Point(x, y);

If so, will creating global links to these constructors work?

    var Point = as3.flash.geom.Point;
    ...
    var p = new Point(x, y);

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

Events
------

How do we define the Event constants? The main event class has alot of constants: http://bit.ly/9LkfBS.
Each class that uses any of them 'knows' which events it implements, such as DisplayObject and
its list of events. How do we code this? Will it be enough to add to the comments @event, or something
similar, to let the class and users know that it implements that event?

Other project related stuff
---------------------------

*   Integrate a testing framework
    *   [Wikipedia list of JS Testing Frameworks](http://en.wikipedia.org/wiki/List_of_unit_testing_frameworks#JavaScript)
    *   [qUnit](http://docs.jquery.com/Qunit)
*   Create workflow guidelines, codeing standards, etc. Base off of Google Closure Tools

Drawing
-------

*   Install Flex tools for compiling ActionScript 3
    *   [instructions to install the command-line Flex tools on Ubuntu](http://stevelove.org/2009/05/14/how-to-install-and-set-up-adobe-flex-sdk-on-ubuntu-linux/)
*   Create very basic ActionScript3 classes & swf that draws a Sprite + listens to MouseEvents
*   Attempt creating JS objects that duplicate swf functionality
