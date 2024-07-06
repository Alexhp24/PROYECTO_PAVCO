const circleSize = 7.5;
export class Node {
  x = 0;
  y = 0;
  constructor(coord, canvas, color) {
    this.x = coord.x;
    this.y = coord.y;
    this.color = color;
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
  }
  hitNode(mouse) {
    const dist = Math.hypot(mouse.x - this.x, mouse.y - this.y);
    return dist < 2 * circleSize;
  }
  drawCircle(x, y, label) {
    this.ctx.beginPath();
    this.ctx.arc(x, y, circleSize, 0, Math.PI * 2);
    this.ctx.strokeStyle = this.color;
    this.ctx.lineWidth = 1;
    this.ctx.stroke();
    this.ctx.closePath();

    this.ctx.font = "7px Arial";
    this.ctx.fillStyle = "black";
    this.ctx.fillText(label, x + circleSize + 2, y - circleSize - 2);
  }
  draw() {
    this.drawCircle(this.x, this.y);
  }
}
