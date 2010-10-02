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

Drawing
-------

*   Install Flex tools for compiling ActionScript 3
    *   [instructions to install the command-line Flex tools on Ubuntu](http://stevelove.org/2009/05/14/how-to-install-and-set-up-adobe-flex-sdk-on-ubuntu-linux/)
*   Create very basic ActionScript3 classes & swf that draws a Sprite + listens to MouseEvents
*   Attempt creating JS objects that duplicate swf functionality
