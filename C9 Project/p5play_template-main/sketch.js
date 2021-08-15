function setup() {
  createCanvas(400,400);

  btn_red = createButton("Red")
  btn_red.position(150,100)
  btn_red.mousePressed(red_bg);

  btn_green = createButton("Green")
  btn_green.position(150,300)
  btn_green.mousePressed(green_bg)

  background(30);
}

function draw() 
{
}

function red_bg()
{
  background(255, 0, 0)
}

function green_bg()
{
  background(0, 255, 0)
}