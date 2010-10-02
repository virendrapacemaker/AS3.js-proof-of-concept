var r = new Rectangle(0, 0, 10, 20);

console.log('Rectangle:', r.toString());

r.width = 20;

console.log('Rectangle:', r.toString());

console.log('equals ? ', r.equals(new Rectangle(0, 0, 10, 20)), ' [expect false]');
console.log('equals ? ', r.equals(new Rectangle(0, 0, 20, 20)), ' [expect true]');

var  inside = new Rectangle(1, 1, 18, 18);

console.log(r.toString());
console.log(inside.toString());

console.log('inside ? ', r.containsRect(inside)), '[expect true]';

console.log('will offset ' + inside.toString() + ' by 10');

inside.offset(10, 10);

console.log('offset  ', inside.toString());

console.log('will offset ' + inside.toString() + ' to {20,20}');

inside.offsetPoint(new Point(20, 20));

console.log('offset  ', inside.toString());