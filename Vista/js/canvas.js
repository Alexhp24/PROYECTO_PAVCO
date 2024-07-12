import { getMousePos } from "./utils.js";

import { MontantesDes } from "./desague/MontantesDes.js";
import { DesagueYEE } from "./desague/DesagueYEE.js";
import { Desague90 } from "./desague/Desague90.js";
import { DesagueTEE } from "./desague/DesagueTEE.js";
import { CodoAbajo } from "./desague/CodoAbajo.js";
import { CodoHciaAbajo } from "./desague/CodoHciaAbajo.js";
import { ReguistroBronce } from "./desague/ReguistroBronce.js";
import { CajaReguistro } from "./desague/CajaReguistro.js";
import { CodoCrusesDes } from "./desague/CodoCrusesDes.js";
import { TeeSanitario } from "./desague/TeeSanitario.js";
/*
import { Tubo3_4 } from "./desague/Tubo3_4.js";
import { TeeSanitario } from "./desague/TeeSanitario.js";
import { TeeSanitario } from "./desague/TeeSanitario.js"; */

//agua
import { Tubo02 } from "./desague/Tubo02.js";
import { Tubo04 } from "./desague/Tubo04.js";

import { TuboCaliente } from "./agua/tubo_caliente.js";
import { TuboFria } from "./agua/tubo_fria.js";

import { Tubo } from "./tubo.js";

import { CodoY } from "./agua/codoY.js";
import { CodoT } from "./agua/codoT.js";
import { CodoArriba } from "./agua/CodoArriba.js";
import { CodoAbajoA } from "./agua/CodoAbajoA.js";
import { Reduccion } from "./agua/Reduccion.js";
import { Montantes } from "./agua/Montantes.js";
import { TeeAbajo } from "./agua/TeeAbajo.js";
import { TeeArriba } from "./agua/TeeArriba.js";
import { UnionUniversal } from "./agua/UnionUniversal.js";
import { ValvulaCheck } from "./agua/ValvulaCheck.js";
import { LlaveGeneral } from "./agua/LlaveGeneral.js";
import { CrucesinConexion } from "./agua/CrucesinConexion.js";
import { Codo90 } from "./agua/codo90.js";

import { Node } from "./node.js";

import { Tubo34 } from "./agua/tubo3_4.js";
import { Tubo112 } from "./agua/tubo11_2.js";
import { Tubo114 } from "./agua/tubo11_4.js";

import { Codo34 } from "./agua/codo34.js";
import { Codo114 } from "./agua/codo114.js";
import { Codo112 } from "./agua/codo112.js";


////
const fileInput = document.getElementById("fileInput");
const canvas = document.getElementById("pdfCanvas");

const saveImg = document.querySelector("#save-img");
const savePdf = document.querySelector("#savePdf");

const ctx = canvas.getContext("2d");
const pdfCanvas = document.createElement("canvas");
const pdfCtx = pdfCanvas.getContext("2d");

//ZOOM
const zoomInButton = document.getElementById("zoomInButton");
const zoomOutButton = document.getElementById("zoomOutButton");

let scale = 1.7;
const shapes = [];
const nodes = [];
const instances = {};
let tmpShape = null;
let selectedNode = null;
let pdfData = null;

window["nodes"] = nodes;

zoomInButton.addEventListener("click", function () {
  scale += 0.1;
  renderPDF();
});

zoomOutButton.addEventListener("click", function () {
  if (scale > 0.1) {
    scale -= 0.1;
    renderPDF();
  }
});

//PDF
function renderPDF() {
  pdfjsLib.getDocument(pdfData).promise.then((pdf) => {
    pdf.getPage(1).then((page) => {
      // Get the first page
      const viewport = page.getViewport({ scale: scale });
      canvas.height = pdfCanvas.height = viewport.height;
      canvas.width = pdfCanvas.width = viewport.width;
      const renderContext = {
        canvasContext: pdfCtx,
        viewport: viewport,
      };
      page.render(renderContext);
    });
  });
}

//TUBOS DE AGUA
document
  .getElementById("toggleColdPipe").addEventListener("click", function (event) {
    tmpShape = new TuboFria(canvas, 0);
    selectedNode = new Node(getMousePos(canvas, event), canvas, "blue");
  });
// NUEVOS 
document
  .getElementById("toggle34").addEventListener("click", function (event) {
    tmpShape = new Tubo34(canvas, 0);
    selectedNode = new Node(getMousePos(canvas, event), canvas, "blue");
  });
  document
  .getElementById("toggle112").addEventListener("click", function (event) {
    tmpShape = new Tubo112(canvas, 0);
    selectedNode = new Node(getMousePos(canvas, event), canvas, "blue");
  });
  document
  .getElementById("toggle114").addEventListener("click", function (event) {
    tmpShape = new Tubo114(canvas, 0);
    selectedNode = new Node(getMousePos(canvas, event), canvas, "blue");
  });
 
document
.getElementById("toggleHotPipe")
.addEventListener("click", function (event) {
  tmpShape = new TuboCaliente(canvas, 0);
  selectedNode = new Node(getMousePos(canvas, event), canvas, "blue");
});


//TUBOS DE DESAGUE
document.getElementById("tubo02").addEventListener("click", function (event) {
  tmpShape = new Tubo04(canvas, "pink", 0);
  selectedNode = new Node(getMousePos(canvas, event), canvas, "pink");
});

document.getElementById("tubo04").addEventListener("click", function (event) {
  tmpShape = new Tubo02(canvas, "orange", 0);
  selectedNode = new Node(getMousePos(canvas, event), canvas, "orange");
});

// ACCESORIO DE  AGUA
document.getElementById("toggleY").addEventListener("click", function (event) {
  tmpShape = new CodoY(canvas, "#4C4948");
  selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
});

document.getElementById("toggleX").addEventListener("click", function (event) {
  tmpShape = new CodoT(canvas, "#4C4948");
  selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
});
/// codos nuevos por diametro de 90
document.getElementById("toggle90").addEventListener("click", function (event) {
  tmpShape = new Codo90(canvas, "#4C4948");
  selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
});

document.getElementById("togglecodo34").addEventListener("click", function (event) {
  tmpShape = new Codo34(canvas, "#4C4948");
  selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
});

document.getElementById("togglecodo114").addEventListener("click", function (event) {
  tmpShape = new Codo114(canvas, "#4C4948");
  selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
});

document.getElementById("togglecodo112").addEventListener("click", function (event) {
  tmpShape = new Codo112(canvas, "#4C4948");
  selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
});




document.getElementById("toggleCA").addEventListener("click", function (event) {
  tmpShape = new CodoArriba(canvas, "#09BBD7");
  selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
});

document.getElementById("toggleCD").addEventListener("click", function (event) {
  tmpShape = new CodoAbajoA(canvas, "#09BBD7");
  selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
});

document
  .getElementById("toggleReduccion")
  .addEventListener("click", function (event) {
    tmpShape = new Reduccion(canvas, "#00FF00");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });

document
  .getElementById("toggleMontantes")
  .addEventListener("click", function (event) {
    tmpShape = new Montantes(canvas, "#09BBD7");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });

document
  .getElementById("toggleTeeAbajo")
  .addEventListener("click", function (event) {
    tmpShape = new TeeAbajo(canvas, "#09BBD7");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });

document
  .getElementById("toggleTeeArriba")
  .addEventListener("click", function (event) {
    tmpShape = new TeeArriba(canvas, "#09BBD7");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });

document
  .getElementById("toggleUnionUniversal")
  .addEventListener("click", function (event) {
    tmpShape = new UnionUniversal(canvas, "#09BBD7");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });

document
  .getElementById("toggleValvulaCheck")
  .addEventListener("click", function (event) {
    tmpShape = new ValvulaCheck(canvas, "#09BBD7");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });

document
  .getElementById("toggleLlaveGeneral")
  .addEventListener("click", function (event) {
    tmpShape = new LlaveGeneral(canvas, "#EB34F7");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });

document
  .getElementById("toggleCrucesinConexion")
  .addEventListener("click", function (event) {
    tmpShape = new CrucesinConexion(canvas, "orange");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });

// ACCSESORIO DE DESAGUE
document
  .getElementById("CodoDesague_YEE")
  .addEventListener("click", function (event) {
    tmpShape = new DesagueYEE(canvas, "blue");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });

document
  .getElementById("CodoDesague_TEE")
  .addEventListener("click", function (event) {
    tmpShape = new DesagueTEE(canvas, "orange");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });

document
  .getElementById("CodoDesague_90")
  .addEventListener("click", function (event) {
    tmpShape = new Desague90(canvas, "blue");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });

document
  .getElementById("CodoMontantesDes")
  .addEventListener("click", function (event) {
    tmpShape = new MontantesDes(canvas, "blue");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });

document
  .getElementById("CodoCodoAbajo")
  .addEventListener("click", function (event) {
    tmpShape = new CodoAbajo(canvas, "blue");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });

document
  .getElementById("CodoCodoHciaAbajo")
  .addEventListener("click", function (event) {
    tmpShape = new CodoHciaAbajo(canvas, "blue");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });

document
  .getElementById("CodoReguistroBronce")
  .addEventListener("click", function (event) {
    tmpShape = new ReguistroBronce(canvas, "blue");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });

document
  .getElementById("CodoCajaReguistro")
  .addEventListener("click", function (event) {
    tmpShape = new CajaReguistro(canvas, "blue");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });

document
  .getElementById("CodoCodoCrusesDes")
  .addEventListener("click", function (event) {
    tmpShape = new CodoCrusesDes(canvas, "blue");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });

document
  .getElementById("CodoTeeSanitario")
  .addEventListener("click", function (event) {
    tmpShape = new TeeSanitario(canvas, "blue");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });

fileInput.addEventListener("change", function (event) {
  const file = event.target.files[0];
  const fileReader = new FileReader();
  fileReader.onload = (e) => {
    pdfData = new Uint8Array(e.target.result);
    renderPDF();
  };
  fileReader.readAsArrayBuffer(file);
});

function getContainerFor(type) {
  instances[type] ??= [];
  return instances[type];
}

function updateCount(shape) {
  const type = shape.constructor.name;
  const container = getContainerFor(type);
  let count = container.length;
  document.getElementById(type).textContent = count;
}

function addShape() {
  if (tmpShape?.done()) {
    const type = tmpShape.constructor.name;
    const container = getContainerFor(type);
    container.push(tmpShape);
    shapes.push(tmpShape);
    updateCount(tmpShape);
    if (tmpShape instanceof Tubo) {
      const lastNode = tmpShape.fin;
      tmpShape = new tmpShape.constructor(canvas, 0);
      const node = tmpShape.getNextNode(lastNode);
      selectedNode = tmpShape.getNextNode({ x: node.x, y: node.y });
      return;
    }
  } else {
    nodes.pop();
  }
  tmpShape = null;
}

function deleteShape(delShape) {
  const type = delShape.constructor.name;
  const container = getContainerFor(type);
  container.splice(container.indexOf(delShape), 1);
  shapes.splice(shapes.indexOf(delShape), 1);
  updateCount(delShape);
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    tmpShape = null;
    selectedNode = null;
  }
});

document.querySelectorAll(".shape-button").forEach(function (button) {
  button.addEventListener("click", function () {
    addShape();
  });
});

canvas.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

canvas.addEventListener("mouseup", function (event) {
  if (tmpShape) {
    const hitNode = nodes.find(function (node) {
      return node.hitNode(selectedNode);
    });
    if (hitNode) {
      selectedNode = tmpShape.getNextNode(hitNode);
    } else {
      nodes.push(selectedNode);
      selectedNode = tmpShape.getNextNode(selectedNode);
    }
    if (selectedNode) {
      selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
    }

    if (!selectedNode) {
      addShape();
    }
  } else if (!selectedNode) {
    const hitShape = shapes.find(function (shape) {
      return shape.hitNode(getMousePos(canvas, event));
    });
    if (hitShape && event.button === 2) {
      deleteShape(hitShape);
      selectedNode = null;
    } else {
      selectedNode = nodes.find(function (node) {
        return node.hitNode(getMousePos(canvas, event));
      });
    }
  } else {
    selectedNode = null;
  }
});
// TODO: instead use a handle node move, each shape will define how
//       to handle the movement
canvas.addEventListener("mousemove", function (event) {
  if (selectedNode) {
    const mousePos = getMousePos(canvas, event);
    selectedNode.x = mousePos.x;
    selectedNode.y = mousePos.y;
  }
});

canvas.addEventListener("dblclick", function (event) {
  const hitShape = shapes.find(function (shape) {
    if (shape instanceof Tubo) {
      return false;
    } else {
      return shape.hitNode(getMousePos(canvas, event));
    }
  });
  if (hitShape) {
    hitShape.rotate(event);
  }
});

// IMG Y PDF
saveImg.addEventListener("click", () => {
  const link = document.createElement("a"); // creating <a> element
  link.download = `${Date.now()}.jpg`; // passing current date as link download value
  link.href = canvas.toDataURL(); // passing canvasData as link href value
  link.click(); // clicking link to download image
});

savePdf.addEventListener("click", () => {
  // Importing jsPDF
  const { jsPDF } = window.jspdf;

  // Creating a new jsPDF instance
  const pdf = new jsPDF();

  // Converting the canvas content to an image data URL
  const imgData = canvas.toDataURL("image/jpeg");

  // Adding the image data to the PDF
  pdf.addImage(imgData, "JPEG", 0, 0);

  // Saving the PDF with the current date as the filename
  pdf.save(`${Date.now()}.pdf`);
});

function renderLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(pdfCanvas, 0, 0);
  shapes.forEach(function (shape) {
    shape.draw();
  });
  nodes.forEach(function (node) {
    node.draw();
  });
  selectedNode?.draw();
  tmpShape?.draw();
  requestAnimationFrame(renderLoop);
}

requestAnimationFrame(renderLoop);
