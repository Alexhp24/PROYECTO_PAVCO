import { SingleShapeBase } from "../single_shape_base.js";

// Definir las longitudes de las líneas vertical y horizontal
const verticalLength = 10; // Longitud ajustada para la línea vertical
const horizontalLength = 10; // Longitud ajustada para la línea horizontal

export class Desague90 extends SingleShapeBase {
  constructor(ctx, color) {
    super(ctx, color);
    this.label = `CODO 90°`; // Asignar un número de etiqueta único a este codo
  }

  // Función para manejar el doble clic
  onDoubleClick(event) {
    // Verificar si el doble clic está dentro del área del Codo90
    const rect = this.ctx.canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Calcular la posición relativa al canvas
    const relativeX = x - this.lastPoint.x;
    const relativeY = y - this.lastPoint.y;

    // Comprobar si el clic está dentro del área de dibujado del Codo90
    if (relativeX >= 0 && relativeX <= horizontalLength && relativeY >= 0 && relativeY <= verticalLength + horizontalLength) {
      this.rotation = (this.rotation + 90) % 360; // Incrementar la rotación en 90 grados
      this.draw(); // Volver a dibujar con la nueva rotación
    }
  }

  // Función para dibujar una forma L en una posición específica
  drawForm(offsetX, offsetY, label) {
    // Guardar el contexto actual
    this.ctx.save();

    // Mover el contexto al punto de dibujo y rotar
    this.ctx.translate(offsetX, offsetY);
    this.ctx.rotate(this.rotation * Math.PI / 180);

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
    this.ctx.font = "11px Arial";
    this.ctx.fillText(label, -10, verticalLength - 10);

    // Restaurar el contexto al estado original
    this.ctx.restore();
  }

  draw() {
    // Limpiar el área de dibujo antes de redibujar
    /*this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);*/
    this.drawForm(this.lastPoint.x, this.lastPoint.y, this.label);
  }
}

/*import { Codo } from "./Codo.js";

// Definir las longitudes de las líneas vertical y horizontal
var verticalLength = 10; // Longitud ajustada para la línea vertical
var horizontalLength = 10; // Longitud ajustada para la línea horizontal

export class Codo90 extends Codo {
  static labelCount = 0; // Variable de clase para contar el número de codos dibujados

  constructor(ctx, color, lastPoint) {
    super(ctx, color, lastPoint);
    this.label = `C${++Codo90.labelCount}`; // Asignar un número de etiqueta único a este codo
  }

  // Función para dibujar una forma L en una posición específica
  drawForm(offsetX, offsetY, label) {
    // Calcular las posiciones de inicio de la línea vertical
    const verticalStartX = offsetX;
    const verticalStartY = offsetY;

    // Calcular las posiciones de inicio de la línea horizontal
    const horizontalStartX = verticalStartX;
    const horizontalStartY = verticalStartY + verticalLength;

    // Comenzar a dibujar la forma L
    this.ctx.beginPath();

    // Dibujar la línea vertical principal de arriba hacia abajo
    this.ctx.moveTo(verticalStartX, verticalStartY);
    this.ctx.lineTo(verticalStartX, verticalStartY + verticalLength);

    // Dibujar el canto en la parte inferior de la línea vertical
    this.ctx.moveTo(verticalStartX - 5, verticalStartY + verticalLength);
    this.ctx.lineTo(verticalStartX + 5, verticalStartY + verticalLength);

    // Dibujar el canto en la parte superior de la línea vertical
    this.ctx.moveTo(verticalStartX - 5, verticalStartY);
    this.ctx.lineTo(verticalStartX + 5, verticalStartY);

    // Dibujar la línea horizontal principal de izquierda a derecha desde el final de la línea vertical
    this.ctx.moveTo(horizontalStartX, horizontalStartY);
    this.ctx.lineTo(horizontalStartX + horizontalLength, horizontalStartY);

    // Dibujar el canto al final de la línea horizontal
    this.ctx.moveTo(horizontalStartX + horizontalLength, horizontalStartY - 5);
    this.ctx.lineTo(horizontalStartX + horizontalLength, horizontalStartY + 5);
    // Establecer el ancho de la línea y el color
    this.ctx.lineWidth = 4;
    this.ctx.strokeStyle = this.color;
    // Trazar el camino
    this.ctx.stroke();

    // Dibujar la etiqueta con el número de codo
    this.ctx.font = "7px Arial";
    this.ctx.fillText(label, verticalStartX - 10, verticalStartY - 10);
  }

  draw(){
    this.drawForm(this.lastPoint.x, this.lastPoint.y, this.label);
  }
}
*/