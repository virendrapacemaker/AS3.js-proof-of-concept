To Do
=====

*   Document how to install Flex and compile the ActionScript 3 sample code
*   Write post about the Base class.
    *   post Base class and samples to github
*   Write standards descriptions:
    *   How we write our code
    *   How we define our classes and perform inheritance
*   Clean up and clarify goals of project

Namespacing
-----------

See the [Adobe Docs](http://help.adobe.com/en_US/ActionScript/3.0_ProgrammingAS3/WS5b3ccc516d4fbf351e63e3d118a9b90204-7f9e.html) for info on packaging/namespacing

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

Both are legal it AS3, so we make both awailable in this project.

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
