import { SingleShapeBase } from "../single_shape_base.js";

const triangleBaseWidth = 15; // Ancho de la base del triángulo
const triangleHeight = 20; // Altura del triángulo
const horizontalLineLength = 10; // Longitud de la línea horizontal
const verticalLineHeight = 10; // Altura de las líneas verticales en los extremos de la base del triángulo
const crossVerticalLineHeight = 7; // Altura de la línea vertical que forma la cruz

export class LlaveGeneral extends SingleShapeBase {
  constructor(ctx, color) {
    super(ctx, color);
    this.label = `Llave General`;
  }

  drawReduccion(x, y) {
    // Guardar el contexto actual
    this.ctx.save();

    // Mover el contexto al punto de dibujo y rotar 180 grados
    this.ctx.translate(x, y);
    this.ctx.rotate(this.rotation * Math.PI / 180);
    this.ctx.rotate(Math.PI); // Rotar 180 grados adicionales

    // Dibujar el triángulo apuntando hacia arriba
    this.ctx.beginPath();
    this.ctx.moveTo(0, -triangleHeight / 2); // Punto superior del triángulo
    this.ctx.lineTo(triangleBaseWidth / 2, triangleHeight / 2); // Punto inferior derecho
    this.ctx.lineTo(-triangleBaseWidth / 2, triangleHeight / 2); // Punto inferior izquierdo
    this.ctx.closePath();

    // Rellenar el triángulo con el color especificado
    this.ctx.fillStyle = this.color;
    this.ctx.fill();

    // Dibujar la línea vertical que forma la cruz desde el centro de la base del triángulo hacia abajo
    this.ctx.beginPath();
    this.ctx.moveTo(0, triangleHeight / 2); // Iniciar la línea en el centro de la base
    this.ctx.lineTo(0, triangleHeight / 2 + crossVerticalLineHeight); // Extender la línea hacia abajo
    this.ctx.strokeStyle = this.color; // Utilizar el mismo color para la línea vertical
    this.ctx.stroke();

    // Dibujar la línea horizontal centrada en la línea vertical
    this.ctx.beginPath();
    this.ctx.moveTo(-horizontalLineLength / 2, triangleHeight / 2 + crossVerticalLineHeight / 2); // Iniciar la línea a la izquierda desde el centro de la línea vertical
    this.ctx.lineTo(horizontalLineLength / 2, triangleHeight / 2 + crossVerticalLineHeight / 2); // Extender la línea a la derecha
    this.ctx.strokeStyle = this.color; // Utilizar el mismo color para la línea horizontal
    this.ctx.stroke();

    // Dibujar líneas verticales en los extremos de la base del triángulo
    this.ctx.beginPath();
    this.ctx.moveTo(-triangleBaseWidth / 2, triangleHeight / 2); // Extremo inferior izquierdo
    this.ctx.lineTo(-triangleBaseWidth / 2, triangleHeight / 2 - verticalLineHeight); // Línea vertical hacia abajo desde el extremo inferior izquierdo
    this.ctx.moveTo(triangleBaseWidth / 2, triangleHeight / 2); // Extremo inferior derecho
    this.ctx.lineTo(triangleBaseWidth / 2, triangleHeight / 2 - verticalLineHeight); // Línea vertical hacia abajo desde el extremo inferior derecho
    this.ctx.stroke();

    // Dibujar el texto
    this.ctx.font = "10px Arial";
    this.ctx.fillStyle = "black"; // Color del texto
    this.ctx.fillText(this.label, -triangleBaseWidth / 2 + 5, -triangleHeight / 2 - 10);

    // Restaurar el contexto al estado original
    this.ctx.restore();
  }

  draw() {
    // Limpiar solo el área ocupada por esta Reduccion antes de redibujar
    const x = this.lastPoint.x;
    const y = this.lastPoint.y;
    const clearWidth = triangleBaseWidth + horizontalLineLength; // Ancho total ocupado por la Reduccion
    const clearHeight = triangleHeight + crossVerticalLineHeight; // Altura total ocupada por la Reduccion
    this.ctx.clearRect(x - clearWidth / 2, y - clearHeight, clearWidth, clearHeight);

    // Dibujar la Reduccion actual
    this.drawReduccion(x, y);
  }
}


/*import { SingleShapeBase } from "../single_shape_base.js";

const triangleBaseWidth = 15; // Ancho de la base del triángulo
const triangleHeight = 20; // Altura del triángulo
const horizontalLineLength = 10; // Longitud de la línea horizontal
const verticalLineHeight = 10; // Altura de las líneas verticales en los extremos de la base del triángulo
const crossVerticalLineHeight = 7; // Altura de la línea vertical que forma la cruz

export class LlaveGeneral extends SingleShapeBase {
  constructor(ctx, color) {
    super(ctx, color);
    this.label = `Llave General`;
  }

  drawReduccion(x, y) {
    // Guardar el contexto actual
    this.ctx.save();

    // Mover el contexto al punto de dibujo y rotar
    this.ctx.translate(x, y);
    this.ctx.rotate(this.rotation * Math.PI / 180);

    // Dibujar el triángulo apuntando hacia arriba
    this.ctx.beginPath();
    this.ctx.moveTo(0, -triangleHeight / 2); // Punto superior del triángulo
    this.ctx.lineTo(triangleBaseWidth / 2, triangleHeight / 2); // Punto inferior derecho
    this.ctx.lineTo(-triangleBaseWidth / 2, triangleHeight / 2); // Punto inferior izquierdo
    this.ctx.closePath();

    // Rellenar el triángulo con el color especificado
    this.ctx.fillStyle = this.color;
    this.ctx.fill();

    // Dibujar la línea vertical que forma la cruz desde el centro de la base del triángulo hacia abajo
    this.ctx.beginPath();
    this.ctx.moveTo(0, triangleHeight / 2); // Iniciar la línea en el centro de la base
    this.ctx.lineTo(0, triangleHeight / 2 + crossVerticalLineHeight); // Extender la línea hacia abajo
    this.ctx.strokeStyle = this.color; // Utilizar el mismo color para la línea vertical
    this.ctx.stroke();

    // Dibujar la línea horizontal centrada en la línea vertical
    this.ctx.beginPath();
    this.ctx.moveTo(-horizontalLineLength / 2, triangleHeight / 2 + crossVerticalLineHeight / 2); // Iniciar la línea a la izquierda desde el centro de la línea vertical
    this.ctx.lineTo(horizontalLineLength / 2, triangleHeight / 2 + crossVerticalLineHeight / 2); // Extender la línea a la derecha
    this.ctx.strokeStyle = this.color; // Utilizar el mismo color para la línea horizontal
    this.ctx.stroke();

    // Dibujar líneas verticales en los extremos de la base del triángulo
    this.ctx.beginPath();
    this.ctx.moveTo(-triangleBaseWidth / 2, triangleHeight / 2); // Extremo inferior izquierdo
    this.ctx.lineTo(-triangleBaseWidth / 2, triangleHeight / 2 - verticalLineHeight); // Línea vertical hacia abajo desde el extremo inferior izquierdo
    this.ctx.moveTo(triangleBaseWidth / 2, triangleHeight / 2); // Extremo inferior derecho
    this.ctx.lineTo(triangleBaseWidth / 2, triangleHeight / 2 - verticalLineHeight); // Línea vertical hacia abajo desde el extremo inferior derecho
    this.ctx.stroke();

    // Dibujar el texto
    this.ctx.font = "10px Arial";
    this.ctx.fillStyle = "black"; // Color del texto
    this.ctx.fillText(this.label, -triangleBaseWidth / 2 + 5, -triangleHeight / 2 - 10);

    // Restaurar el contexto al estado original
    this.ctx.restore();
  }

  draw() {
    // Limpiar solo el área ocupada por esta Reduccion antes de redibujar
    const x = this.lastPoint.x;
    const y = this.lastPoint.y;
    const clearWidth = triangleBaseWidth + horizontalLineLength; // Ancho total ocupado por la Reduccion
    const clearHeight = triangleHeight + crossVerticalLineHeight; // Altura total ocupada por la Reduccion
    this.ctx.clearRect(x - clearWidth / 2, y - clearHeight, clearWidth, clearHeight);

    // Dibujar la Reduccion actual
    this.drawReduccion(x, y);
  }
}
*/