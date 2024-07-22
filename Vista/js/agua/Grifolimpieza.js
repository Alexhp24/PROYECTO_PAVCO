// Importar la clase Codo desde Codo.js
import { SingleShapeBase } from "../single_shape_base.js";

// Definir constantes para las dimensiones y colores
const largerCircleRadius = 6; // Radio del círculo más grande en mm
const shapeLength = 8; // Longitud de cada segmento de las formas en mm

// Clase Grifolimpieza que extiende de SingleShapeBase
export class Grifolimpieza extends SingleShapeBase {
  constructor(ctx, color, count) {
    // Llamar al constructor de la clase padre (SingleShapeBase)
    super(ctx, color);
    // Asignar una etiqueta única a este codo
    this.label = `M${count}`;
  }

  // Dibujar el círculo y las letras T y L
  drawLineWithCircle(x, y) {
    this.ctx.save();

    // Aplicar la traslación y rotación al contexto del canvas
    this.ctx.translate(x, y);
    this.ctx.rotate(this.rotation * Math.PI / 180);

    // Coordenadas del círculo
    const circleX = 0;
    const circleY = 0;

    // Dibujar el círculo más grande sin relleno
    this.ctx.beginPath();
    this.ctx.arc(circleX, circleY, largerCircleRadius, 0, 2 * Math.PI, false);
    this.ctx.lineWidth = 1.5;
    this.ctx.strokeStyle = '#7FFF00'; // Color de borde verde para el círculo más grande
    this.ctx.stroke();

    // Dibujar la primera letra T en el borde superior del círculo
    const T1StartX = circleX;
    const T1StartY = circleY - largerCircleRadius - shapeLength;

    this.ctx.beginPath();
    // Dibujar la línea vertical de la T
    this.ctx.moveTo(T1StartX, T1StartY);
    this.ctx.lineTo(T1StartX, T1StartY + shapeLength);
    // Dibujar la línea horizontal de la T
    this.ctx.moveTo(T1StartX - shapeLength / 2, T1StartY);
    this.ctx.lineTo(T1StartX + shapeLength / 2, T1StartY);
    this.ctx.lineWidth = 1.5;
    this.ctx.strokeStyle = '#00FFFF'; // Color de la letra T
    this.ctx.stroke();

    // Dibujar la letra L en el borde izquierdo del círculo
    this.ctx.save(); // Guardar el estado del contexto

    // Aplicar la rotación de 180 grados
    this.ctx.translate(-largerCircleRadius - shapeLength, 0); // Trasladar al punto de origen de la L
    this.ctx.rotate(Math.PI); // Rotar 180 grados

    this.ctx.beginPath();
    // Dibujar la línea horizontal de la L pegada al borde del círculo
    this.ctx.moveTo(-shapeLength, -shapeLength / 2);
    this.ctx.lineTo(0, -shapeLength / 2);
    // Dibujar la línea vertical de la L apuntando hacia abajo
    this.ctx.moveTo(0, -shapeLength / 2);
    this.ctx.lineTo(0, -shapeLength / 2 - shapeLength);
    this.ctx.lineWidth = 1.5;
    this.ctx.strokeStyle = '#00FFFF'; // Color de la letra L
    this.ctx.stroke();

    this.ctx.restore(); // Restaurar el estado del contexto

    // Dibujar la segunda letra T en el borde derecho del círculo (girada 180 grados)
    const T2StartX = circleX + largerCircleRadius + shapeLength;
    const T2StartY = circleY;

    this.ctx.beginPath();
    // Dibujar la línea vertical de la T (girada)
    this.ctx.moveTo(T2StartX, T2StartY + shapeLength / 2);
    this.ctx.lineTo(T2StartX, T2StartY - shapeLength / 2);
    // Dibujar la línea horizontal de la T (girada)
    this.ctx.moveTo(T2StartX, T2StartY);
    this.ctx.lineTo(T2StartX - shapeLength / 2, T2StartY);
    this.ctx.lineWidth = 1.5;
    this.ctx.strokeStyle = '#00FFFF'; // Color de la letra T
    this.ctx.stroke();

    // Dibujar la etiqueta del codo
    this.ctx.font = "10px Arial";
    this.ctx.fillText(this.label, circleX + 10, circleY - 10);

    // Restaurar el estado del contexto
    this.ctx.restore();
  }

  // Dibujar el codo en el lienzo
  draw() {
    this.drawLineWithCircle(this.lastPoint.x, this.lastPoint.y);
  }
}
