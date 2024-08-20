import { SingleShapeBase } from "../single_shape_base.js";

// Definir las longitudes de las líneas vertical y horizontal
const verticalLength = 10; // Longitud ajustada para la línea vertical
const horizontalLength = 10; // Longitud ajustada para la línea horizontal

export class Codo03 extends SingleShapeBase {
  constructor(ctx, color) {
    super(ctx, color);
    this.label = `C° 3`; // Asignar un número de etiqueta único a este codo
  }
  // Función para dibujar una forma L en una posición específica
  drawForm(offsetX, offsetY, label) {
    // Guardar el contexto actual
    this.ctx.save();

    // Mover el contexto al punto de dibujo y rotar
    this.ctx.translate(offsetX, offsetY);
    this.ctx.rotate((this.rotation * Math.PI) / 180);

    // Comenzar a dibujar la forma L
    this.ctx.beginPath();

    // Dibujar la línea vertical principal de arriba hacia abajo
    this.ctx.moveTo(0, 0);
    this.ctx.lineTo(0, verticalLength);

    // Dibujar la línea horizontal principal de izquierda a derecha
    this.ctx.moveTo(0, 0);
    this.ctx.lineTo(horizontalLength, 0);

    // Establecer el ancho de la línea y el color
    this.ctx.lineWidth = 4;
    this.ctx.strokeStyle = this.color;

    // Trazar el camino
    this.ctx.stroke();

    // Dibujar la etiqueta con el número de codo
    this.ctx.font = "14px Arial";
    this.ctx.fillStyle = "red";
    this.ctx.fillText(label, -10, verticalLength - 10);

    // Restaurar el contexto al estado original
    this.ctx.restore();
  }
  draw() {
    this.drawForm(this.lastPoint.x, this.lastPoint.y, this.label);
  }
}
