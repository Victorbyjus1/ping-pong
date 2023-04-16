var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["88cda8d6-73b2-4aa5-b92c-05597e8f32d4","0d4bd282-06d3-401c-9259-7881c9b93e39","df458709-507b-4f33-8b7d-34ad35e0fda8"],"propsByKey":{"88cda8d6-73b2-4aa5-b92c-05597e8f32d4":{"name":"bola","sourceUrl":"assets/api/v1/animation-library/gamelab/KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG/category_sports/soccer_bw.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG/category_sports/soccer_bw.png"},"0d4bd282-06d3-401c-9259-7881c9b93e39":{"name":"joão","sourceUrl":"assets/api/v1/animation-library/gamelab/cOMMGOS7.GHLbPYLMJ2K.16OdJi99vDs/category_people/grey_shirt_hands_in_pockets.png","frameSize":{"x":124,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"cOMMGOS7.GHLbPYLMJ2K.16OdJi99vDs","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":124,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/cOMMGOS7.GHLbPYLMJ2K.16OdJi99vDs/category_people/grey_shirt_hands_in_pockets.png"},"df458709-507b-4f33-8b7d-34ad35e0fda8":{"name":"robo","sourceUrl":"assets/api/v1/animation-library/gamelab/TQLQS4N5N65EoHWE_QQsm5sJb90US0MD/category_robots/robot_03.png","frameSize":{"x":214,"y":396},"frameCount":1,"looping":true,"frameDelay":2,"version":"TQLQS4N5N65EoHWE_QQsm5sJb90US0MD","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":214,"y":396},"rootRelativePath":"assets/api/v1/animation-library/gamelab/TQLQS4N5N65EoHWE_QQsm5sJb90US0MD/category_robots/robot_03.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var raquetejogador  = createSprite(390, 200,10,70);
var raquetecomputador = createSprite(10, 200,10,70);
var bola = createSprite(200, 200,10,10);


raquetejogador.shapeColor = "green";
raquetecomputador.shapeColor = "red";
bola.shapeColor = "blue";

bola.velocityY = 0;
bola.velocityX = 0;

bola.setAnimation("bola");
raquetejogador.setAnimation("joão");
raquetecomputador.setAnimation("robo");

bola.scale = 0.1
raquetejogador.scale =  0.3
raquetecomputador.scale = 0.3


createEdgeSprites();

function draw() {
background("white");
if (bola.isTouching(raquetejogador)||bola.isTouching(raquetecomputador)) {
playSound("assets/category_hits/8bit_splat.mp3", false);
}
    
raquetecomputador.y = bola.y;

bola.bounceOff(raquetecomputador);
bola.bounceOff(raquetejogador);
bola.bounceOff(topEdge);
bola.bounceOff(bottomEdge);
raquetejogador.bounceOff(edges);
raquetecomputador.bounceOff(edges);


 if (keyDown("up")) {
 raquetejogador.y = raquetejogador.y -10;  
 }
 if (keyDown("down")) {
  raquetejogador.y = raquetejogador.y +10; 
 }
 if (keyDown("space")) {
   bola.velocityY = 2;
bola.velocityX = 5;
 }
 
 resetarBola ();
 Rede ();
  drawSprites();
}
  function Rede() {
   for (var i = 0; i <= 400; i = i +20) {
line(200, i, 200, 10 + i );
        
  } 
  }
  function resetarBola() {
   if (bola.x < 0 || bola.x > 400) {
   bola.x = 200;
   bola.y = 200;
   bola.velocityX = 0;
   bola.velocityY = 0;
  }
  
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
