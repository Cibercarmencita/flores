class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;     
  }
  
  changeColor(bright) {
   this.brightness = bright;
  }
  
  contains(px, py) {
  let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
    return true;
      } else {
       return false;
      }
  }
  
  mover() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  mostrar() {
    image(img, this.x, this.y, this.r, this.r);
    image(img01, this.x -25 , this.y-25, this.r, this.r);
  }

}