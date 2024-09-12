import { SingleShapeBase } from "../single_shape_base.js";

const verticalLength = 10;
const horizontalLength = 10;

export class TeeSanitario03 extends SingleShapeBase {
  static labelCount = 0;
  static totalCount = 0;

  constructor(ctx, color) {
    super(ctx, color);
    this.label = `Tee Sanitario Ø4 a Ø2`;
  }

  // Función para manejar el doble clic
  onDoubleClick(event) {
    // Verificar si el doble clic está dentro del área del CodoT
    const rect = this.ctx.canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Calcular la posición relativa al canvas
    const relativeX = x - this.lastPoint.x;
    const relativeY = y - this.lastPoint.y;

    // Comprobar si el clic está dentro del área de dibujado del CodoT
    if (
      relativeX >= -horizontalLength / 2 &&
      relativeX <= horizontalLength / 2 &&
      relativeY >= -verticalLength / 2 &&
      relativeY <= verticalLength / 2
    ) {
      this.rotation = (this.rotation + 90) % 360; // Incrementar la rotación en 90 grados
      this.draw(); // Volver a dibujar con la nueva rotación
    }
  }

  drawT(x, y) {
    // Guardar el contexto actual
    this.ctx.save();

    // Mover el contexto al punto de dibujo y rotar
    this.ctx.translate(x, y + 6 );
    this.ctx.rotate((this.rotation * Math.PI) / 180);

    const verticalStartX = 0;
    const verticalStartY = -verticalLength / 2;
    const horizontalStartX = -horizontalLength / 2;
    const horizontalStartY = -verticalLength / 2;

    this.ctx.beginPath();

    // Dibujar la línea vertical principal
    this.ctx.moveTo(verticalStartX, verticalStartY);
    this.ctx.lineTo(verticalStartX, verticalStartY + verticalLength);

    // Dibujar las líneas horizontales en cada extremo del vertical
    this.ctx.moveTo(verticalStartX - 3, verticalStartY);
    this.ctx.lineTo(verticalStartX + 3, verticalStartY);
    this.ctx.moveTo(verticalStartX - 3, verticalStartY + verticalLength);
    this.ctx.lineTo(verticalStartX + 3, verticalStartY + verticalLength);

    // Dibujar la línea horizontal principal
    this.ctx.moveTo(horizontalStartX, horizontalStartY);
    this.ctx.lineTo(horizontalStartX + horizontalLength, horizontalStartY);

    // Dibujar las líneas verticales en cada extremo del horizontal
    this.ctx.moveTo(horizontalStartX, horizontalStartY - 3);
    this.ctx.lineTo(horizontalStartX, horizontalStartY + 3);
    this.ctx.moveTo(horizontalStartX + horizontalLength, horizontalStartY - 3);
    this.ctx.lineTo(horizontalStartX + horizontalLength, horizontalStartY + 3);

    // Dibujar las segundas líneas horizontales en cada extremo del vertical

    this.ctx.moveTo(verticalStartX - 3, verticalStartY + verticalLength + 3);
    this.ctx.lineTo(verticalStartX + 3, verticalStartY + verticalLength + 3);

    // Dibujar las segundas líneas verticales en cada extremo del horizontal
    this.ctx.moveTo(horizontalStartX - 3, horizontalStartY - 3);
    this.ctx.lineTo(horizontalStartX - 3, horizontalStartY + 3);
    this.ctx.moveTo(
      horizontalStartX + horizontalLength + 3,
      horizontalStartY - 3
    );
    this.ctx.lineTo(
      horizontalStartX + horizontalLength + 3,
      horizontalStartY + 3
    );
    this.ctx.lineWidth = 2;
    this.ctx.strokeStyle = this.color;

    this.ctx.stroke();

    this.ctx.font = "10px Arial";
    this.ctx.fillText(this.label, verticalStartX + 5, verticalStartY - 10);

    // Restaurar el contexto al estado original
    this.ctx.restore();
  }

  draw() {
    // Limpiar el área de dibujo antes de redibujar
    /*this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);*/
    this.drawT(this.lastPoint.x, this.lastPoint.y);
  }
}
