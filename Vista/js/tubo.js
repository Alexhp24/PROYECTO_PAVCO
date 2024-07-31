import { Node } from "./node.js";

const circleSize = 4;
const triangleSize = 10; // Tamaño fijo del triángulo
const maxLineLength = 125 * 3.77953; // Maximum line length in pixels (50 mm convertido a píxeles)

export class Tubo {
  inicio = null;
  fin = null;
  points = [];
  initialMove = true;

  constructor(canvas, color, pipeStart, nombre) {
    this.pipeStart = pipeStart;
    this.nombre = nombre;
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
    return this.points.length == 2;
  }

  canBeDone() {
    return false;
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

  drawLine(start, end, restrictAngle = false) {
    if (restrictAngle) {
      const dx = end.x - start.x;
      const dy = end.y - start.y;
      const angle = Math.atan2(dy, dx);
      const angleDeg = (angle * 180) / Math.PI;

      if (angleDeg % 45 !== 0 && angleDeg % 90 !== 0) {
        const distance = Math.hypot(dx, dy);
        const closest45 = Math.round(angle / (Math.PI / 4)) * (Math.PI / 4);
        end.x = start.x + distance * Math.cos(closest45);
        end.y = start.y + distance * Math.sin(closest45);
      }
    }

    this.ctx.beginPath();
    this.ctx.moveTo(start.x, start.y);
    this.ctx.lineTo(end.x, end.y);
    this.ctx.strokeStyle = this.color;
    this.ctx.lineWidth = 1.5;
    this.ctx.stroke();
    this.ctx.closePath();

    const midX = (start.x + end.x) / 2;
    const midY = (start.y + end.y) / 2;
    this.ctx.font = '7.5px Arial';
    this.ctx.fillStyle = "black";
    this.ctx.fillText(this.nombre, midX, midY);
  }

  draw() {
    for (let index = 0; index < this.points.length - 1; index++) {
      const start = this.points[index];
      let end = this.points[index + 1];

      const dist = Math.hypot(end.x - start.x, end.y - start.y);

      if (dist > maxLineLength) {
        const ratio = maxLineLength / dist;
        end.x = start.x + (end.x - start.x) * ratio;
        end.y = start.y + (end.y - start.y) * ratio;
      }

      const restrictAngle = (index === this.points.length - 2);

      const midX = (start.x + end.x) / 2;
      const midY = (start.y + end.y) / 2;
      this.drawTriangle(midX, midY, triangleSize);
      this.drawLine(start, end, restrictAngle);
    }
  }

  hitNode(coord) {
    return this.isPointOnLineSegment(coord, this.inicio, this.fin);
  }

  isPointOnLineSegment(point, start, end) {
    const threshold = 5; // Allowable distance in pixels to be considered "on the line"
    const distToStart = Math.hypot(point.x - start.x, point.y - start.y);
    const distToEnd = Math.hypot(point.x - end.x, point.y - end.y);
    const lineLength = Math.hypot(end.x - start.x, end.y - start.y);

    // Check if the point is within the threshold distance of the line segment
    return (
      distToStart + distToEnd >= lineLength - threshold &&
      distToStart + distToEnd <= lineLength + threshold
    );
  }
}

/*import { Node } from "./node.js";

const circleSize = 4;
const triangleSize = 10; // Tamaño fijo del triángulo
const maxLineLength = 125 * 3.77953; // Maximum line length in pixels (50 mm convertido a píxeles)

export class Tubo {
  inicio = null;
  fin = null;
  points = [];
  initialMove = true;

  constructor(canvas, color, pipeStart, nombre) {
    this.pipeStart = pipeStart;
    this.nombre = nombre;
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
    return this.points.length == 2;
  }

  canBeDone() {
    return false;
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
    this.ctx.lineWidth = 1.5;
    this.ctx.stroke();
    this.ctx.closePath();

    const midX = (start.x + end.x) / 2;
    const midY = (start.y + end.y) / 2;
    this.ctx.font = '7.5px Arial';
    this.ctx.fillStyle = "black";
    this.ctx.fillText(this.nombre, midX, midY);
  }

  adjustToNearestAngle(start, end) {
    const dx = end.x - start.x;
    const dy = end.y - start.y;
    const angle = Math.atan2(dy, dx);

    // Angles in radians for 45° and 90°
    const angles = [
      0,
      Math.PI / 4,
      Math.PI / 2,
      (3 * Math.PI) / 4,
      Math.PI,
      (-3 * Math.PI) / 4,
      -Math.PI / 2,
      -Math.PI / 4,
    ];

    let closestAngle = angles[0];
    let minDifference = Math.abs(angle - angles[0]);

    for (let i = 1; i < angles.length; i++) {
      const difference = Math.abs(angle - angles[i]);
      if (difference < minDifference) {
        minDifference = difference;
        closestAngle = angles[i];
      }
    }

    const length = Math.hypot(dx, dy);
    const adjustedX = start.x + length * Math.cos(closestAngle);
    const adjustedY = start.y + length * Math.sin(closestAngle);

    return { x: adjustedX, y: adjustedY };
  }

  draw() {
    let index;
    for (index = 0; index < this.points.length - 1; index++) {
      const start = this.points[index];
      let end = this.points[index + 1];
      const adjustedEnd = this.adjustToNearestAngle(start, end);

      const dist = Math.hypot(adjustedEnd.x - start.x, adjustedEnd.y - start.y);

      if (dist > maxLineLength) {
        const ratio = maxLineLength / dist;
        adjustedEnd.x = start.x + (adjustedEnd.x - start.x) * ratio;
        adjustedEnd.y = start.y + (adjustedEnd.y - start.y) * ratio;
      }

      end.x = adjustedEnd.x;
      end.y = adjustedEnd.y;

      /*const label = "C" + (index + this.pipeStart);*
      const midX = (start.x + end.x) / 2;
      const midY = (start.y + end.y) / 2;
      this.drawTriangle(midX, midY, triangleSize);
      this.drawLine(start, end);
    }
  }

  hitNode(coord) {
    return this.isPointOnLineSegment(coord, this.inicio, this.fin);
  }

  isPointOnLineSegment(point, start, end) {
    const threshold = 5; // Allowable distance in pixels to be considered "on the line"
    const distToStart = Math.hypot(point.x - start.x, point.y - start.y);
    const distToEnd = Math.hypot(point.x - end.x, point.y - end.y);
    const lineLength = Math.hypot(end.x - start.x, end.y - start.y);
 
    // Check if the point is within the threshold distance of the line segment
    return (
      distToStart + distToEnd >= lineLength - threshold &&
      distToStart + distToEnd <= lineLength + threshold
    );
  }
}
*/