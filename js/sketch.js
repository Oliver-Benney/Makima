//global variables
var dogX,dogY,dogHeight,dogWidth;

function setup() {
    var canvas = createCanvas(2000, 1600);
    canvas.parent("p5container");
    background(233,227,184);
    
      //beams
    fill(129,88,60)
    rect(100,0,30,1600)
    rect(300,0,30,1600)
    rect(500,0,30,1600)
    rect(700,0,30,1600)
    rect(900,0,30,1600)
    rect(1100,0,30,1600)
    rect(1300,0,30,1600)
    rect(1500,0,30,1600)
    rect(1700,0,30,1600)
    rect(1900,0,30,1600)
    rect(0,100,2000,30)
    rect(0,250,2000,30)
    rect(0,400,2000,30)
    rect(0,550,2000,30)
    rect(0,700,2000,30)
    rect(0,850,2000,30)
    rect(0,1000,2000,30)
    rect(0,1150,2000,30)
    rect(0,1300,2000,30)
    
    //floor
    fill(181,131,97)
    rect(0,1420,2000,180)
}

function draw() {
 
  //vars
  dogX= width/2;
  dogY= height/2;
  dogWidth=180;
  dogHeight=180;
  
  //head
  fill(254,230,227)
  rect(0,0,600,600)
  
  //left eye
  fill(255)
  quad(50,210,250,210,190,300,80,310)
  fill(0)
  ellipse(155,250,70)
  fill(255,153,51)
  ellipse(155,250,65)
  fill(255,102,0)
  ellipse(155,250,55)
  fill(255,153,51)
  ellipse(155,250,48)
  fill(255,102,0)
  ellipse(155,250,38)
  fill(255,153,51)
  ellipse(155,250,31)
  fill(255, 153, 51)
  ellipse(155,250,21)
  fill(255,102,0)
  ellipse(155,250,14)
  fill(255,153,153)
  triangle(50,210,80,310,45,215)
  fill(255,153,153)
  triangle(190,300,215,300,207,275)
  fill(0)
  quad(35,210,180,190,260,210,100,210)
  fill(0)
  line(65,195,125,175)
  line(130,174,140,173)
  line(145,172,260,200)
  line(210,187,257,189)
  fill(79,47,3)
  quad(50,90,230,110,260,120)
  
  //right eye
  fill(255)
  quad(550,210,350,210,410,300,520,310)
  fill(0)
  ellipse(445,250,70)
  fill(255,153,51)
  ellipse(445,250,65)
  fill(255,102,0)
  ellipse(445,250,55)
  fill(255,153,51)
  ellipse(445,250,48)
  fill(255,102,0)
  ellipse(445,250,38)
  fill(255,153,51)
  ellipse(445,250,31)
  fill(255, 153, 51)
  ellipse(445,250,21)
  fill(255,102,0)
  ellipse(445,250,14)
  fill(255,153,153)
  triangle(550,210,520,310,555,215)
  fill(255,153,153)
  triangle(410,300,385,300,393,275)
  fill(0)
  quad(565,210,420,190,340,210,500,210)
  fill(0)
  line(535,195,475,175)
  line(470,174,460,173)
  line(455,172,340,200)
  fill(79,47,3)
  quad(550,90,370,110,340,120)
  
  //left hair
  fill(255,80,80)
  quad(0,0,20,0,19,190,0,180)  
  quad(20,0,60,0,19,190,19,190)  
  triangle(60,0,80,0,74,190)
  triangle(80,0,85,0,82,195)
  quad(85,0,120,0,87,187,84,190)  
  quad(120,0,135,0,136,172,115,100)  
  triangle(135,0,200,0,180,195)
  quad(180,0,190,0,165,185,160,180)
  triangle(210,0,260,0,270,195)
  triangle(210,0,220,0,195,170)
  triangle(220,0,240,0,220,165)
  quad(260,0,265,0,285,145,280,140)
  
  //right hair
  quad(340,0,335,0,300,125,305,115)
  triangle(370,0,350,0,380,165)
  triangle(370,0,380,0,430,165)
  quad(380,0,400,0,460,170,435,160)
  triangle(400,0,410,0,475,165)
  triangle(410,0,420,0,495,145)
  triangle(410,0,600,0,600,140)
  quad(460,0,500,0,495,160,480,170)
  triangle(500,0,520,0,530,140)
  triangle(520,0,535,0,525,155)
  triangle(535,0,570,0,550,165)
  triangle(570,0,590,0,570,190)
  triangle(590,0,600,0,600,200)
  
  //nose 
  line(260,400,270,400)
  line(340,400,330,400)
  
  //mouth
  line(200,530,400,530)
  
  //torso 
  fill(255)
  quad(270,600,330,600,330,900,270,900)
  fill(0)
  quad(290,610,310,610,305,625,295,625)
  triangle(296,625,304,625,300,730)
  
  //arms
  fill(255)
  quad(240,650,270,650,270,900,240,900)
  quad(360,650,330,650,330,900,360,900)
  
  //hands
  fill(254,230,227)
  quad(240,900,270,900,270,910,240,910)
  quad(330,900,360,900,360,910,330,910)
  
  //neck
  fill(254,230,227)
  quad(270,600,330,600,330,610,270,610)
  
  
   //legs 
  fill(0)
  quad(330,900,270,900,270,1400,330,1400)
  fill(254,230,227)
  quad(270,1400,330,1400,330,1410,270,1410)
  fill(40)
  quad(298,1000,302,1000,302,1419,298,1419)
  
  //shoes
  fill(0)  
  quad(270,1410,330,1410,330,1420,270,1420)
  
  //dog
  //tail
  fill(249,144,75)
  triangle(mouseX+700,mouseY+330,mouseX+720,mouseY+350,mouseX+800,mouseY+200)
  //left leg
  ellipse(mouseX+350,mouseY+560,dogHeight-150,dogWidth-60)
  //middle left
  ellipse(mouseX+380,mouseY+560,dogHeight-150,dogWidth-60)
  //middle right
  ellipse(mouseX+640,mouseY+560,dogHeight-150,dogWidth-60)
  //right leg
  ellipse(mouseX+670,mouseY+560,dogHeight-150,dogWidth-60)
  //body
  ellipse(mouseX+500,mouseY+400,dogHeight+320,dogWidth+120)
  //eye
  fill(255)
  ellipse(mouseX+350,mouseY+350,dogWidth-100)
  //pupil
  fill(0)
  ellipse(mouseX+340,mouseY+340,dogWidth-130)
  //left line
  line(mouseX+289,mouseY+480,mouseX+320,mouseY+480)
  //right line
  line(mouseX+320,mouseY+480,mouseX+330,mouseY+450)
  //dark rectangle
  fill(100)
  quad(mouseX+287,mouseY+338,mouseX+368,mouseY+289,mouseX+200,mouseY+94,mouseX+146,mouseY+150)
  //light rectangle
  fill(200)
  quad(mouseX+289,mouseY+330,mouseX+360,mouseY+285,mouseX+200,mouseY+100,mouseX+150,mouseY+150)
  
}