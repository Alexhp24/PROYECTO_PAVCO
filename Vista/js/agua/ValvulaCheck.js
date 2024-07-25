import { SingleShapeBase } from "../single_shape_base.js";

const lineLength = 40; // Longitud de la línea en mm
const largerCircleRadius = 8; // Radio del círculo más grande en mm
const triangleSideLength = 9.5; // Longitud de cada lado del triángulo en mm
const verticalLineLength = 10; // Longitud de las líneas verticales en mm

export class ValvulaCheck extends SingleShapeBase {
  constructor(ctx, color, Count) {
    super(ctx, color);
    this.label = `V_B${Count}`;
  }

  drawLineWithTriangle(x, y) {
    this.ctx.save();
    this.ctx.translate(x, y);
    this.ctx.rotate((this.rotation * Math.PI) / 180);

    // Dibujar la línea principal
    const startX = -lineLength / 2;
    const endX = lineLength / 2;

    this.ctx.beginPath();
    this.ctx.moveTo(startX, 0);
    this.ctx.lineTo(endX, 0);
    this.ctx.lineWidth = 1.5;
    this.ctx.strokeStyle = this.color;
    this.ctx.stroke();

    // Calcular el centro de la línea
    const centerX = (startX + endX) / 2;
    const centerY = 0;

    // Calcular vértices del triángulo
    const triangleVertices = [
      { x: centerX - triangleSideLength / 2, y: -triangleSideLength / 2 }, // Punto superior derecho
      { x: centerX + triangleSideLength / 2, y: 0 }, // Punto de la punta del triángulo
      { x: centerX - triangleSideLength / 2, y: triangleSideLength / 2 }, // Punto inferior derecho
    ];

    // Dibujar el triángulo
    this.ctx.beginPath();
    this.ctx.moveTo(triangleVertices[0].x, triangleVertices[0].y);
    this.ctx.lineTo(triangleVertices[1].x, triangleVertices[1].y);
    this.ctx.lineTo(triangleVertices[2].x, triangleVertices[2].y);
    this.ctx.closePath();
    this.ctx.fillStyle = "#00FF00"; // Color de relleno verde para el triángulo
    this.ctx.fill();

    // Dibujar el borde del círculo más grande
    this.ctx.beginPath();
    this.ctx.arc(centerX, centerY, largerCircleRadius, 0, 2 * Math.PI, false);
    this.ctx.lineWidth = 1.5;
    this.ctx.strokeStyle = "#00FF00"; // Color de borde verde para el círculo más grande
    this.ctx.stroke();

    // Dibujar las líneas verticales
    const verticalLineStartXLeft = centerX - largerCircleRadius - 5;
    const verticalLineStartYLeft = centerY - verticalLineLength / 2;
    const verticalLineEndXLeft = verticalLineStartXLeft;
    const verticalLineEndYLeft = centerY + verticalLineLength / 2;

    this.ctx.beginPath();
    this.ctx.moveTo(verticalLineStartXLeft, verticalLineStartYLeft);
    this.ctx.lineTo(verticalLineEndXLeft, verticalLineEndYLeft);
    this.ctx.lineWidth = 1.5;
    this.ctx.strokeStyle = "#00FF00"; // Color azul para la línea vertical izquierda
    this.ctx.stroke();

    const verticalLineStartXRight = centerX + largerCircleRadius + 5;
    const verticalLineStartYRight = centerY - verticalLineLength / 2;
    const verticalLineEndXRight = verticalLineStartXRight;
    const verticalLineEndYRight = centerY + verticalLineLength / 2;

    this.ctx.beginPath();
    this.ctx.moveTo(verticalLineStartXRight, verticalLineStartYRight);
    this.ctx.lineTo(verticalLineEndXRight, verticalLineEndYRight);
    this.ctx.lineWidth = 1.5;
    this.ctx.strokeStyle = "#00FF00"; // Color azul para la línea vertical derecha
    this.ctx.stroke();

    // Dibujar la etiqueta del codo
    this.ctx.font = "10px Arial";
    this.ctx.fillText(this.label, endX + 10, -10);

    this.ctx.restore();
  }

  draw() {
    this.drawLineWithTriangle(this.lastPoint.x, this.lastPoint.y);
  }
}
