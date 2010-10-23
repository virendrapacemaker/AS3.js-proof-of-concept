

console.log('----------------------------------------------');


var shape = new Shape();
console.log('Created: ', shape.toString(), shape);

shape.x = 50;
shape.y = 90;
shape.width = 160;
shape.height = 100;
shape.alpha = 0.5;

console.log('Created: ', shape.toString(), shape);


console.log('----------------------------------------------');


var shape2 = new Shape();
console.log('Created: ', shape2.toString(), shape2);

shape2.x = 100;
shape2.y = 100;

console.log('Created: ', shape2.toString(), shape2);
console.log('Other: ', shape.toString(), shape);


console.log('----------------------------------------------');


var sprite = new Sprite();
console.log('Created: ', sprite.toString(), sprite);

sprite.x = 50;
sprite.y = 90;

console.log('Created: ', sprite.toString(), sprite);


console.log('----------------------------------------------');



console.log('adding child to sprite: ', sprite.addChild(shape));

console.log('adding child to sprite: ', sprite.addChild(shape2));

var shape3 = new Shape();
console.log(shape3);

console.log('adding child to sprite: ', sprite.addChild(shape3));
console.log('Sprite now has ' + sprite.numChildren + ' children');
console.log('Sprite.toString:');
console.log(sprite.toString());


