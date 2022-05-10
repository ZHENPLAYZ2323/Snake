//drawing the body
//moving the apple
//eating the apple
//getting longer

var head=new Image();
var body=new Image();
var food=new Image();
var snake=[[0,4]]
var direction="right"
var apple=[5,3]
head.src="snake_head.png"
body.src="snake_tail.png"
food.src="snake_food.png"
function draw(){
    var canvas=document.getElementById("canvawava");
    var ctx=canvas.getContext("2d");
    //draw the head
    var headx=snake[0][0]*50
    var heady=snake[0][1]*50
    ctx.drawImage(head,headx,heady,50,50)
    ctx.drawImage(body,300,300,50,50)
    //drawtheapple
    var applex=apple[0]*50
    var appley=apple[1]*50
    ctx.drawImage(food,applex,appley,50,50)
}
window.addEventListener("load",draw)
function movesnake(){
    var headx=snake[0][0]
    var heady=snake[0][1]
    if(direction=="right"){
snake.unshift([headx+1,heady])
    }
    if(direction=="left"){
snake.unshift([headx-1,heady])
    }
    if(direction=="up"){
snake.unshift([headx,heady-1])
    }
    if(direction=="down"){
snake.unshift([headx,heady+1])
    }
    draw()
}
var game=window.setInterval(movesnake,250)
window.addEventListener("keydown",changedirection)
function changedirection(event){
    if(event.keyCode==39){
direction="right"
    }
    if(event.keyCode==37){
direction="left"
    }
    if(event.keyCode==38){
direction="up"
    }
    if(event.keyCode==40){
direction="down"
    }
}