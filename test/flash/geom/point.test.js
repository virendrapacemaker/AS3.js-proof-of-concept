



module("Empty Point Initialization Test");

test("Default values", function(){
  var pt = new Point();
  expect(2);
  equals(pt.x, 0, 'empty initialization, y should be 0');
  equals(pt.y, 0, 'empty initialization, y should be 0');
});


test("toString print out", function(){
  var pt = new Point();
  expect(1);
  equals( pt.toString(), "{x:0, y:0, length:0}", "toString method on empty point.");

});


module("Point methods");

test("clone", function(){

  var pt = new Point();
  var ptc = pt.clone();

  expect(3);
  equals( pt.x, ptc.x, "Equals, pt.x === ptc.x" );
  equals( pt.y, ptc.y, "Equals, pt.y === ptc.y" );
  ok( pt.equals(ptc), "Equals, pt should === ptc" );

});

test(".length", function(){

  var pt = new Point(3,4);

  expect(1);
  equals( pt.length, 5, 'Length on {x:3, y:4}' );

});

test("distance", function(){

  var pt = new Point(3,4);

  expect(1);
  equals( pt.distance(pt, new Point()), pt.length, 'Test distance from {0,0} to {3,4}' );

});

test("add", function(){

  var pt1 = new Point(3,4),
      pt2 = new Point(3,4),
      pt3 = null,
      pt4 = new Point(6,8);

  pt3 = pt1.add(pt2);

  expect(4);
  equals( pt1.x + pt2.x, pt3.x, 'pt1.x + pt2.x = pt3.x' );
  equals( pt1.y + pt2.y, pt3.y, 'pt1.y + pt2.y = pt3.y' );
  equals( pt1.length + pt2.length, pt3.length, 'pt1.length + pt2.length = pt3.length' );
  ok( pt3.equals(pt4), 'pt3 equals {x:6, y:8}' );

});

test("offset", function(){

  var pt = new Point(10,10);
  pt.offset(100,100);
  expect(2);
  equals(pt.x, 110, 'Added 100 to x');
  equals(pt.y, 110, 'Added 100 to y');

});

test("interpolate @ 0.5", function(){

  var pta = new Point(),
      ptb = new Point(-10,-10),
      ptc = null;

  ptc = pta.interpolate(pta, ptb, 0.5);

  expect(2);
  equals(ptc.x, -5, 'pt.x interpolated at 1/2');
  equals(ptc.y, -5, 'pt.y interpolated at 1/2');

});

test("normalize", function(){

  var pta = new Point(5,0),
      ptb = null;

  ptb = pta.normalize(1);

  expect(2);
  equals(ptb.x, 1, 'pt.x normalized');
  equals(ptb.y, 0, 'pt.y normalized');

});

test("normalize", function(){

  var pta = new Point(3,4),
      ptb = null;

  ptb = pta.normalize(2);

  expect(2);
  equals(ptb.x, 1.2, 'pt.x normalized');
  equals(ptb.y, 1.6, 'pt.y normalized');

});





//-----------------------------------------------------------------------------





/**
 * This is a quick hack to show goog inheritance along with the new
 * functions to auto-create getters and setters from get* and set*
 * methods of a class.
 *
 * @param x
 * @param y
 * @param w
 */
Point2 = function(x, y, w) {

  Point.call(this, x, y);

  this.w_ = w || 0;

};
goog.inherits(Point2, Point);

//Point2.prototype.setW = function(val) {
//  this.w_ = val;
//};

Point2.prototype.getW = function() {
  return this.w_;
};

_.enhanceWithGettersAndSetters2(Point2.prototype);

//var pt2 = new Point2(10,10, 90);
//console.log(pt2);
