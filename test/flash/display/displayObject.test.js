

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
console.log('Sprite now has ' + sprite.numChildren + ' children');


console.log('----------------------------------------------');



var sprite2 = new Sprite();
sprite2.x = 99;
sprite2.y = 99;
sprite2.width = 10;
sprite2.height = 10;

console.log('Created: ', sprite2.toString(), sprite2);
console.log('Sprite2 now has ' + sprite2.numChildren + ' children');


console.log('----------------------------------------------');

console.log('Do the display lists equal eachother?');
console.log('==', sprite2.displayList_ == sprite.displayList_);
console.log('===', sprite2.displayList_ === sprite.displayList_);


console.log('----------------------------------------------');



console.log('adding child to sprite: ', sprite.addChild(shape));

console.log('adding child to sprite: ', sprite.addChild(shape2));

var shape3 = new Shape();
console.log('Created: ', shape3);

console.log('adding child to sprite: ', sprite.addChild(shape3));
console.log('Sprite now has ' + sprite.numChildren + ' children');
console.log('Sprite.toString:');
console.log(sprite.toString());


console.log('----------------------------------------------');


var shape4 = new Shape();
console.log('Created: ', shape4.toString(), shape4);

shape4.x = 100;
shape4.y = 100;

console.log('adding child to sprite: ', sprite2.addChild(shape4));


console.log('----------------------------------------------');

console.log('adding child to sprite: ', sprite.addChild(sprite2));
console.log('Sprite now has ' + sprite.numChildren + ' children');
console.log('Sprite.toString:');
console.log(sprite.toString());

