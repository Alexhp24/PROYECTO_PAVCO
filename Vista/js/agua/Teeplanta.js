import { SingleShapeBase } from "../single_shape_base.js";

const verticalLength = 10;
const horizontalLength = 10;
const additionalLine1Length = 25; // Longitud de la primera línea horizontal adicional en mm
const additionalLine2Length = 25; // Longitud de la segunda línea horizontal adicional en mm
const additionalLine1Offset = 0; // Separación de la primera línea horizontal adicional
const additionalLine2Offset = 0; // Separación de la segunda línea horizontal adicional
const verticalLineLength = 25; // Longitud de la línea vertical adicional en mm
const verticalLineOffset = 0; // Separación de la línea vertical adicional desde el borde de la T

export class Teeplanta extends SingleShapeBase {
  constructor(ctx, color, ) {
    super(ctx, color);
    this.label = `Tee planta`;
    this.additionalLine1Length = additionalLine1Length;
    this.additionalLine2Length = additionalLine2Length;
    this.additionalLine1Offset = additionalLine1Offset;
    this.additionalLine2Offset = additionalLine2Offset;
  }

  drawT(x, y) {
    // Guardar el contexto actual
    this.ctx.save();

    // Mover el contexto al punto de dibujo y rotar
    this.ctx.translate(x, y);
    this.ctx.rotate((this.rotation * Math.PI) / 180);

    const verticalStartX = 0;
    const verticalStartY = -verticalLength / 2;
    const horizontalStartX = -horizontalLength / 2;
    const horizontalStartY = -verticalLength / 2;

    this.ctx.beginPath();

    // Dibuja la parte vertical de la T
    this.ctx.moveTo(verticalStartX, verticalStartY);
    this.ctx.lineTo(verticalStartX, verticalStartY + verticalLength);

    this.ctx.moveTo(verticalStartX - 3, verticalStartY + verticalLength);
    this.ctx.lineTo(verticalStartX + 3, verticalStartY + verticalLength);

    // Dibuja la parte horizontal de la T
    this.ctx.moveTo(horizontalStartX, horizontalStartY);
    this.ctx.lineTo(horizontalStartX + horizontalLength, horizontalStartY);

    this.ctx.moveTo(horizontalStartX, horizontalStartY - 3);
    this.ctx.lineTo(horizontalStartX, horizontalStartY + 3);
    this.ctx.moveTo(horizontalStartX + horizontalLength, horizontalStartY - 3);
    this.ctx.lineTo(horizontalStartX + horizontalLength, horizontalStartY + 3);

    this.ctx.moveTo(verticalStartX - 3, verticalStartY);
    this.ctx.lineTo(verticalStartX + 3, verticalStartY);

    // Dibuja la primera línea horizontal adicional a la derecha
    const additionalLine1RightX = horizontalStartX + horizontalLength + this.additionalLine1Offset;
    const additionalLine1RightY = horizontalStartY;
    this.ctx.strokeStyle = this.additionalLine1Color;
    this.ctx.moveTo(additionalLine1RightX, additionalLine1RightY);
    this.ctx.lineTo(additionalLine1RightX + this.additionalLine1Length, additionalLine1RightY);

    // Dibuja la segunda línea horizontal adicional a la izquierda
    const additionalLine2LeftX = horizontalStartX - this.additionalLine2Length - this.additionalLine2Offset;
    const additionalLine2LeftY = horizontalStartY;
    this.ctx.strokeStyle = this.additionalLine2Color;
    this.ctx.moveTo(additionalLine2LeftX, additionalLine2LeftY);
    this.ctx.lineTo(additionalLine2LeftX + this.additionalLine2Length, additionalLine2LeftY);

    // Dibuja la línea vertical adicional
    this.ctx.strokeStyle = '	#blue';
    this.ctx.lineWidth = 2;

    // Dibuja la línea vertical adicional pegada al borde
    const verticalLineX = verticalStartX; // Posición horizontal de la línea vertical
    const verticalLineY = verticalStartY + verticalLength; // Posición vertical de inicio
    this.ctx.moveTo(verticalLineX, verticalLineY);
    this.ctx.lineTo(verticalLineX, verticalLineY + verticalLineLength);

    this.ctx.stroke();

    this.ctx.font = "10px Arial";
    this.ctx.fillText(this.label, verticalStartX + 5, verticalStartY - 10);

    // Restaurar el contexto al estado original
    this.ctx.restore();
  }

  draw() {
    this.drawT(this.lastPoint.x, this.lastPoint.y);
  }

  fixPosition(x, y) {
    this.fixed = true;
    this.fixedPosition = { x, y };
  }
}
