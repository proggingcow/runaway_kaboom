const k = kaboom({global:true,width:640,height:480,stretch:false});

loadRoot("assets/")
loadSprite("cow","cow.png")
loadSprite("butch","butcher.png")
loadSprite("background","background.png")
loadSprite("sumoner","sumoner.png")



function mouseFollow(){
    return{
        add(){
            this.action(()=>{
                let mp = mouseWorldPos();
                if (this.pos.x < mp.x ) this.pos.x += 10* dt();
                if (this.pos.y < mp.y ) this.pos.y += 10* dt();
                if (this.pos.x > mp.x ) this.pos.x -= 10* dt();
                if (this.pos.y > mp.y ) this.pos.y -= 10* dt();
            })
        }
    }
}


const ss = k.scene("s",() =>{
  let background = add([sprite("background"),pos(0,0)])
  let player = add([sprite("cow"),pos(320,240),origin("center"),area(vec2(-11,-11),vec2(11,11)),mouseFollow()])
  let sumoner = add([sprite("sumoner"),scale(1.5,1.5),pos(320,0),origin("center"),z(2)])
});

k.go("s")

