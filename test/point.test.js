
var pt = new Point(3, 4);

console.log("Created point: ", pt.toString());

console.log("set x = 40: ", pt.x = 40);
console.log("set y = 30: ", pt.y = 30);

console.log("result from setting: ", pt.toString());

console.log("get length: ", pt.length);

try {
    console.log("set length: ", pt.length = 90);
}
catch(e) {
    console.log('error setting length! ', e);
}

console.log("result from setting: ", pt.toString());

console.log('adding {10, 10}: ', pt = pt.add(new Point(10, 10)));
console.log('subtracting {10, 10}: ', pt = pt.subtract(new Point(10, 10)));

var ptc = pt.clone();
console.log('cloned pt: ', ptc.toString());
console.log('add to clone {100, 100}: ', ptc = ptc.add(new Point(100, 100)));

console.log("original point: ", pt.toString());
console.log("cloned point: ", ptc.toString());

console.log('/////','testing distance', '//////////////////////');

var pta = new Point(10, 10);
var ptb = new Point(110, 10);

var distance = pta.distance(pta, ptb);

console.log('distance from: ', pta.toString(), ' to: ', ptb.toString(), ' = ', distance);

ptb.x = 10;
ptb.y = 210;

var distance = pta.distance(pta, ptb);

console.log('distance from: ', pta.toString(), ' to: ', ptb.toString(), ' = ', distance);

console.log('/////','testing equality', '//////////////////////');

pta.x = ptb.x = 20;
pta.y = ptb.y = 50;

console.log('does ', pta.toString(), ' === ', ptb.toString(), ' ? ', pta.equals(ptb));

ptb.y = 77;

console.log('does ', pta.toString(), ' === ', ptb.toString(), ' ? ', pta.equals(ptb));

console.log('/////','testing point.polar()', '//////////////////////');

console.log('cartesian point for r=2, angle=90 degrees : ', ptb.polar(2, 90 * (Math.PI/(180))).toString());

console.log('/////','testing point.interpolate()', '//////////////////////');

pta.x = 0;
pta.y = 0;

ptb.x = -10;
ptb.y = -10;

console.log('interpolate @ 0.5 : ', 
    pta.toString(), 
    ptb.toString(), ' = ', 
    pta.interpolate(pta, ptb, 0.5).toString());


/*
var pt = new Point(3, 4);
console.log("created point:", pt.toString());
console.log("length:", pt.len);

pt = pt.add( new Point(3, 4) );
console.log('after adding:', pt.toString());

pt = pt.subtract( new Point(3, 4) );
console.log('after subtracting:', pt.toString());

var d = pt.distance( new Point(1, 5), new Point(11, 5) );
console.log('calculated distance:', d);

console.log('Test equality. Expect true:', pt.equals(new Point(3, 4)));
console.log('Test equality. Expect false:', pt.equals(new Point(33, 49)));
*/