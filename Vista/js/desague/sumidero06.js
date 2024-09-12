// Importar la clase SingleShapeBase desde single_shape_base.js
import { SingleShapeBase } from "../single_shape_base.js";

// Clase Sumidero que extiende de SingleShapeBase
export class Sumidero06 extends SingleShapeBase {
  constructor(ctx, color, options = {}) {
    // Llamar al constructor de la clase padre (SingleShapeBase)
    super(ctx, color);

    // Asignar una etiqueta única a este codo
    this.label = `Sumidero Tipo Rejilla 06`;

    // Configurar dimensiones y colores a partir de opciones o usar valores por defecto
    this.largerCircleRadius = options.largerCircleRadius || 6; // Radio del círculo más grande en mm
    this.squareSize = options.squareSize || this.largerCircleRadius * 2 + 10; // Tamaño del cuadro
    this.lineLength = options.lineLength || 10; // Longitud de las líneas en mm
    this.uShapeHorizontal = options.uShapeHorizontal || 20; // Longitud horizontal de la "U" en mm
    this.uShapeVertical = options.uShapeVertical || 40; // Longitud vertical de la "U" en mm
    this.tShapeWidth = options.tShapeWidth || 20; // Ancho de la parte superior de la "T" en mm
    this.tShapeHeight = options.tShapeHeight || 15; // Altura de la parte vertical de la "T" en mm
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
      rotatedX >= -this.largerCircleRadius &&
      rotatedX <= this.largerCircleRadius &&
      rotatedY >= -this.largerCircleRadius &&
      rotatedY <= this.largerCircleRadius
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
      -this.squareSize / 2, // Posición X del cuadro
      -this.squareSize / 2, // Posición Y del cuadro
      this.squareSize,      // Ancho del cuadro
      this.squareSize       // Alto del cuadro
    );
    this.ctx.lineWidth = 1.5;
    this.ctx.strokeStyle = "#00FF00"; // Color del borde del cuadro
    this.ctx.stroke();

    // Dibujar el círculo más grande sin relleno
    this.ctx.beginPath();
    this.ctx.arc(circleX, circleY, this.largerCircleRadius, 0, 2 * Math.PI, false);
    this.ctx.lineWidth = 1.5;
    this.ctx.strokeStyle = "#00FF00"; // Color de borde verde para el círculo más grande
    this.ctx.stroke();

    // Dibujar las líneas en cada vértice del cuadro
    const halfSize = this.squareSize / 2;
    const vertices = [
      { x: -halfSize, y: -halfSize }, // Vértice superior izquierdo
      { x: halfSize, y: -halfSize },  // Vértice superior derecho
      { x: halfSize, y: halfSize },   // Vértice inferior derecho
      { x: -halfSize, y: halfSize }   // Vértice inferior izquierdo
    ];

    this.ctx.lineWidth = 1.5;
    this.ctx.strokeStyle = "#FF00FF"; // Color de las líneas

    vertices.forEach(vertex => {
      this.ctx.beginPath();
      this.ctx.moveTo(vertex.x, vertex.y);

      // Calcular las posiciones finales de las líneas a 45 grados hacia afuera
      const endX = vertex.x + this.lineLength * Math.cos(Math.atan2(vertex.y, vertex.x)); // Ángulo en dirección del vértice
      const endY = vertex.y + this.lineLength * Math.sin(Math.atan2(vertex.y, vertex.x));

      this.ctx.lineTo(endX, endY);
      this.ctx.stroke();
    });

    // Dibujar la nueva línea en forma de "U"
    const uTopPosition = this.drawUShape(circleX, circleY);

    // Dibujar la nueva línea en forma de "T" pegada al borde superior de la "U"
    this.drawTShape(uTopPosition.x, uTopPosition.y);

    // Dibujar la etiqueta del codo
    this.ctx.font = "10px Arial";
    this.ctx.fillText(this.label, circleX + 10, circleY - 10);

    // Restaurar el estado del contexto
    this.ctx.restore();
  }

  // Dibujar una línea en forma de "U"
  drawUShape(centerX, centerY) {
    // Utilizar las dimensiones configurables
    const uShapeHorizontal = this.uShapeHorizontal; // Longitud horizontal de la "U" en mm
    const uShapeVertical = this.uShapeVertical;   // Longitud vertical de la "U" en mm

    // Calcular la posición inicial (pegada al borde del círculo)
    const startX = centerX;
    const startY = centerY + this.largerCircleRadius; // Empieza en el borde inferior del círculo

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
    this.ctx.strokeStyle = "#FFC300"; // Color para la forma "U"
    this.ctx.lineWidth = 1.5;
    this.ctx.stroke();

    // Devolver la posición de la parte superior de la "U" para usarla en la posición de la "T"
    return {
      x: startX + uShapeHorizontal,
      y: startY
    };
  }

  // Dibujar una línea en forma de "T"
  drawTShape(centerX, centerY) {
    // Utilizar las dimensiones configurables
    const tShapeWidth = this.tShapeWidth; // Ancho de la parte superior de la "T" en mm
    const tShapeHeight = this.tShapeHeight; // Altura de la parte vertical de la "T" en mm

    // Calcular la posición de la letra "T" centrada en relación a la parte superior de la "U"
    const startX = centerX - tShapeWidth / 2;
    const startY = centerY - tShapeHeight; // Posicionar la "T" para que quede pegada al borde de la "U"

    // Guardar el estado del contexto
    this.ctx.save();
    
    // Trasladar al centro de la "T" y rotar 90 grados (pi/2 radianes)
    this.ctx.translate(centerX, centerY);
    this.ctx.rotate((90 * Math.PI) / 180);
    this.ctx.translate(-centerX, -centerY);

    // Dibujar la parte vertical de la "T"
    this.ctx.beginPath();
    this.ctx.moveTo(startX + tShapeWidth / 2, startY);
    this.ctx.lineTo(startX + tShapeWidth / 2, startY + tShapeHeight);
    this.ctx.lineWidth = 1.5;
    this.ctx.strokeStyle = "#FFC300"; // Color para la parte vertical de la "T"
    this.ctx.stroke();

    // Dibujar la parte horizontal de la "T"
    this.ctx.beginPath();
    this.ctx.moveTo(startX, startY);
    this.ctx.lineTo(startX + tShapeWidth, startY);
    this.ctx.lineWidth = 1.5;
    this.ctx.strokeStyle = "#00FFFF"; // Color para la parte horizontal de la "T"
    this.ctx.stroke();

    // Restaurar el estado del contexto
    this.ctx.restore();
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
