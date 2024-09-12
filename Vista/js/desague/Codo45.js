import { SingleShapeBase } from "../single_shape_base.js";

// Longitud de cada línea
const lineLength = 13; // Longitud de la línea horizontal en mm
const verticalLength = 10; // Longitud de la línea vertical en mm
const diagonalOffset = lineLength * Math.sqrt(2) / 2; // Offset para el ángulo de 45 grados

export class Codo45 extends SingleShapeBase {
  constructor(ctx, color) {
    super(ctx, color);
    this.label = `Codo 02`; // Asignar un número de etiqueta único a este codo
    this.rotation = 0; // Inicializar rotación a 0 grados
    this.lastPoint = { x: 0, y: 0 }; // Inicializar último punto
  }

  // Función para manejar el evento de doble clic
  onDoubleClick(event) {
    const rect = this.ctx.canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Obtener las coordenadas relativas al punto de origen del codo
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
      rotatedX >= -lineLength / 2 &&
      rotatedX <= lineLength / 2 &&
      rotatedY >= -lineLength / 2 &&
      rotatedY <= lineLength / 2
    ) {
      // Calcular las coordenadas ajustadas para dibujar el codo lejos del punto de clic
      const adjustedX = this.lastPoint.x + rotatedX;
      const adjustedY = this.lastPoint.y + rotatedY;

      // Actualizar el último punto a las coordenadas ajustadas
      this.lastPoint.x = adjustedX;
      this.lastPoint.y = adjustedY;

      // Cambiar la rotación en 45 grados
      this.rotation = (this.rotation + 45) % 360;
      this.draw();
    }
  }

  // Función para dibujar el codo en una posición dada
  drawCodo45(x, y) {
    this.ctx.save();

    this.ctx.translate(x, y);
    this.ctx.rotate((this.rotation * Math.PI) / 180);

    // Calcular los puntos para las líneas
    const halfLength = lineLength / 2;
    const offset = diagonalOffset;

    // Puntos para las líneas
    const start = { x: -halfLength, y: 0 }; // Punto inicial de la línea horizontal
    const middle = { x: 0, y: 0 }; // Punto final de la línea horizontal
    const end = { x: middle.x + offset, y: middle.y - offset }; // Punto final de la línea diagonal

    // Comenzar a dibujar la forma
    this.ctx.beginPath();

    // Dibujar la primera línea horizontal
    this.ctx.moveTo(start.x, start.y);
    this.ctx.lineTo(middle.x, middle.y);

    // Añadir línea horizontal en el extremo izquierdo de la primera línea
    this.ctx.moveTo(start.x - halfLength, start.y);
    this.ctx.lineTo(start.x + halfLength, start.y);

    // Dibujar la segunda línea diagonal
    this.ctx.moveTo(middle.x, middle.y);
    this.ctx.lineTo(end.x, end.y);

    // Añadir línea horizontal en el extremo derecho de la segunda línea
    this.ctx.moveTo(end.x - halfLength, end.y);
    this.ctx.lineTo(end.x + halfLength, end.y);

    // Calcular la posición de la línea vertical
    // Alinear verticalmente con el extremo izquierdo de la primera línea horizontal
    const verticalStart = { x: start.x - halfLength, y: start.y + halfLength / 2 }; // Comienza centrado en el extremo izquierdo de la línea horizontal
    const verticalEnd = { x: verticalStart.x, y: verticalStart.y - verticalLength }; // Extiende hacia abajo

    // Dibujar la línea vertical
    this.ctx.moveTo(verticalStart.x, verticalStart.y);
    this.ctx.lineTo(verticalEnd.x, verticalEnd.y);

    this.ctx.lineWidth = 1.5;
    this.ctx.strokeStyle = this.color;

    // Trazar el camino
    this.ctx.stroke();

    // Dibujar la etiqueta
    this.ctx.font = "10px Arial";
    this.ctx.fillText(
      this.label,
      end.x + 5,
      end.y - 10
    );

    this.ctx.restore();
  }

  // Función para dibujar el codo
  draw() {
    this.drawCodo45(this.lastPoint.x, this.lastPoint.y);
  }
}


// import { SingleShapeBase } from "../single_shape_base.js";

// // Longitud de cada línea
// const lineLength = 15; // Longitud de la línea horizontal en mm
// const verticalLength = 10; // Longitud de la línea vertical en mm
// const diagonalOffset = lineLength * Math.sqrt(2) / 2; // Offset para el ángulo de 45 grados

// export class Codo45 extends SingleShapeBase {
//   constructor(ctx, color) {
//     super(ctx, color);
//     this.label = `Codo de 45°`; // Asignar un número de etiqueta único a este codo
//     this.rotation = 0; // Inicializar rotación a 0 grados
//     this.lastPoint = { x: 0, y: 0 }; // Inicializar último punto
//   }

//   // Función para manejar el evento de doble clic
//   onDoubleClick(event) {
//     const rect = this.ctx.canvas.getBoundingClientRect();
//     const x = event.clientX - rect.left;
//     const y = event.clientY - rect.top;

//     // Obtener las coordenadas relativas al punto de origen del codo
//     const relativeX = x - this.lastPoint.x;
//     const relativeY = y - this.lastPoint.y;

//     // Calcular las coordenadas rotadas
//     const rotatedX =
//       relativeX * Math.cos((-this.rotation * Math.PI) / 180) -
//       relativeY * Math.sin((-this.rotation * Math.PI) / 180);
//     const rotatedY =
//       relativeX * Math.sin((-this.rotation * Math.PI) / 180) +
//       relativeY * Math.cos((-this.rotation * Math.PI) / 180);

//     // Verificar si el doble clic ocurrió dentro del área del codo
//     if (
//       rotatedX >= -lineLength / 2 &&
//       rotatedX <= lineLength / 2 &&
//       rotatedY >= -lineLength / 2 &&
//       rotatedY <= lineLength / 2
//     ) {
//       // Calcular las coordenadas ajustadas para dibujar el codo lejos del punto de clic
//       const adjustedX = this.lastPoint.x + rotatedX;
//       const adjustedY = this.lastPoint.y + rotatedY;

//       // Actualizar el último punto a las coordenadas ajustadas
//       this.lastPoint.x = adjustedX;
//       this.lastPoint.y = adjustedY;

//       // Cambiar la rotación en 45 grados
//       this.rotation = (this.rotation + 45) % 360;
//       this.draw();
//     }
//   }

//   // Función para dibujar el codo en una posición dada
//   drawCodo45(x, y) {
//     this.ctx.save();

//     this.ctx.translate(x, y);
//     this.ctx.rotate((this.rotation * Math.PI) / 180);

//     // Calcular los puntos para las líneas
//     const halfLength = lineLength / 2;
//     const offset = diagonalOffset;

//     // Puntos para las líneas
//     const start = { x: -halfLength, y: 0 }; // Punto inicial de la línea horizontal
//     const middle = { x: 0, y: 0 }; // Punto final de la línea horizontal
//     const end = { x: middle.x + offset, y: middle.y - offset }; // Punto final de la línea diagonal

//     // Comenzar a dibujar la forma
//     this.ctx.beginPath();

//     // Dibujar la primera línea horizontal
//     this.ctx.moveTo(start.x, start.y);
//     this.ctx.lineTo(middle.x, middle.y);

//     // Añadir línea horizontal en el extremo izquierdo de la primera línea
//     this.ctx.moveTo(start.x - halfLength, start.y);
//     this.ctx.lineTo(start.x + halfLength, start.y);

//     // Dibujar la segunda línea diagonal
//     this.ctx.moveTo(middle.x, middle.y);
//     this.ctx.lineTo(end.x, end.y);

//     // Añadir línea horizontal en el extremo derecho de la segunda línea
//     this.ctx.moveTo(end.x - halfLength, end.y);
//     this.ctx.lineTo(end.x + halfLength, end.y);

//     // Calcular la posición de la línea vertical
//     // Alinear verticalmente con el extremo izquierdo de la primera línea horizontal
//     const verticalStart = { x: start.x - halfLength, y: start.y }; // Comienza en el extremo izquierdo de la primera línea horizontal
//     const verticalEnd = { x: verticalStart.x, y: verticalStart.y - verticalLength }; // Extiende hacia abajo

//     // Dibujar la línea vertical
//     this.ctx.moveTo(verticalStart.x, verticalStart.y);
//     this.ctx.lineTo(verticalEnd.x, verticalEnd.y);

//     this.ctx.lineWidth = 1.5;
//     this.ctx.strokeStyle = this.color;

//     // Trazar el camino
//     this.ctx.stroke();

//     // Dibujar la etiqueta
//     this.ctx.font = "10px Arial";
//     this.ctx.fillText(
//       this.label,
//       end.x + 5,
//       end.y - 10
//     );

//     this.ctx.restore();
//   }

//   // Función para dibujar el codo
//   draw() {
//     this.drawCodo45(this.lastPoint.x, this.lastPoint.y);
//   }
// }

