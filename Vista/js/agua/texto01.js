// // Importar la clase SingleShapeBase desde single_shape_base.js
// import { SingleShapeBase } from "../single_shape_base.js";

// // Definir constantes para las dimensiones y colores
// const lineLength = 180; // Longitud de la línea en mm
// const arrowHeadLength = 10; // Longitud de la cabeza de la flecha
// const arrowBendLength = 25; // Longitud de la parte doblada en 45 grados
// const arrowColor = '#00FF00'; // Color de la flecha

// // Clase UnionUniversal que extiende de SingleShapeBase
// export class Texto01 extends SingleShapeBase {
//   constructor(ctx, color) {
//     // Llamar al constructor de la clase padre (SingleShapeBase)
//     super(ctx, color);

//     // Inicializar el texto y su posición relativa
//     this.customText = 'Texto Inicial';
//     this.textOffset = { x: 0, y: -5 }; // Ajustar el desplazamiento del texto
//     this.fontSize = "12px";
//     this.fontColor = "#000000";

//     // Añadir el evento de clic al canvas
//     this.ctx.canvas.addEventListener('click', this.handleClick.bind(this));
//   }

//   // Dibujar la flecha
//   drawArrow(x, y) {
//     this.ctx.save();

//     // Aplicar la traslación y rotación al contexto del canvas
//     this.ctx.translate(x, y);
//     this.ctx.rotate(this.rotation * Math.PI / 180);

//     // Calcular las posiciones para la línea doblada
//     const bendX = arrowBendLength * Math.cos(Math.PI / 4); // Ajuste en 45 grados hacia abajo
//     const bendY = arrowBendLength * Math.sin(Math.PI / 4);

//     // Dibujar la línea principal de la flecha
//     this.ctx.beginPath();
//     this.ctx.moveTo(0, 0); // Punto de inicio
//     this.ctx.lineTo(-lineLength, 0); // Línea horizontal hacia la izquierda
//     this.ctx.lineTo(-lineLength - bendX, bendY); // Línea doblada a 45 grados hacia abajo
//     this.ctx.lineWidth = 1.5;
//     this.ctx.strokeStyle = arrowColor;
//     this.ctx.stroke();

//     // Dibujar la cabeza de la flecha
//     this.ctx.beginPath();
//     this.ctx.moveTo(-lineLength - bendX, bendY); // Punto donde termina la línea doblada
//     this.ctx.lineTo(-lineLength - bendX + arrowHeadLength, bendY - arrowHeadLength); // Lado derecho de la cabeza
//     this.ctx.lineTo(-lineLength - bendX + arrowHeadLength, bendY + arrowHeadLength); // Lado izquierdo de la cabeza
//     this.ctx.closePath();
//     this.ctx.fillStyle = arrowColor;
//     this.ctx.fill();

//     this.ctx.restore();
//   }

//   // Método para establecer o actualizar el texto personalizado
//   setText(text) {
//     this.customText = text;
//     // Redibujar para reflejar los cambios en el texto
//     this.redraw();
//   }

//   // Método para agregar o actualizar el texto en el lienzo
//   drawText() {
//     // Calcular la posición del texto centrado en la línea horizontal
//     const textWidth = this.ctx.measureText(this.customText).width;
//     const textX = this.lastPoint.x - (lineLength / 2) - (textWidth / 2);
//     const textY = this.lastPoint.y + this.textOffset.y;

//     this.ctx.save();
//     this.ctx.font = `${this.fontSize} Arial`;
//     this.ctx.fillStyle = this.fontColor;
//     this.ctx.fillText(this.customText, textX, textY);
//     this.ctx.restore();
//   }

//   // Redibujar el canvas
//   redraw() {
//     this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height); // Limpiar el canvas
//     this.drawArrow(this.lastPoint.x, this.lastPoint.y); // Redibujar la flecha
//     if (this.customText) {
//       this.drawText(); // Redibujar el texto si existe
//     }
//   }

//   // Manejar clics para editar el texto
//   handleClick(event) {
//     // Obtener las coordenadas del clic
//     const rect = this.ctx.canvas.getBoundingClientRect();
//     const x = event.clientX - rect.left;
//     const y = event.clientY - rect.top;

//     // Calcular la posición del texto en función del extremo de la línea horizontal
//     const textWidth = this.ctx.measureText(this.customText).width;
//     const textX = this.lastPoint.x - (lineLength / 2) - (textWidth / 2);
//     const textY = this.lastPoint.y + this.textOffset.y;

//     // Verificar si se hizo clic cerca del texto
//     if (
//       x >= textX &&
//       x <= textX + textWidth &&
//       y >= textY - parseInt(this.fontSize, 10) &&
//       y <= textY
//     ) {
//       // Crear un input para editar el texto
//       const input = document.createElement('input');
//       input.type = 'text';
//       input.value = this.customText;
//       input.style.position = 'absolute';
//       input.style.left = `${event.clientX}px`;
//       input.style.top = `${event.clientY}px`;
//       input.style.fontSize = this.fontSize;
//       input.style.zIndex = 1000;

//       // Añadir el input al body
//       document.body.appendChild(input);

//       // Seleccionar el texto del input
//       input.focus();
//       input.select();

//       // Manejar la actualización del texto al presionar Enter o al perder el foco
//       input.addEventListener('blur', () => {
//         this.setText(input.value);
//         document.body.removeChild(input); // Remover el input
//       });

//       input.addEventListener('keydown', (e) => {
//         if (e.key === 'Enter') {
//           this.setText(input.value);
//           document.body.removeChild(input); // Remover el input
//         }
//       });
//     }
//   }

//   // Dibujar la flecha en el lienzo
//   draw() {
//     this.drawArrow(this.lastPoint.x, this.lastPoint.y); // Dibujar la flecha

//     // Dibujar el texto si hay alguno establecido
//     if (this.customText) {
//       this.drawText();
//     }
//   }
// }