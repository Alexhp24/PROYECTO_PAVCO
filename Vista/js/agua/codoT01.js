
import { SingleShapeBase } from "../single_shape_base.js";

const verticalLength = 10;
const horizontalLength = 10;

export class CodoT01 extends SingleShapeBase {
  constructor(ctx, color) {
    super(ctx, color);
    this.label = `Tee 01P`;
  }

  drawT(x, y) {
    // Guardar el contexto actual
    this.ctx.save();

    // Mover el contexto al punto de dibujo y rotar
    this.ctx.translate(x, y + 6);
    this.ctx.rotate((this.rotation * Math.PI) / 180);

    const verticalStartX = 0;
    const verticalStartY = -verticalLength / 2;
    const horizontalStartX = -horizontalLength / 2;
    const horizontalStartY = -verticalLength / 2;

    this.ctx.beginPath();

    this.ctx.moveTo(verticalStartX, verticalStartY);
    this.ctx.lineTo(verticalStartX, verticalStartY + verticalLength);

    this.ctx.moveTo(verticalStartX - 3, verticalStartY + verticalLength);
    this.ctx.lineTo(verticalStartX + 3, verticalStartY + verticalLength);

    this.ctx.moveTo(horizontalStartX, horizontalStartY);
    this.ctx.lineTo(horizontalStartX + horizontalLength, horizontalStartY);

    this.ctx.moveTo(horizontalStartX, horizontalStartY - 3);
    this.ctx.lineTo(horizontalStartX, horizontalStartY + 3);
    this.ctx.moveTo(horizontalStartX + horizontalLength, horizontalStartY - 3);
    this.ctx.lineTo(horizontalStartX + horizontalLength, horizontalStartY + 3);

    this.ctx.moveTo(verticalStartX - 3, verticalStartY);
    this.ctx.lineTo(verticalStartX + 3, verticalStartY);

    this.ctx.lineWidth = 3;
    this.ctx.strokeStyle = "blue";

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
