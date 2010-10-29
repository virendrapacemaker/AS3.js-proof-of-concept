

module("Empty Matrix Initialization Test");

test("Default values", function(){
	//a:Number = 1, b:Number = 0, c:Number = 0, d:Number = 1, tx:Number = 0, ty:Number = 0
	var m1 = new Matrix();
	expect(6);
	equals( m1.a, 1, "empty initialization, 'a' should be '1'" );
	equals( m1.b, 0, "empty initialization, 'b' should be '0'" );
	equals( m1.c, 0, "empty initialization, 'c' should be '0'" );
	equals( m1.d, 1, "empty initialization, 'd' should be '1'" );
	equals( m1.tx, 0, "empty initialization, 'tx' should be '0'" );
	equals( m1.ty, 0, "empty initialization, 'ty' should be '0'" );
});


test("toString print out", function(){

	var m1 = new Matrix();
	expect(1);
	equals( m1.toString(), "1 0 0" + '\n' + "0 1 0", "toString method on empty matrix.");

});


module("Matrix methods on empty matrices");

test("Invert", function(){

	var m1 = new Matrix();
	var invert = m1.invert();
	expect(7);
	equals( invert.a, 1, "Invert on empty initialization, 'a' should be '1'" );
	equals( invert.b, 0, "Invert on empty initialization, 'b' should be '0'" );
	equals( invert.c, 0, "Invert on empty initialization, 'c' should be '0'" );
	equals( invert.d, 1, "Invert on empty initialization, 'd' should be '1'" );
	equals( invert.tx, 0, "Invert on empty initialization, 'tx' should be '0'" );
	equals( invert.ty, 0, "Invert on empty initialization, 'ty' should be '0'" );
	equals( invert.toString(), "1 0 0" + '\n' + "0 1 0", "toString method on empty matrix that was inverted.");

});


test("Concat", function(){

	var m1 = new Matrix();
	var m2 = new Matrix();
	m1.concat(m2);
	expect(7);
	equals( m1.a, 1, "Concat on two empty initializations, 'a' should be '1'" );
	equals( m1.b, 0, "Concat on two empty initializations, 'b' should be '0'" );
	equals( m1.c, 0, "Concat on two empty initializations, 'c' should be '0'" );
	equals( m1.d, 1, "Concat on two empty initializations, 'd' should be '1'" );
	equals( m1.tx, 0, "Concat on two empty initializations, 'tx' should be '0'" );
	equals( m1.ty, 0, "Concat on two empty initializations, 'ty' should be '0'" );
	equals( m1.toString(), "1 0 0" + '\n' + "0 1 0", "toString method on concated matrix...initialized default");

});


test("rotate", function(){

	var m1 = new Matrix();
	m1.rotate(1); // rotate via 1
	expect(6);
	equals( m1.a, Math.cos(1), "Rotate empty matix initialization by 1, 'a' should be 'Math.cos(1)'" );
	equals( m1.b, Math.sin(1), "Rotate empty matix initialization by 1, 'b' should be 'Math.sin(1)'" );
	equals( m1.c, -Math.sin(1), "Rotate empty matix initialization by 1, 'c' should be '-Math.sin(1)'" );
	equals( m1.d, Math.cos(1), "Rotate empty matix initialization by 1, 'd' should be 'Math.cos(1)'" );
	equals( m1.tx, 0, "Rotate empty matix initialization by 1, 'tx' should be '0'" );
	equals( m1.ty, 0, "Rotate empty matix initialization by 1, 'ty' should be '0'" );
	//equals( m1.toString(), "1 0 0" + '\n' + "0 1 0", "toString method on concated matrix...initialized default");

});


test("scale", function(){

	var m1 = new Matrix();
	m1.scale(2, 3); // sx = 2, sy = 3
	expect(7);
	equals( m1.a, 2, "Scale empty matix initialization by (2,3), 'a' should be '2'" );
	equals( m1.b, 0, "Scale empty matix initialization by (2,3), 'b' should be '0'" );
	equals( m1.c, 0, "Scale empty matix initialization by (2,3), 'c' should be '0'" );
	equals( m1.d, 3, "Scale empty matix initialization by (2,3), 'd' should be '3'" );
	equals( m1.tx, 0, "Scale empty matix initialization by (2,3), 'tx' should be '0'" );
	equals( m1.ty, 0, "Scale empty matix initialization by (2,3), 'ty' should be '0'" );
	equals( m1.toString(), "2 0 0" + '\n' + "0 3 0", "toString method on scaled matrix");

});

test("Identity", function(){

	/*
	      this.a = 1;
		  this.b = 0;
		  this.c = 0;
		  this.d = 1;
		  this.tx = 0;
		  this.ty = 0;
	*/

	// the result should just be itself, the same.
	var m1 = new Matrix();
	m1.identity();
	expect(7);
	equals( m1.a, 1, "identity of empty initialization, 'a' should be '1'" );
	equals( m1.b, 0, "identity of empty initialization, 'b' should be '0'" );
	equals( m1.c, 0, "identity of empty initialization, 'c' should be '0'" );
	equals( m1.d, 1, "identity of empty initialization, 'd' should be '1'" );
	equals( m1.tx, 0, "identity of empty initialization, 'tx' should be '0'" );
	equals( m1.ty, 0, "identity of empty initialization, 'ty' should be '0'" );
	equals( m1.toString(), "1 0 0" + '\n' + "0 1 0", "toString method on identity matrix...initialized default");

});



test("transformPoint", function(){

	var p1 = new Point();
	var m1 = new Matrix();
	var p2 = m1.transformPoint(p1);
	expect(11);
	equals( p1.x, 0, "Empty point initialized. x value = '0'" );
	equals( p1.y, 0, "Empty point initialized. x value = '0'" );
	equals( m1.a, 1, "Empty matrix initialized, 'a' should be '1'" );
	equals( m1.b, 0, "Empty matrix initialized, 'b' should be '0'" );
	equals( m1.c, 0, "Empty matrix initialized, 'c' should be '0'" );
	equals( m1.d, 1, "Empty matrix initialized, 'd' should be '1'" );
	equals( m1.tx, 0, "Empty matrix initialized, 'tx' should be '0'" );
	equals( m1.ty, 0, "Empty matrix initialized, 'ty' should be '0'" );
	equals( m1.toString(), "1 0 0" + '\n' + "0 1 0", "toString method...initialized default");
	equals( p2.x, 0, "transformed point of p1 on matrix m1, 'x' should be '0'" );
	equals( p2.y, 0, "transformed point of p1 on matrix m1, 'y' should be '0'" );


});



module("Matrix methods on non-default matrices");

// TODO: fix
/*
test("scale", function(){

	var m1 = new Matrix(10, 20, 30, 40, 50, 60);
	m1.scale(2, 3); // sx = 2, sy = 3
	console.log(m1);
	//expect(7);
	equals( m1.a, 20, "Scale Matrix(10, 20, 30, 40, 50, 60) matix initialization by (2,3), 'a' should be '20'" );
	equals( m1.b, 20, "Scale Matrix(10, 20, 30, 40, 50, 60) matix initialization by (2,3), 'b' should be '0'" );
	equals( m1.c, 30, "Scale Matrix(10, 20, 30, 40, 50, 60) matix initialization by (2,3), 'c' should be '0'" );
	equals( m1.d, 120, "Scale Matrix(10, 20, 30, 40, 50, 60) matix initialization by (2,3), 'd' should be '120'" );
	equals( m1.tx, 50, "Scale Matrix(10, 20, 30, 40, 50, 60) matix initialization by (2,3), 'tx' should be '0'" );
	equals( m1.ty, 60, "Scale Matrix(10, 20, 30, 40, 50, 60) matix initialization by (2,3), 'ty' should be '0'" );
	equals( m1.toString(), "20 20 30" + '\n' + "120 50 60", "toString method on scaled matrix");

});
*/


test("transformPoint", function(){

	var p1 = new Point(1, 2);
	var m1 = new Matrix(10, 20, 30, 40, 50, 60);
	var p2 = m1.transformPoint(p1);
	expect(10);
	equals( p1.x, 1, "point1 initialized. x value = '1'" );
	equals( p1.y, 2, "point1 initialized. y value = '2'" );
	equals( m1.a, 10, "Empty matrix initialized, 'a' should be '10'" );
	equals( m1.b, 20, "Empty matrix initialized, 'b' should be '20'" );
	equals( m1.c, 30, "Empty matrix initialized, 'c' should be '30'" );
	equals( m1.d, 40, "Empty matrix initialized, 'd' should be '40'" );
	equals( m1.tx, 50, "Empty matrix initialized, 'tx' should be '50'" );
	equals( m1.ty, 60, "Empty matrix initialized, 'ty' should be '60'" );
	equals( p2.x, 120, "transformed point of p1 on matrix m1, 'x' should be '120'" );
	equals( p2.y, 160, "transformed point of p1 on matrix m1, 'y' should be '160'" );


});


// delta test
var m1 = new Matrix();
//console.log(m1);
m1.translate(100, 0);
//console.log(m1);
m1.scale(3,3);
//console.log(m1);
var p1 = new Point(50,0);
//console.log(p1);
var p2 = m1.deltaTransformPoint(p1);
var p3 = m1.transformPoint(p1);
//console.log(p2);
//console.log(p3);

// createbox test
m1 = new Matrix();
m1.identity();
m1.rotate(Math.PI/4);
m1.scale(2,2);
m1.translate(10,20);
console.log(m1);
m1 = new Matrix();
m1.createBox(2, 2, Math.PI/4, 100, 100);
console.log(m1);

