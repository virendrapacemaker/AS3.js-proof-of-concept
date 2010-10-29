
var m1 = new Matrix();

m1.tx = 10;
m1.ty = 10;

trace(m1.toString());

trace('----------------------------------------------');

mi = m1.invert();

trace('invert ', m1.toString(), 'to -> ', mi.toString());

trace('----------------------------------------------');

var m2 = new Matrix();

m2.tx = 10;
m2.ty = 10;

trace(m2.toString());

m1.concat(m2);

trace(m1.toString());

trace('----------------------------------------------');

var m1 = new Matrix();

m1.a = 2;
m1.b = 2;

trace(m1.toString());

var m2 = new Matrix();

m2.c = 1.5;
m2.d = 1.5;

trace(m2.toString());

m1.concat(m2);

trace(m1.toString());

trace('----------------------------------------------');

m1.identity();

trace(m1.toString());

trace('----------------------------------------------');

mi = m2.invert();

trace('invert ', m2.toString(), 'to -> ', mi.toString());

trace('----------------------------------------------');

var m = new Matrix();
m.identity();

var r = 90 * Math.PI / 180; // 90 as radians
m.rotate(r);

trace('Identity Matrix rotated 90 degrees. Should be: ',
    '0 -1 0\n1 0 0',
    'Is: ',
    m.toString()
);

trace('----------------------------------------------');

var m = new Matrix();
m.identity();

m.scale(2, 2);

trace('Scaling identity matrix. Should be: ',
    '?',
    'Is: ',
    m.toString()
);