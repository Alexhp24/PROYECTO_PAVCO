import { Node } from "./node.js";

const circleSize = 4;
const triangleSize = 10; // Tamaño fijo del triángulo
const maxLineLength = 50; // Maximum line length in mm

export class Tubo {
  inicio = null;
  fin = null;
  points = [];
  initialMove = true;

  constructor(canvas, color, pipeStart) {
    this.pipeStart = pipeStart;
    this.color = color;
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
  }

  getNextNode(coord) {
    if (this.points.length == 2) {
      if (coord instanceof Node) {
        this.points.pop();
        this.points.push(coord);
        this.fin = this.points[1];
      }
      return null;
    }

    let node;
    if (coord instanceof Node) {
      node = coord;
    } else {
      node = new Node(coord, this.canvas, this.color);
    }

    this.points.push(node);

    this.inicio = this.points[0];
    this.fin = this.points[1];

    return node;
  }

  done() {
    /*     this.points.pop();
    return this.points.length > 0; */
    return this.points.length == 2;
  }

  canBeDone() {
    return false;
  }

  hitNode(mouse) {
    return this.points.find((point) => {
      const dist = Math.hypot(mouse.x - point.x, mouse.y - point.y);
      return dist < 2 * circleSize;
    });
  }

  drawTriangle(x, y, size) {
    const height = (size * Math.sqrt(3)) / 2;
    this.ctx.beginPath();
    this.ctx.moveTo(x, y - height / 2);
    this.ctx.lineTo(x - size / 2, y + height / 2);
    this.ctx.lineTo(x + size / 2, y + height / 2);
    this.ctx.closePath();
    this.ctx.strokeStyle = this.color;
    this.ctx.lineWidth = 1;
    this.ctx.stroke();
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  }

  drawLine(start, end) {
    this.ctx.beginPath();
    this.ctx.moveTo(start.x, start.y);
    this.ctx.lineTo(end.x, end.y);
    this.ctx.strokeStyle = this.color;
    this.ctx.lineWidth = 1;
    this.ctx.stroke();
    this.ctx.closePath();
  }

  draw() {
    let index;
    for (index = 0; index < this.points.length - 1; index++) {
      const label = "C" + (index + this.pipeStart);
      const start = this.points[index];
      const end = this.points[index + 1];
      const midX = (start.x + end.x) / 2;
      const midY = (start.y + end.y) / 2;
      this.drawTriangle(midX, midY, triangleSize);
      this.drawLine(start, end);
    }
  }
}
