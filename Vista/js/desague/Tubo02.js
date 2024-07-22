import { Tubo } from "../tubo.js";
export class Tubo02 extends Tubo {
  constructor(canvas, pipeStart) {
    super(canvas, "orange", pipeStart);
  }
}

/*// Importar la clase SingleShapeBase desde single_shape_base.js
import { SingleShapeBase } from "../single_shape_base.js";

// Definir constantes para las dimensiones y colores
const largerCircleRadius = 6; // Radio del círculo más grande en mm
const squareSize = largerCircleRadius * 2 + 10; // Tamaño del cuadro, ajustado para que el círculo esté dentro
const lineLength = 10; // Longitud de las líneas en mm
const uShapeLength = 60; // Longitud total de la línea en forma de "U" en mm
const uShapeHorizontal = 20; // Longitud horizontal de la "U" en mm
const uShapeVertical = 40; // Longitud vertical de la "U" en mm

// Clase Sumidero que extiende de SingleShapeBase
export class Sumidero extends SingleShapeBase {
  constructor(ctx, color, Count) {
    // Llamar al constructor de la clase padre (SingleShapeBase)
    super(ctx, color);

    // Asignar una etiqueta única a este codo
    this.label = `M${Count}`;
  }

  // Manejar el evento de doble clic
  onDoubleClick(event) {
    // Obtener las coordenadas del evento respecto al canvas
    const rect = this.ctx.canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Calcular las coordenadas relativas al punto de origen del codo
    const relativeX = x - this.lastPoint.x;
    const relativeY = y - this.lastPoint.y;

    // Calcular las coordenadas rotadas
    const rotatedX =
      relativeX * Math.cos((-this.rotation * Math.PI) / 180) -
      relativeY * Math.sin((-this.rotation * Math.PI) / 180);
    const rotatedY =
      relativeX * Math.sin((-this.rotation * Math.PI) / 180) +
      relativeY * Math.cos((-this.rotation * Math.PI) / 180);

    // Verificar si el doble clic ocurrió dentro del área del codo
    if (
      rotatedX >= -largerCircleRadius &&
      rotatedX <= largerCircleRadius &&
      rotatedY >= -largerCircleRadius &&
      rotatedY <= largerCircleRadius
    ) {
      // Actualizar la rotación del codo (90 grados hacia la derecha)
      this.rotation = (this.rotation + 90) % 360;

      // Redibujar todos los codos en el lienzo
      this.redrawAll();
    }
  }

  // Dibujar el cuadro, el círculo y las líneas en cada vértice
  drawLineWithCircle(x, y) {
    this.ctx.save();

    // Aplicar la traslación y rotación al contexto del canvas
    this.ctx.translate(x, y);
    this.ctx.rotate((this.rotation * Math.PI) / 180);

    // Coordenadas del círculo
    const circleX = 0;
    const circleY = 0;

    // Dibujar el cuadro sin relleno
    this.ctx.beginPath();
    this.ctx.rect(
      -squareSize / 2, // Posición X del cuadro
      -squareSize / 2, // Posición Y del cuadro
      squareSize,      // Ancho del cuadro
      squareSize       // Alto del cuadro
    );
    this.ctx.lineWidth = 1.5;
    this.ctx.strokeStyle = "orange"; // Color del borde del cuadro
    this.ctx.stroke();

    // Dibujar el círculo más grande sin relleno
    this.ctx.beginPath();
    this.ctx.arc(circleX, circleY, largerCircleRadius, 0, 2 * Math.PI, false);
    this.ctx.lineWidth = 1.5;
    this.ctx.strokeStyle = "green"; // Color de borde verde para el círculo más grande
    this.ctx.stroke();

    // Dibujar las líneas en cada vértice del cuadro
    const halfSize = squareSize / 2;
    const vertices = [
      { x: -halfSize, y: -halfSize }, // Vértice superior izquierdo
      { x: halfSize, y: -halfSize },  // Vértice superior derecho
      { x: halfSize, y: halfSize },   // Vértice inferior derecho
      { x: -halfSize, y: halfSize }   // Vértice inferior izquierdo
    ];

    this.ctx.lineWidth = 1.5;
    this.ctx.strokeStyle = "blue"; // Color de las líneas

    vertices.forEach(vertex => {
      this.ctx.beginPath();
      this.ctx.moveTo(vertex.x, vertex.y);

      // Calcular las posiciones finales de las líneas a 45 grados hacia afuera
      const endX = vertex.x + lineLength * Math.cos(Math.atan2(vertex.y, vertex.x)); // Ángulo en dirección del vértice
      const endY = vertex.y + lineLength * Math.sin(Math.atan2(vertex.y, vertex.x));

      this.ctx.lineTo(endX, endY);
      this.ctx.stroke();
    });

    // Dibujar la nueva línea en forma de "U"
    this.drawUShape(circleX, circleY);

    // Dibujar la etiqueta del codo
    this.ctx.font = "10px Arial";
    this.ctx.fillText(this.label, circleX + 10, circleY - 10);

    // Restaurar el estado del contexto
    this.ctx.restore();
  }

  // Dibujar una línea en forma de "U"
  drawUShape(centerX, centerY) {
    const uShapeHorizontal = 20; // Longitud horizontal de la "U" en mm
    const uShapeVertical = 40;   // Longitud vertical de la "U" en mm

    // Calcular la posición inicial (pegada al borde del círculo)
    const startX = centerX;
    const startY = centerY + largerCircleRadius; // Empieza en el borde inferior del círculo

    // Dibujar la parte en forma de "U"
    this.ctx.beginPath();
    this.ctx.moveTo(startX, startY);

    // Línea hacia abajo
    this.ctx.lineTo(startX, startY + uShapeVertical);
    // Línea horizontal hacia la derecha
    this.ctx.lineTo(startX + uShapeHorizontal, startY + uShapeVertical);
    // Línea hacia arriba
    this.ctx.lineTo(startX + uShapeHorizontal, startY);

    // Completar el segmento en forma de "U"
    this.ctx.strokeStyle = "red"; // Color para la forma "U"
    this.ctx.lineWidth = 1.5;
    this.ctx.stroke();
  }

  // Dibujar el codo en el lienzo
  draw() {
    this.drawLineWithCircle(this.lastPoint.x, this.lastPoint.y);
  }

  // Limpiar y redibujar todos los codos en el lienzo
  redrawAll() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    instances.forEach((instance) => instance.draw());
  }
}
*/