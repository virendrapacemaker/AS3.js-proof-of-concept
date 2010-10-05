var r = new Rectangle(0, 0, 10, -20);

console.log('Rectangle:', r.toString());

r.width = 20;

console.log('Rectangle:', r.toString());

console.log('equals ? ',
  r.equals(new Rectangle(0, 0, 10, -20)),
  ' [expect false]');
  
console.log('equals ? ',
  r.equals(new Rectangle(0, 0, 20, -20)),
  ' [expect true]');

var  inside = new Rectangle(1, -1, 18, -18);

console.log(r.toString());
console.log(inside.toString());

console.log('contains {10,-10}? ', r.contains(10, -10));
console.log('contains {100,-10}? ', r.contains(100, -10));
console.log('contains {10,-100}? ', r.contains(10, -100));

console.log('is ' + inside.toString() + ' inside of ' + r.toString() + '? ', r.containsRect(inside)), '[expect true]';

console.log('will offset ' + inside.toString() + ' by 10');

inside.offset(10, -10);

console.log('offset  ', inside.toString());

console.log('will offset ' + inside.toString() + ' to {20,20}');

inside.offsetPoint(new Point(20, -20));

console.log('offset  ', inside.toString());

console.log('-----------------------------------------');
console.log('Sizing');
console.log('-----------------------------------------');
console.log('before: \n', r.toString());

r.top = -10;
console.log('set top to -10. \n', r.toString());

r.bottom = -40;
console.log('set bottom to -40. \n', r.toString());

r.left = 10;
console.log('set left to 10 \n', r.toString());

r.right = 50;
console.log('set right to 50. \n', r.toString());

var br = new Point(100, -120);
r.bottomRight = br;
console.log('set bottomRight to ' + br.toString() + '. \n', r.toString());

var tl = new Point(50, -60);
r.topLeft = tl;
console.log('set topLeft to ' + tl.toString() + '. \n', r.toString());