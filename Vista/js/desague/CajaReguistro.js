
// Importar la clase Codo desde Codo.js
import { SingleShapeBase } from "../single_shape_base.js";

// Definir constantes para las dimensiones y colores
const rectWidth = 35; // Ancho del rectángulo en mm
const rectHeight = 20; // Altura del rectángulo en mm
const pointRadius = 1.5; // Radio de los puntos negros en mm
const pointSpacing = 5; // Espaciado entre puntos en mm

// Clase CajaReguistro que extiende de SingleShapeBase
export class CajaReguistro extends SingleShapeBase {
  constructor(ctx, color) {
    // Llamar al constructor de la clase padre (Codo)
    super(ctx, color);

    // Asignar una etiqueta única a este codo
    this.label = `Caja de Reguistro 12 x 24`;
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
    this.ctx.strokeStyle = 'blue'; // Color de borde azul para el rectángulo
    this.ctx.stroke();

    // Dibujar la etiqueta del codo
    this.ctx.font = "10px Arial";
    this.ctx.fillText(this.label, rectWidth / 2 + 10, -rectHeight / 2 - 10);

    // Dibujar puntos negros dentro del rectángulo
    this.ctx.fillStyle = 'black';
    for (let px = -rectWidth / 2 + pointSpacing / 2; px < rectWidth / 2; px += pointSpacing) {
      for (let py = -rectHeight / 2 + pointSpacing / 2; py < rectHeight / 2; py += pointSpacing) {
        this.ctx.beginPath();
        this.ctx.arc(px, py, pointRadius, 0, 2 * Math.PI);
        this.ctx.fill();
      }
    }

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
