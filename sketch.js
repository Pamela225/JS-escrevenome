function setup() {
    createCanvas(500, 500);
    background("gray");
  }
  
  function draw() {
      stroke("white")
      fill("pink");
    
      // console.log(mouseIsPressed)
      if(mouseIsPressed){
         rect(mouseX, mouseY, 10, 30)
    }
  
  }
  
  