var canvas=document.getElementById("canvawava");
var ctx=canvas.getContext("2d");
var head=new Image();
var body=new Image();
var food=new Image();
head.src="snake_head.png"
body.src="snake_tail.png"
food.src="snake_food.png"
function draw(){
    ctx.drawImage(head,200,200,50,50)
    ctx.drawImage(body,300,300,50,50)
    ctx.drawImage(food,400,400,50,50)
}
draw()