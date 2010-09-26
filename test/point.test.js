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