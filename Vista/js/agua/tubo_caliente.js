import { Tubo } from "../tubo.js";
export class TuboCaliente extends Tubo {
  constructor(canvas, pipeStart) {
    super(canvas, "red", pipeStart);
  }
}
