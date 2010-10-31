
module("New Color Transform Test");

test("Default values, toString", function(){
  var c = new ColorTransform();
  expect(1);
  equals(
      c.toString(),
      '(redMultiplier=1, greenMultiplier=1, ' +
      'blueMultiplier=1, alphaMultiplier=1, ' +
      'redOffset=0, greenOffset=0, ' +
      'blueOffset=0, alphaOffset=0)',
      'Fresh Color Transform');
});

module("Auto-limiting of properties between min/max values");

test("Limit testing", function(){
  var c = new ColorTransform(10,10,-10,-10,256,256,-256,-256);
  expect(1);
  equals(
      c.toString(),
      '(redMultiplier=1, greenMultiplier=1, ' +
      'blueMultiplier=0, alphaMultiplier=0, ' +
      'redOffset=255, greenOffset=255, ' +
      'blueOffset=-255, alphaOffset=-255)',
      'Fresh Color Transform');
});