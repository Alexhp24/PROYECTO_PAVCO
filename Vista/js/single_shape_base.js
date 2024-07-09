import { getMousePos } from "./utils.js";
import { Node } from "./node.js";

// Definir las longitudes de las líneas
export class SingleShapeBase {
  constructor(canvas, color) {
    this.lastPoint = null;
    this.color = color;
    this.canvas = canvas;
    this.rotation = 0;
    this.ctx = canvas.getContext("2d");
    this.isDone = false;
  }

  done() {
    return this.lastPoint;
  }

  canBeDone() {
    return this.isDone;
  }

  getNextNode(coord) {
    let node;
    if (coord instanceof Node) {
      node = coord;
    } else {
      node = new Node(coord, this.canvas, this.color);
    }
    this.lastPoint = node;
    if (coord instanceof Node) {
      return null;
    } else {
      return node;
    }
  }

  // Verificar si el clic está sobre la forma Y
  isMouseOnY(mouseX, mouseY, yShape) {
    const threshold = 10; // Umbral para considerar el clic dentro del área de la 'Y'
    const dx = Math.abs(mouseX - yShape.x);
    const dy = Math.abs(mouseY - yShape.y);
    return dx <= threshold && dy <= threshold;
  }

  hitNode(mouse) {
    if (this.isMouseOnY(mouse.x, mouse.y, this.lastPoint)) {
      return this.lastPoint;
    }
    return null;
  }

  registerYourself() {
    // Función para manejar el evento de doble clic
    this.rotate = (event) => {
      const { x, y } = getMousePos(this.canvas, event);
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

      // Calcular las coordenadas ajustadas para dibujar el codo lejos del punto de clic
      const adjustedX = this.lastPoint.x + rotatedX;
      const adjustedY = this.lastPoint.y + rotatedY;

      // Actualizar el último punto a las coordenadas ajustadas
      this.lastPoint.x = adjustedX;
      this.lastPoint.y = adjustedY;

      this.rotation = (this.rotation + 90) % 360;
    };
    this.addPoint = (event) => {
      this.isDone = true;
    };

    this.canvas.addEventListener("click", this.addPoint);
  }

  removeYourself() {
    this.canvas.removeEventListener("click", this.addPoint);
  }
}
//plantilla
