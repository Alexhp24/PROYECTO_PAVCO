import { Node } from "./node.js";

const circleSize = 4;
const triangleSize = 10; // Tamaño fijo del triángulo
const maxLineLength = 50; // Maximum line length in mm
const mmToPx = 3.77953; // Conversion factor from mm to pixels

export class Tubo {
  inicio = null;
  fin = null;
  points = [];
  initialMove = true;
  lines = []; // Store lines to manage deletion

  constructor(canvas, color, pipeStart) {
    this.pipeStart = pipeStart;
    this.color = color;
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");

    // Add event listener for right-click
    canvas.addEventListener("contextmenu", (event) => this.handleRightClick(event));
  }

  getNextNode(coord) {
    if (this.points.length == 2) {
      return null;
    }

    let node;
    if (coord instanceof Node) {
      node = coord;
    } else {
      node = new Node(coord, this.canvas, this.color);
    }

    this.points.push(node);

    if (this.points.length === 2) {
      this.lines.push({ start: this.points[0], end: this.points[1] });
    }

    this.inicio = this.points[0];
    this.fin = this.points[1];

    return node;
  }

  done() {
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

  adjustEndPoint(start, end) {
    const dx = end.x - start.x;
    const dy = end.y - start.y;
    const distance = Math.hypot(dx, dy);
    const maxDistancePx = maxLineLength * mmToPx;

    if (distance > maxDistancePx) {
      const ratio = maxDistancePx / distance;
      end.x = start.x + dx * ratio;
      end.y = start.y + dy * ratio;
    }
  }

  snapToAngle(start, end) {
    const dx = end.x - start.x;
    const dy = end.y - start.y;
    const angle = Math.atan2(dy, dx);
    const snapAngle = Math.round(angle / (Math.PI / 4)) * (Math.PI / 4);

    const distance = Math.hypot(dx, dy);
    end.x = start.x + distance * Math.cos(snapAngle);
    end.y = start.y + distance * Math.sin(snapAngle);
  }

  drawLine(start, end) {
    this.adjustEndPoint(start, end);
    this.snapToAngle(start, end);

    this.ctx.beginPath();
    this.ctx.moveTo(start.x, start.y);
    this.ctx.lineTo(end.x, end.y);
    this.ctx.strokeStyle = this.color;
    this.ctx.lineWidth = 1;
    this.ctx.stroke();
    this.ctx.closePath();
  }

  draw() {
    // Clear the canvas before redrawing
   /* this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);*/

    this.lines.forEach(({ start, end }) => {
      const midX = (start.x + end.x) / 2;
      const midY = (start.y + end.y) / 2;
      this.drawLine(start, end);
      this.drawTriangle(midX, midY, triangleSize);
    });
  }

  handleRightClick(event) {
    event.preventDefault();
    const rect = this.canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Find and remove the line near the clicked position
    for (let i = 0; i < this.lines.length; i++) {
      const { start, end } = this.lines[i];
      const distanceToLine = this.pointToLineDistance(mouseX, mouseY, start, end);
      if (distanceToLine < 2 * circleSize) {
        this.lines.splice(i, 1);
        this.draw(); // Redraw without the deleted line
        break;
      }
    }
  }

  pointToLineDistance(px, py, start, end) {
    const A = px - start.x;
    const B = py - start.y;
    const C = end.x - start.x;
    const D = end.y - start.y;

    const dot = A * C + B * D;
    const len_sq = C * C + D * D;
    const param = dot / len_sq;

    let xx, yy;

    if (param < 0 || (start.x === end.x && start.y === end.y)) {
      xx = start.x;
      yy = start.y;
    } else if (param > 1) {
      xx = end.x;
      yy = end.y;
    } else {
      xx = start.x + param * C;
      yy = start.y + param * D;
    }

    const dx = px - xx;
    const dy = py - yy;
    return Math.hypot(dx, dy);
  }
}

/*
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
    return this.points.length > 0; *
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
*/