const k = kaboom({global:true,width:640,height:480,stretch:false});

loadRoot("assets/")
loadSprite("cow","cow.png")
loadSprite("butch","butcher.png")
loadSprite("background","background.png")
loadSprite("sumoner","sumoner.png")




const ss = k.scene("s",() =>{
  let background = add([sprite("background"),pos(0,0)])
  let player = add([sprite("cow"),origin("center"),area(vec2(-11,-11),vec2(11,11)),pos(320,240)])

});

k.go("s")
