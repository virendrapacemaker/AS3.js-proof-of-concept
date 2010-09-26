

var o = new Object();

o.stuff = 'milk';
o.arr = {'Sword':true, 'swashbuckle':false};

console.log(o.toString());    



var dispatcher = new EventDispatcher(o);
dispatcher.addEventlistener('squish', function (event) {
    console.log('listener called! this = ', this, 'event: ', event.toString());
});

console.log(dispatcher);



var monkeys = new Event('squish');

console.log(monkeys.toString());

dispatcher.dispatchEvent(monkeys);



$(document).ready( function() {

    $(this).click( function(e) {
    
        var monkeys = new Event('squish');
        dispatcher.dispatchEvent(monkeys);
    
    });

});