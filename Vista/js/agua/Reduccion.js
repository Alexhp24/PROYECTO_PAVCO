import { SingleShapeBase } from "../single_shape_base.js";

const triangleBaseWidth = 15; // Ancho de la base del triángulo
const triangleHeight = 20; // Altura del triángulo
const horizontalLineLength = 10; // Longitud de la línea horizontal
const horizontalLineOffset = 3; // Desplazamiento de la línea horizontal desde la punta superior del triángulo

export class Reduccion extends SingleShapeBase {
  constructor(ctx, color) {
    super(ctx, color);
    this.label = `Reduccion`;
  }
  drawReduccion(x, y) {
    // Guardar el contexto actual
    this.ctx.save();

    // Mover el contexto al punto de dibujo y rotar
    this.ctx.translate(x, y);
    this.ctx.rotate((this.rotation * Math.PI) / 180);

    // Dibujar el triángulo apuntando hacia arriba
    this.ctx.beginPath();
    this.ctx.moveTo(0, -triangleHeight / 2); // Punto superior del triángulo
    this.ctx.lineTo(triangleBaseWidth / 2, triangleHeight / 2); // Punto inferior derecho
    this.ctx.lineTo(-triangleBaseWidth / 2, triangleHeight / 2); // Punto inferior izquierdo
    this.ctx.closePath();

    // Rellenar el triángulo con el color especificado
    this.ctx.fillStyle = this.color;
    this.ctx.fill();

    // Dibujar la línea horizontal alineada horizontalmente desde la punta superior del triángulo
    this.ctx.beginPath();
    this.ctx.moveTo(
      -horizontalLineLength / 2,
      -triangleHeight / 2 - horizontalLineOffset
    ); // Iniciar la línea a la izquierda
    this.ctx.lineTo(
      horizontalLineLength / 2,
      -triangleHeight / 2 - horizontalLineOffset
    ); // Extender la línea a la derecha
    this.ctx.strokeStyle = this.color; // Utilizar el mismo color para la línea horizontal
    this.ctx.stroke();

    // Dibujar el texto
    this.ctx.font = "10px Arial";
    this.ctx.fillStyle = "black"; // Color del texto
    this.ctx.fillText(
      this.label,
      -triangleBaseWidth / 2 + 5,
      -triangleHeight / 2 - 10
    );

    // Restaurar el contexto al estado original
    this.ctx.restore();
  }

  draw() {
    // Limpiar solo el área ocupada por esta Reduccion antes de redibujar
    const x = this.lastPoint.x;
    const y = this.lastPoint.y;
    const clearWidth = triangleBaseWidth + horizontalLineLength; // Ancho total ocupado por la Reduccion
    const clearHeight = triangleHeight + horizontalLineOffset; // Altura total ocupada por la Reduccion
    this.ctx.clearRect(
      x - clearWidth / 2,
      y - clearHeight,
      clearWidth,
      clearHeight
    );

    // Dibujar la Reduccion actual
    this.drawReduccion(x, y);
  }
}
