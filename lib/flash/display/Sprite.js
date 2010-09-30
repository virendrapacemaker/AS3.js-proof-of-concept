/**
 * http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/display/Sprite.html
 *
 * Use getters and setters properly:
 * http://ejohn.org/blog/javascript-getters-and-setters/
 *
 * Currently, there is a lot more functionality going on here
 * that I care to implement at the moment, but I will still have
 * all of the variables and functions defined, just not implemented.
 *
 * Also, I plan to have all of the public method return as a normal
 * closure from js.
 *
 * @return {Sprite} A sprite object.
 */

function Sprite() {

    sprite = function() {};
    sprite.self = this;

    var buttonMode,
        dropTarget,
        graphics,
        hitArea,
        soundTransform,
        useHandCursor;

        set buttonMode(val) {
            buttonMode = val;
        },

        get buttonMode() {
            return buttonMode;
        },

        set dropTarget(val) {
            dropTarget = val;
        },

        get dropTarget() {
            return dropTarget;
        },

        set graphics(val) {
            graphics = val;
        },

        get graphics() {
            return graphics;
        },

        set hitArea(val) {
            hitArea = val;
        },

        get hitArea() {
            return hitArea;
        },

        set soundTransform(val) {
            soundTransform = val;
        },

        get soundTransform() {
            return soundTransform;
        },

        set useHandCursor(val) {
            useHandCursor = val;
        },

        get useHandCursor() {
            return useHandCursor;
        }



    return {

        /*
         * @param bool lockCenter
         * @param object:Rectangle bounds
         *
         * @return void
         */
        startDrag: function(lockCenter, bounds) {

            var _lockCenter = lockCenter || false;
            var _bounds = bounds || null;
        },

        /*
        * @param int touchPointID
        * @param bool lockCenter
        * @param object:Rectangle bounds
        *
        * @return void
        */
        startTouchDrag: function(touchPointID, lockCenter, bounds) {

            var _touchPointID = touchPointID;
            var _lockCenter = lockCenter || false;
            var _bounds = bounds || null;

        },

        /*
         * @return void
        */
        stopDrag: function() {


        },

        /*
        * @param int touchPointID
        *
        * @return void
        */
        stopTouchDrag: function(touchPointID) {

            var _touchPointID = touchPointID;

        }

};



}
