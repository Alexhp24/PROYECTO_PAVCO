import { SingleShapeBase } from "../single_shape_base.js";

// Definir constantes para las dimensiones y colores
const rectWidth = 50; // Ancho del rectángulo en mm
const rectHeight = 35; // Altura del rectángulo en mm
const circleRadius = 4; // Radio del círculo en mm
const smallRectWidth = 8; // Ancho de los rectángulos pequeños
const smallRectHeight = 4; // Altura de los rectángulos pequeños

// Clase CajaReguistro que extiende de SingleShapeBase
export class CajaReguistro extends SingleShapeBase {
  constructor(ctx, color, Count) {
    // Llamar al constructor de la clase padre (Codo)
    super(ctx, color);

    // Asignar una etiqueta única a este codo
    this.label = `C_R${Count}`;
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
    const rotatedX = relativeX * Math.cos(-this.rotation * Math.PI / 180) - relativeY * Math.sin(-this.rotation * Math.PI / 180);
    const rotatedY = relativeX * Math.sin(-this.rotation * Math.PI / 180) + relativeY * Math.cos(-this.rotation * Math.PI / 180);

    // Verificar si el doble clic ocurrió dentro del área del codo
    if (rotatedX >= -rectWidth / 2 && rotatedX <= rectWidth / 2 && rotatedY >= -rectHeight / 2 && rotatedY <= rectHeight / 2) {
      // Actualizar la rotación del codo (90 grados hacia la derecha)
      this.rotation = (this.rotation + 90) % 360;

      // Redibujar todos los codos en el lienzo
      this.redrawAll();
    }
  }

  // Dibujar el rectángulo, triángulos, círculo y rectángulos pequeños
  drawRectangle(x, y) {
    this.ctx.save();

    // Aplicar la traslación y rotación al contexto del canvas
    this.ctx.translate(x, y);
    this.ctx.rotate(this.rotation * Math.PI / 180);

    // Dibujar el rectángulo sin relleno
    this.ctx.beginPath();
    this.ctx.rect(-rectWidth / 2, -rectHeight / 2, rectWidth, rectHeight);
    this.ctx.lineWidth = 1.5;
    this.ctx.strokeStyle = 'blue'; // Color de borde azul para el rectángulo
    this.ctx.stroke();

    // Dibujar los triángulos dentro del rectángulo y pegados a la línea central
    this.ctx.beginPath();
    // Triángulo izquierdo
    this.ctx.moveTo(-rectWidth / 2 + 2, 0); // Punto central izquierdo
    this.ctx.lineTo(-rectWidth / 2 + 7, rectHeight / 2 - 2); // Punto inferior
    this.ctx.lineTo(-rectWidth / 2 + 12, 0); // Punto derecho
    this.ctx.closePath();
    this.ctx.fillStyle = 'green';
    this.ctx.fill();
    this.ctx.strokeStyle = 'green';
    this.ctx.stroke();

    this.ctx.beginPath();
    // Triángulo derecho
    this.ctx.moveTo(rectWidth / 2 - 2, 0); // Punto central derecho
    this.ctx.lineTo(rectWidth / 2 - 7, rectHeight / 2 - 2); // Punto inferior
    this.ctx.lineTo(rectWidth / 2 - 12, 0); // Punto izquierdo
    this.ctx.closePath();
    this.ctx.fillStyle = 'green';
    this.ctx.fill();
    this.ctx.strokeStyle = 'green';
    this.ctx.stroke();

    // Dibujar los rectángulos pequeños dentro del rectángulo grande, alineados con los triángulos
    this.ctx.beginPath();
    // Rectángulo izquierdo
    this.ctx.rect(-rectWidth / 2 + 2, -rectHeight / 2, smallRectWidth, smallRectHeight);
    this.ctx.fillStyle = 'yellow';
    this.ctx.fill();
    this.ctx.strokeStyle = 'yellow';
    this.ctx.stroke();

    this.ctx.beginPath();
    // Rectángulo derecho
    this.ctx.rect(rectWidth / 2 - 6, -rectHeight / 2, smallRectWidth, smallRectHeight);
    this.ctx.fillStyle = 'yellow';
    this.ctx.fill();
    this.ctx.strokeStyle = 'yellow';
    this.ctx.stroke();

    // Dibujar el círculo al centro del rectángulo
    this.ctx.beginPath();
    this.ctx.arc(0, 0, circleRadius, 0, 2 * Math.PI);
    this.ctx.strokeStyle = 'blue';
    this.ctx.stroke();

    // Dibujar la línea al centro del rectángulo
    this.ctx.beginPath();
    this.ctx.moveTo(-rectWidth / 2, 0);
    this.ctx.lineTo(rectWidth / 2, 0);
    this.ctx.strokeStyle = 'red'; // Color de la línea
    this.ctx.stroke();

    // Dibujar la etiqueta del codo
    this.ctx.font = "10px Arial";
    this.ctx.fillText(this.label, rectWidth / 2 + 10, -rectHeight / 2 - 10);

    // Restaurar el estado del contexto
    this.ctx.restore();
  }

  // Dibujar el codo en el lienzo
  draw() {
    this.drawRectangle(this.lastPoint.x, this.lastPoint.y);
  }

  // Limpiar y redibujar todos los codos en el lienzo
  redrawAll() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    instances.forEach(instance => instance.draw());
  }
}

/*// Importar la clase Codo desde Codo.js
import { SingleShapeBase } from "../single_shape_base.js";

// Definir constantes para las dimensiones y colores
const rectWidth =30; // Ancho del rectángulo en mm
const rectHeight = 15; // Altura del rectángulo en mm

// Clase CajaReguistro que extiende de SingleShapeBase
export class CajaReguistro extends SingleShapeBase {
  constructor(ctx, color, Count) {
    // Llamar al constructor de la clase padre (Codo)
    super(ctx, color);

    // Asignar una etiqueta única a este codo
    this.label = `C_R${Count}`;
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
    const rotatedX = relativeX * Math.cos(-this.rotation * Math.PI / 180) - relativeY * Math.sin(-this.rotation * Math.PI / 180);
    const rotatedY = relativeX * Math.sin(-this.rotation * Math.PI / 180) + relativeY * Math.cos(-this.rotation * Math.PI / 180);

    // Verificar si el doble clic ocurrió dentro del área del codo
    if (rotatedX >= -rectWidth / 2 && rotatedX <= rectWidth / 2 && rotatedY >= -rectHeight / 2 && rotatedY <= rectHeight / 2) {
      // Actualizar la rotación del codo (90 grados hacia la derecha)
      this.rotation = (this.rotation + 90) % 360;

      // Redibujar todos los codos en el lienzo
      this.redrawAll();
    }
  }

  // Dibujar el rectángulo
  drawRectangle(x, y) {
    this.ctx.save();

    // Aplicar la traslación y rotación al contexto del canvas
    this.ctx.translate(x, y);
    this.ctx.rotate(this.rotation * Math.PI / 180);

    // Dibujar el rectángulo sin relleno
    this.ctx.beginPath();
    this.ctx.rect(-rectWidth / 2, -rectHeight / 2, rectWidth, rectHeight);
    this.ctx.lineWidth = 1.5;
    this.ctx.strokeStyle = 'blue'; // Color de borde verde para el rectángulo
    this.ctx.stroke();

    // Dibujar la etiqueta del codo
    this.ctx.font = "10px Arial";
    this.ctx.fillText(this.label, rectWidth / 2 + 10, -rectHeight / 2 - 10);

    // Restaurar el estado del contexto
    this.ctx.restore();
  }

  // Dibujar el codo en el lienzo
  draw() {
    this.drawRectangle(this.lastPoint.x, this.lastPoint.y);
  }

  // Limpiar y redibujar todos los codos en el lienzo
  redrawAll() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    instances.forEach(instance => instance.draw());
  }


}

*/