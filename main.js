const k = kaboom({global:true});

loadRoot("assets/")
loadSprite("cow","cow.png")
loadSprite("butch","butcher.png")
loadSprite("background","background.png")
loadSprite("sumoner","sumoner.png")




const ss = k.scene("s",() =>{
  let player = add([sprite("cow"),origin("center"),area(vec2(-11,-11),vec2(11,11)),pos(320,240)])

});

k.go("s")
