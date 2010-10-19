// Let's create our Stage object
// This is code that will never be used by a normal user
// since there is only one Stage, and it's auto-created
// when the flash plugin is created.

window.onload = function() {
  console.log('window.onload');
  //setTimeout(init, 500);
  init();
}

function init() {

  console.log('init');

/*
  var elem = document.getElementById('stageCanvas');


  if (elem && elem.getContext) {
    // Get the 2d context.
    // Remember: you can only initialize one context per element.
    var context = elem.getContext('2d');
    var canvas_ = elem;

    if (context) {
      // You are done! Now you can draw your first rectangle.
      // You only need to provide the (x,y) coordinates, followed by the width and
      // height dimensions.
      context.fillRect(0, 0, 150, 100);
    }

  }
  */

  var S = new Stage('stageCanvas');
  console.log('Stage object: ', S);

  console.log('Stage.width = ' + S.width);
  S.width = 500;
  console.log('Stage.width = ' + S.width);

  console.log('Stage.height = ' + S.height);
  S.height = 200;
  console.log('Stage.height = ' + S.height);

}