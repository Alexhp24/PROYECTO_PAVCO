import { getMousePos } from "./utils.js";

import {  Texto } from "./agua/texto.js";
// SALIDA Y ENTRADA
import { Salida } from "./agua/salida.js";
import { Entrada } from "./agua/entrada.js";

import { MontantesDes } from "./desague/MontantesDes.js";
// CODO DE 45
import { Codo45 } from "./desague/Codo45.js";
import { Codo4503 } from "./desague/codo4503.js";
import { Codo4504 } from "./desague/codo4504.js";
import { Codo4506 } from "./desague/codo4506.js";
import { Codo4508 } from "./desague/codo4508.js";
// SUMIDEROS
import { Sumidero } from "./desague/Sumidero.js";
import {Sumidero04} from "./desague/sumidero04.js";
// import { Sumidero06 } from "./desague/sumidero06.js";
// REGUISTRO BRONCE
import { ReguistroBronce } from "./desague/ReguistroBronce.js";
import { ReguistroBronce04 } from "./desague/reguistrobronce04.js";
import { ReguistroBronce06 } from "./desague/reguistrobronce06.js";
// CODO YEE
import { DesagueYEE } from "./desague/DesagueYEE.js";
import { DesagueYEE022 } from "./desague/desagueYEE022.js";
import { DesagueYEE04 } from "./desague/desagueYEE04.js";
// import { DesagueYEE06 } from "./desague/desagueYEE06.js";
// import { DesagueYEE08 } from "./desague/desagueYEE08.js";
// CODO TEE DESAGUE
import { DesagueTEE } from "./desague/DesagueTEE.js";
import { DesagueTEE03 } from "./desague/desagueTEE03.js";
import { DesagueTEE04 } from "./desague/desagueTEE04.js";
import { DesagueTEE06 } from "./desague/desagueTEE06.js";
import { DesagueTEE08 } from "./desague/desagueTEE08.js";
// CODO TEE SANITARIA DESAGUE
import { TeeSanitario } from "./desague/TeeSanitario.js";
import { TeeSanitario03 } from "./desague/Teesanitario03.js";
import { TeeSanitario04 } from "./desague/Teesanitario04.js";
import { TeeSanitario06 } from "./desague/Teesanitario06.js";
// import { TeeSanitario08 } from "./desague/Teesanitario08.js";

import { CodoAbajo } from "./desague/CodoAbajo.js";
import { CodoHciaAbajo } from "./desague/CodoHciaAbajo.js";
import { CajaReguistro } from "./desague/CajaReguistro.js";
import { CodoCrusesDes } from "./desague/CodoCrusesDes.js";

// import { Codo02 } from "./desague/Codo02.js";
// TIPOS DE TUBOO  DE DESAGUE
import { Tubo02 } from "./desague/Tubo02.js";
import { Tubo03 } from "./desague/tubo03.js";
import { Tubo04 } from "./desague/Tubo04.js";
import { Tubo06 } from "./desague/tubo06.js";
import { Tubo08 } from "./desague/tubo08.js";
import { Tuboventilacion } from "./desague/tubo_ventilacion.js";
// CODO DE 90 Desague
import { Desague90 } from "./desague/Desague90.js";
import { Desague03 } from "./desague/desague03.js";
import { Desague04 } from "./desague/desague04.js";
import { Desague06 } from "./desague/desague06.js";
import { Desague08 } from "./desague/desague08.js";
import  { Desague9042} from "./desague/desague9042.js";
//AGUA IMPORT
import { TuboCaliente } from "./agua/tubo_caliente.js";
import { TuboFria } from "./agua/tubo_fria.js";
import { Tubo } from "./tubo.js";

import { CodoArriba } from "./agua/CodoArriba.js";
import { CodoAbajoA } from "./agua/CodoAbajoA.js";

import { Montantes } from "./agua/Montantes.js";
import { TeeAbajo } from "./agua/TeeAbajo.js";
import { TeeArriba } from "./agua/TeeArriba.js";
import { UnionUniversal } from "./agua/UnionUniversal.js";
import { ValvulaCheck } from "./agua/ValvulaCheck.js";
import { LlaveGeneral } from "./agua/LlaveGeneral.js";
import { CrucesinConexion } from "./agua/CrucesinConexion.js";
import { Codo90 } from "./agua/codo90.js";
import { Cajareguistroagua } from "./agua/Cajareguistroagua.js";
import { Teeplanta } from "./agua/Teeplanta.js";
import { Grifolimpieza } from "./agua/Grifolimpieza.js";
import { Griforiego } from "./agua/Griforiego.js";

import { Node } from "./node.js";

import { Tubo34 } from "./agua/tubo3_4.js";
import { Tubo112 } from "./agua/tubo11_2.js";
import { Tubo114 } from "./agua/tubo11_4.js";

import { Codo34 } from "./agua/codo34.js";
import { Codo114 } from "./agua/codo114.js";
import { Codo112 } from "./agua/codo112.js";
import { Codo01 } from "./agua/codo01.js";
import { Codo002 } from "./agua/codo02.js";
import { Codo03 } from "./agua/codo03.js";
import { Codo04 } from "./agua/codo04.js";
//TEE
import { CodoT } from "./agua/codoT.js";
import { CodoT12 } from "./agua/codoT12.js";
import { CodoT01 } from "./agua/codoT01.js";
import { CodoT112 } from "./agua/codoT112.js";
import { CodoT114 } from "./agua/codoT114.js";
import { CodoT002 } from "./agua/codoT002.js";
import { CodoT03 } from "./agua/codoT03.js";
import { CodoT04 } from "./agua/codoT04.js";
//YEE
// import { CodoY } from "./agua/codoY.js";
// import { CodoY12 } from "./agua/codoY12.js";
// import { CodoY01 } from "./agua/codoY01.js";
// import { CodoY112 } from "./agua/codoY112.js";
// import { CodoY114 } from "./agua/codoY114.js";
// import { CodoY02 } from "./agua/codoY02.js";
// import { CodoY03 } from "./agua/codoY03.js";
// import { CodoY04 } from "./agua/codoY04.js";
//REDUCCION AGUA
import { Reduccion } from "./agua/Reduccion.js";
import { Reduccion12 } from "./agua/reduccion12.js";
import { Reduccion01 } from "./agua/reduccion01.js";
import { Reduccion112 } from "./agua/reduccion112.js";
import { Reduccion114 } from "./agua/reduccion114.js";
import { Reduccion02 } from "./agua/reduccion02.js";
import { Reduccion03 } from "./agua/reduccion03.js";
import { Reduccion04 } from "./agua/reduccion04.js";
// import { Sumidero04 } from "./desague/sumidero04.js";

////
const fileInput = document.getElementById("fileInput");

const canvas = document.getElementById("pdfCanvas");

const saveImg = document.querySelector("#save-img");
const savePdf = document.querySelector("#savePdf");

// const pdftabla = document.querySelector("#tabla");

const ctx = canvas.getContext("2d");
const pdfCanvas = document.createElement("canvas");
const pdfCtx = pdfCanvas.getContext("2d");

//ZOOM
const zoomInButton = document.getElementById("zoomInButton");
const zoomOutButton = document.getElementById("zoomOutButton");

let scale = 2.5;
const shapes = [];
const nodes = [];
const instances = {};
let tmpShape = null;
let selectedNode = null;
let pdfData = null;


window["nodes"] = nodes;

// ZOMMM
zoomInButton.addEventListener("click", function () {
  scale += 1.5;
  renderPDF();
});
zoomOutButton.addEventListener("click", function () {
  if (scale > 1.5) {
    scale -= 1.5;
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
  .getElementById("toggleColdPipe")
  .addEventListener("click", function (event) {
    tmpShape = new TuboFria(canvas, 0, event.target.textContent);
    selectedNode = new Node(getMousePos(canvas, event), canvas, "red");
  });
document.getElementById("toggle34").addEventListener("click", function (event) {
  tmpShape = new Tubo34(canvas, 0, event.target.textContent);
  selectedNode = new Node(getMousePos(canvas, event), canvas, "blue");
});
document
  .getElementById("toggle112")
  .addEventListener("click", function (event) {
    tmpShape = new Tubo112(canvas, 0, event.target.textContent);
    selectedNode = new Node(getMousePos(canvas, event), canvas, "blue");
  });
document
  .getElementById("toggle114")
  .addEventListener("click", function (event) {
    tmpShape = new Tubo114(canvas, 0, event.target.textContent);
    selectedNode = new Node(getMousePos(canvas, event), canvas, "blue");
  });
document
  .getElementById("toggleHotPipe")
  .addEventListener("click", function (event) {
    tmpShape = new TuboCaliente(canvas, 0, event.target.textContent);
    selectedNode = new Node(getMousePos(canvas, event), canvas, "blue");
  });
//TUBOS DE DESAGUE
document.getElementById("tubo02").addEventListener("click", function (event) {
  tmpShape = new Tubo02(canvas, 0, event.target.textContent);
  selectedNode = new Node(getMousePos(canvas, event), canvas, "#d35400");
});
document.getElementById("tubo03").addEventListener("click", function (event) {
  tmpShape = new Tubo03(canvas, 0, event.target.textContent);
  selectedNode = new Node(getMousePos(canvas, event), canvas, "#65b12e");
});

document.getElementById("tubo04").addEventListener("click", function (event) {
  tmpShape = new Tubo04(canvas, 0, event.target.textContent);
  selectedNode = new Node(getMousePos(canvas, event), canvas, "#C09849");
});
document.getElementById("tubo06").addEventListener("click", function (event) {
  tmpShape = new Tubo06(canvas, 0, event.target.textContent);
  selectedNode = new Node(getMousePos(canvas, event), canvas, "#0de8a9");
});
document.getElementById("tubo08").addEventListener("click", function (event) {
  tmpShape = new Tubo08(canvas, 0, event.target.textContent);
  selectedNode = new Node(getMousePos(canvas, event), canvas, "#553ff0");
});

document.getElementById("tuboventilacion09").addEventListener("click", function (event) {
  tmpShape = new Tuboventilacion(canvas, 0, event.target.textContent);
  selectedNode = new Node(getMousePos(canvas, event), canvas, "green");
});

// ACCESORIOS DE AGUA GENERAL
//ACCESORIOS DE AGUA YEE
// document.getElementById("toggleY").addEventListener("click", function (event) {
//   tmpShape = new CodoY(canvas, "orange");
//   selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
// });
// document
//   .getElementById("toggleY01")
//   .addEventListener("click", function (event) {
//     tmpShape = new CodoY01(canvas, "orange");
//     selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
//   });
// document
//   .getElementById("toggleY12")
//   .addEventListener("click", function (event) {
//     tmpShape = new CodoY12(canvas, "orange");
//     selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
//   });
// document
//   .getElementById("toggleY01")
//   .addEventListener("click", function (event) {
//     tmpShape = new CodoY01(canvas, "orange");
//     selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
//   });
// document
//   .getElementById("toggleY112")
//   .addEventListener("click", function (event) {
//     tmpShape = new CodoY112(canvas, "orange");
//     selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
//   });
// document
//   .getElementById("toggleY114")
//   .addEventListener("click", function (event) {
//     tmpShape = new CodoY114(canvas, "orange");
//     selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
//   });
// document
//   .getElementById("toggleY02")
//   .addEventListener("click", function (event) {
//     tmpShape = new CodoY02(canvas, "orange");
//     selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
//   });
// document
//   .getElementById("toggleY03")
//   .addEventListener("click", function (event) {
//     tmpShape = new CodoY03(canvas, "orange");
//     selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
//   });
// document
//   .getElementById("toggleY04")
//   .addEventListener("click", function (event) {
//     tmpShape = new CodoY04(canvas, "orange");
//     selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
//   });
//ACCESORIOS DE AGUA TEE
document.getElementById("toggleX").addEventListener("click", function (event) {
  tmpShape = new CodoT(canvas, "#4C4948");
  selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
});
document
  .getElementById("toggleTee12")
  .addEventListener("click", function (event) {
    tmpShape = new CodoT12(canvas, "#4C4948");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });
document
  .getElementById("toggleTee01")
  .addEventListener("click", function (event) {
    tmpShape = new CodoT01(canvas, "#4C4948");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });
document
  .getElementById("toggleTee112")
  .addEventListener("click", function (event) {
    tmpShape = new CodoT112(canvas, "#4C4948");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });

  document
  .getElementById("Texto1")
  .addEventListener("click", function (event) {
    tmpShape = new Texto(canvas, "#4C4948");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });

document
  .getElementById("toggleTee114")
  .addEventListener("click", function (event) {
    tmpShape = new CodoT114(canvas, "#4C4948");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });
document
  .getElementById("toggleTee02")
  .addEventListener("click", function (event) {
    tmpShape = new CodoT002(canvas, "#4C4948");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });
document
  .getElementById("toggleTee03")
  .addEventListener("click", function (event) {
    tmpShape = new CodoT03(canvas, "#4C4948");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });
document
  .getElementById("toggleTee04")
  .addEventListener("click", function (event) {
    tmpShape = new CodoT04(canvas, "#4C4948");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });

/// ACCESORIOS DE AGUA DE 90°
document.getElementById("toggle90").addEventListener("click", function (event) {
  tmpShape = new Codo90(canvas, "#4C4948");
  selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
});
document
  .getElementById("togglecodo34")
  .addEventListener("click", function (event) {
    tmpShape = new Codo34(canvas, "#4C4948");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });
document
  .getElementById("togglecodo01")
  .addEventListener("click", function (event) {
    tmpShape = new Codo01(canvas, "#4C4948");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });
document
  .getElementById("togglecodo114")
  .addEventListener("click", function (event) {
    tmpShape = new Codo114(canvas, "#4C4948");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });
document
  .getElementById("togglecodo112")
  .addEventListener("click", function (event) {
    tmpShape = new Codo112(canvas, "#4C4948");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });
document
  .getElementById("togglecodo02")
  .addEventListener("click", function (event) {
    tmpShape = new Codo002(canvas, "#4C4948");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });
document
  .getElementById("togglecodo03")
  .addEventListener("click", function (event) {
    tmpShape = new Codo03(canvas, "#4C4948");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });
document
  .getElementById("togglecodo04")
  .addEventListener("click", function (event) {
    tmpShape = new Codo04(canvas, "#4C4948");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });

//REDUCCION AGUA
document
  .getElementById("toggleReduccion")
  .addEventListener("click", function (event) {
    tmpShape = new Reduccion(canvas, "#00FF00");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });
document
  .getElementById("toggleReduccion12")
  .addEventListener("click", function (event) {
    tmpShape = new Reduccion12(canvas, "#00FF00");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });
document
  .getElementById("toggleReduccion01")
  .addEventListener("click", function (event) {
    tmpShape = new Reduccion01(canvas, "#00FF00");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });
document
  .getElementById("toggleReduccion112")
  .addEventListener("click", function (event) {
    tmpShape = new Reduccion112(canvas, "#00FF00");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });
document
  .getElementById("toggleReduccion114")
  .addEventListener("click", function (event) {
    tmpShape = new Reduccion114(canvas, "#00FF00");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });
document
  .getElementById("toggleReduccion02")
  .addEventListener("click", function (event) {
    tmpShape = new Reduccion02(canvas, "#00FF00");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });
document
  .getElementById("toggleReduccion03")
  .addEventListener("click", function (event) {
    tmpShape = new Reduccion03(canvas, "#00FF00");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });
document
  .getElementById("toggleReduccion04")
  .addEventListener("click", function (event) {
    tmpShape = new Reduccion04(canvas, "#00FF00");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });
//ca
document.getElementById("toggleCA").addEventListener("click", function (event) {
  tmpShape = new CodoArriba(canvas, "#09BBD7");
  selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
});
document
  .getElementById("toggleGrifolimpieza")
  .addEventListener("click", function (event) {
    tmpShape = new Grifolimpieza(canvas, "#09BBD7");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });

document
  .getElementById("toggleGriforiego")
  .addEventListener("click", function (event) {
    tmpShape = new Griforiego(canvas, "#09BBD7");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });

document
  .getElementById("toggleTeeplanta")
  .addEventListener("click", function (event) {
    tmpShape = new Teeplanta(canvas, "blue");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });

document
  .getElementById("toggleCajareguistroagua")
  .addEventListener("click", function (event) {
    tmpShape = new Cajareguistroagua(canvas, "yellow");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });

document.getElementById("toggleCD").addEventListener("click", function (event) {
  tmpShape = new CodoAbajoA(canvas, "#09BBD7");
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

//  ACCSESORIO DE DESAGUE
// ================DESAGUE CODO YEEE=================
document
  .getElementById("CodoDesague_YEE")
  .addEventListener("click", function (event) {
    tmpShape = new DesagueYEE(canvas, "blue");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });
document
  .getElementById("CodoDesagueYEE022")
  .addEventListener("click", function (event) {
    tmpShape = new DesagueYEE022(canvas, "blue");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });
document
  .getElementById("CodoDesagueYEE04")
  .addEventListener("click", function (event) {
    tmpShape = new DesagueYEE04(canvas, "blue");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });

// document
//   .getElementById("CodoDesagueYEE06")
//   .addEventListener("click", function (event) {
//     tmpShape = new DesagueYEE06(canvas, "blue");
//     selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
//   });
// document
//   .getElementById("CodoDesagueYEE08")
//   .addEventListener("click", function (event) {
//     tmpShape = new DesagueYEE08(canvas, "blue");
//     selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
//   });

// CODO TEE
document
  .getElementById("CodoDesague_TEE")
  .addEventListener("click", function (event) {
    tmpShape = new DesagueTEE(canvas, "blue");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });
document
  .getElementById("CodoTEEDesague03")
  .addEventListener("click", function (event) {
    tmpShape = new DesagueTEE03(canvas, "blue");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });
document
  .getElementById("CodoTEEDesague04")
  .addEventListener("click", function (event) {
    tmpShape = new DesagueTEE04(canvas, "blue");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });
document
  .getElementById("CodoTEEDesague06")
  .addEventListener("click", function (event) {
    tmpShape = new DesagueTEE06(canvas, "blue");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });
document
  .getElementById("CodoTEEDesague08")
  .addEventListener("click", function (event) {
    tmpShape = new DesagueTEE08(canvas, "blue");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });

//DESAGUE DE  CODO DE 90
document
  .getElementById("CodoDesague_90")
  .addEventListener("click", function (event) {
    tmpShape = new Desague90(canvas, "#cb4335");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });
document
  .getElementById("CodoDesague03")
  .addEventListener("click", function (event) {
    tmpShape = new Desague03(canvas, "#6B50EB");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });
document
  .getElementById("CodoDesague04")
  .addEventListener("click", function (event) {
    tmpShape = new Desague04(canvas, "#C260EB");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });

document
  .getElementById("CodoDesague06")
  .addEventListener("click", function (event) {
    tmpShape = new Desague06(canvas, "#50EB63");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });
document
  .getElementById("CodoDesague08")
  .addEventListener("click", function (event) {
    tmpShape = new Desague08(canvas, "#EB9E60");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });
  document
  .getElementById("CodoDesague42")
  .addEventListener("click", function (event) {
    tmpShape = new Desague9042(canvas, "#0069EB");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });

// document
//   .getElementById("CodoDesague02")
//   .addEventListener("click", function (event) {
//     tmpShape = new Desague02(canvas, "blue");
//     selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
//   });
// document
//   .getElementById("CodoDesague03")
//   .addEventListener("click", function (event) {
//     tmpShape = new Desague03(canvas, "blue");
//     selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
//   });
// document
//   .getElementById("CodoDesague04")
//   .addEventListener("click", function (event) {
//     tmpShape = new Desague04(canvas, "blue");
//     selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
//   });

// document
//   .getElementById("CodoDesague02")
//   .addEventListener("click", function (event) {
//     tmpShape = new Codo02(canvas, "blue");
//     selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
//   });
//sumidero corregir
document
  .getElementById("CodoSumidero")
  .addEventListener("click", function (event) {
    tmpShape = new Sumidero(canvas, "blue");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });
  document
  .getElementById("CodoSumidero04")
  .addEventListener("click", function (event) {
    tmpShape = new Sumidero04(canvas, "blue");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });

  // document
  // .getElementById("CodoSumidero06")
  // .addEventListener("click", function (event) {
  //   tmpShape = new Sumidero06(canvas, "blue");
  //   selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  // });



// codo de 45 corregir
document
  .getElementById("CodoCodo45")
  .addEventListener("click", function (event) {
    tmpShape = new Codo45(canvas, "blue");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });
document
  .getElementById("CodoCodo4503")
  .addEventListener("click", function (event) {
    tmpShape = new Codo4503(canvas, "blue");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });
document
  .getElementById("CodoCodo4504")
  .addEventListener("click", function (event) {
    tmpShape = new Codo4504(canvas, "blue");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });
document
  .getElementById("CodoCodo4506")
  .addEventListener("click", function (event) {
    tmpShape = new Codo4506(canvas, "blue");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });
document
  .getElementById("CodoCodo4508")
  .addEventListener("click", function (event) {
    tmpShape = new Codo4508(canvas, "blue");
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
  .getElementById("CodoReguistroBronce04")
  .addEventListener("click", function (event) {
    tmpShape = new ReguistroBronce04(canvas, "blue");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });
  document
  .getElementById("CodoReguistroBronce06")
  .addEventListener("click", function (event) {
    tmpShape = new ReguistroBronce06(canvas, "blue");
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
// ===========TE SANITARIO DESAGUE================
document
  .getElementById("CodoTeeSanitario")
  .addEventListener("click", function (event) {
    tmpShape = new TeeSanitario(canvas, "orange");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });
document
  .getElementById("CodoTeeSanitario03")
  .addEventListener("click", function (event) {
    tmpShape = new TeeSanitario03(canvas, "orange");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });
document
  .getElementById("CodoTeeSanitario04")
  .addEventListener("click", function (event) {
    tmpShape = new TeeSanitario04(canvas, "orange");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });
document
  .getElementById("CodoTeeSanitario06")
  .addEventListener("click", function (event) {
    tmpShape = new TeeSanitario06(canvas, "orange");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });
// document
//   .getElementById("CodoTeeSanitario08")
//   .addEventListener("click", function (event) {
//     tmpShape = new TeeSanitario08(canvas, "orange");
//     selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
//   });

// ENTRADA Y SALIDA

document
  .getElementById("toogleentrada")
  .addEventListener("click", function (event) {
    tmpShape = new Entrada(canvas, "orange");
    selectedNode = tmpShape.getNextNode(getMousePos(canvas, event));
  });
document
  .getElementById("tooglesalida")
  .addEventListener("click", function (event) {
    tmpShape = new Salida(canvas, "orange");
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
      tmpShape = new tmpShape.constructor(canvas, 0, tmpShape.nombre);
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
      const hitLine = shapes
        .filter((shape) => shape instanceof Tubo)
        .find(function (shape) {
          return shape.hitNode(selectedNode);
        });
      nodes.push(selectedNode);
      selectedNode = tmpShape.getNextNode(selectedNode);
      /* if (hitLine) {
        const oldSelected = new Node(selectedNode, canvas, "blue");
        tmpShape.getNextNode(hitLine.fin);
        addShape();
        selectedNode = oldSelected;
        deleteShape(hitLine);
        tmpShape = new TuboFria(canvas, 0, "");
        tmpShape.getNextNode(hitLine.inicio);
        selectedNode = tmpShape.getNextNode(selectedNode);
        deleteShape(hitLine);
      } */
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



// // TEXTO
// let modoTextoActivo = false; // Controla si se puede agregar texto
// let textos = []; // Almacena los textos dibujados y sus propiedades
// let textoSeleccionado = null; // Almacena el texto seleccionado

// // Agrega un evento al botón para activar el modo de agregar texto
// document.getElementById("botonModoTexto").addEventListener("click", activarModoTexto);

// // Función para activar el modo de agregar texto
// function activarModoTexto() {
//     modoTextoActivo = true;
// }
// console.log(activarModoTexto)

// // Función para agregar texto en el canvas
// function agregarTextoEnCanvas(canvas, texto, x, y, font = "16px Arial", color = "black") {
//     const ctx = canvas.getContext("2d");
//     ctx.font = font;
//     ctx.fillStyle = color;
//     ctx.fillText(texto, x, y);

//     // Mide el ancho del texto y almacena sus propiedades para la selección y eliminación
//     const textWidth = ctx.measureText(texto).width;
//     const textHeight = parseInt(font, 10); // Aproximación del alto basado en el tamaño de fuente

//     // Guarda el texto y sus propiedades en el array
//     textos.push({ texto, x, y, width: textWidth, height: textHeight, font, color });
// }

// // Maneja el clic en el canvas
// canvas.addEventListener("click", function(event) {
//     const rect = canvas.getBoundingClientRect();
//     const x = event.clientX - rect.left;
//     const y = event.clientY - rect.top;

//     if (modoTextoActivo) {
//         // Agrega el texto en la posición del clic
//         const inputTexto = document.getElementById("inputTexto").value;
        

//         agregarTextoEnCanvas(canvas, inputTexto, x, y, "20px Arial", "red");
//         modoTextoActivo = false; // Desactiva el modo de agregar texto
//         console.log(modoTextoActivo)
//     } else {
//         // Verifica si se ha hecho clic sobre algún texto
//         textoSeleccionado = null; // Resetea la selección
//         for (const item of textos) {
//             // Verifica si el clic está dentro del área del texto
//             if (x >= item.x && x <= item.x + item.width && y <= item.y && y >= item.y - item.height) {
//                 textoSeleccionado = item; // Selecciona el texto
//                 break;
//             }
//         }
//         // Redibuja el canvas con el texto seleccionado si hay alguno
//         redibujarCanvas(canvas);
        
//     }
// });

// // Función para redibujar el canvas con los textos
// function redibujarCanvas(canvas) {
//     ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpia el canvas

//     for (const item of textos) {
//         ctx.font = item.font;
//         ctx.fillStyle = item.color;
//         ctx.fillText(item.texto, item.x, item.y);

//         // Dibuja un borde si el texto está seleccionado
//         if (item === textoSeleccionado) {
//             ctx.strokeStyle = "red"; // Color del borde
//             ctx.lineWidth = 1;
//             ctx.strokeRect(item.x, item.y - item.height, item.width, item.height);
//         }
//     }
// }

// // Maneja el evento de presionar una tecla
// document.addEventListener("keydown", function(event) {
//     if ((event.key === "Delete" || event.key === "Backspace") && textoSeleccionado) {
//         // Elimina el texto seleccionado
//         textos = textos.filter(item => item !== textoSeleccionado);
//         textoSeleccionado = null; // Resetea la selección
//         redibujarCanvas(canvas); // Redibuja el canvas
//     }
// });



// // Función para activar el modo de agregar texto
// function activarModoTexto() {
//     modoTextoActivo = true;
// }

// // Función para agregar texto en el canvas
// function agregarTextoEnCanvas(canvas, texto, x, y, font = "16px Arial", color = "black") {
//     const ctx = canvas.getContext("2d");
//     ctx.font = font;
//     ctx.fillStyle = color;
//     ctx.fillText(texto, x, y);

//     // Mide el ancho del texto y almacena sus propiedades para la selección y eliminación
//     const textWidth = ctx.measureText(texto).width;
//     const textHeight = parseInt(font, 10); // Aproximación del alto basado en el tamaño de fuente

//     // Guarda el texto y sus propiedades en el array
//     textos.push({ texto, x, y, width: textWidth, height: textHeight, font, color });
// }

// // Maneja el clic en el canvas
// document.getElementById("pdfCanvas").addEventListener("click", function(event) {
//     const canvas = event.target;
//     const rect = canvas.getBoundingClientRect();
//     const x = event.clientX - rect.left;
//     const y = event.clientY - rect.top;

//     if (modoTextoActivo) {
//         // Agrega el texto en la posición del clic
//         const inputTexto = document.getElementById("inputTexto").value;
//         agregarTextoEnCanvas(canvas, inputTexto, x, y, "20px Arial", "blue");
//         modoTextoActivo = false; // Desactiva el modo de agregar texto
//     } else {
//         // Verifica si se ha hecho clic sobre algún texto
//         textoSeleccionado = null; // Resetea la selección
//         for (const item of textos) {
//             if (x >= item.x && x <= item.x + item.width && y <= item.y && y >= item.y - item.height) {
//                 textoSeleccionado = item; // Selecciona el texto
//                 break;
//             }
//         }
//         // Redibuja el canvas con el texto seleccionado si hay alguno
//         redibujarCanvas(canvas);
//     }
// });

// // Función para redibujar el canvas con los textos
// function redibujarCanvas(canvas) {
//     const ctx = canvas.getContext("2d");
//     ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpia el canvas

//     for (const item of textos) {
//         ctx.font = item.font;
//         ctx.fillStyle = item.color;
//         ctx.fillText(item.texto, item.x, item.y);

//         // Dibuja un borde si el texto está seleccionado
//         if (item === textoSeleccionado) {
//             ctx.strokeStyle = "red"; // Color del borde
//             ctx.lineWidth = 1;
//             ctx.strokeRect(item.x, item.y - item.height, item.width, item.height);
//         }
//     }
// }

// // Maneja el evento de presionar una tecla
// document.addEventListener("keydown", function(event) {
//     if ((event.key === "Delete" || event.key === "Backspace") && textoSeleccionado) {
//         // Elimina el texto seleccionado
//         textos = textos.filter(item => item !== textoSeleccionado);
//         textoSeleccionado = null; // Resetea la selección
//         redibujarCanvas(document.getElementById("pdfCanvas")); // Redibuja el canvas
//     }
// });









/////////////////////
// IMG
saveImg.addEventListener("click", () => {
  const link = document.createElement("a"); // creating <a> element
  link.download = `${Date.now()}.jpg`; // passing current date as link download value
  link.href = canvas.toDataURL(); // passing canvasData as link href value
  link.click(); // clicking link to download image
});


// PDF HORIZONTAL
savePdf.addEventListener("click", () => {
  // Importando jsPDF
  const { jsPDF } = window.jspdf;

  // Creando una nueva instancia de jsPDF con orientación horizontal
  const pdf = new jsPDF({ orientation: "landscape" });

  // Convirtiendo el contenido del canvas a una URL de datos de imagen
  const imgData = canvas.toDataURL("image/jpeg");

  // Añadiendo los datos de la imagen al PDF
  pdf.addImage(
    imgData,
    "JPEG",
    0,
    0,
    pdf.internal.pageSize.getWidth(),
    pdf.internal.pageSize.getHeight()
  );

  // Guardando el PDF con la fecha actual como nombre de archivo
  pdf.save(`${Date.now()}.pdf`);
});



document.getElementById("download-pdf").addEventListener("click", function () {
  // Obtener los datos de la tabla
  const table = document.getElementById("tabla1");
  const headers = Array.from(table.querySelectorAll("thead th")).map((th) =>
    th.textContent.trim()
  );
  const rows = Array.from(table.querySelectorAll("tbody tr")).map((tr) => {
    return Array.from(tr.querySelectorAll("td")).map((td) =>
      td.textContent.trim()
    );
  });

  // Preparar el contenido del PDF con encabezado y pie de página
  const docDefinition = {
    header: {
      columns: [
        {
          text: [
            { text: "RIZABAL\n", alignment: "left" }, // Texto en la izquierda
            { text: "Asociados\n", alignment: "left" }, // Otro texto en la izquierda
          ],
          margin: [20, 10, 0, 0],
        },
        {
          stack: [
            { text: "Teléfono: 987456321", alignment: "right" },
            { text: "Dirección: Jr. Bolívar", alignment: "right" },
            { text: "Correo: Rizabal@gmail.com", alignment: "right" },
          ],
          margin: [0, 10, 20, 10], // Márgenes ajustados [izquierda, arriba, derecha, abajo]
          alignment: "right", // Alinear el stack a la derecha
        },
      ],
    },
    footer: function (currentPage, pageCount) {
      return {
        text: `Página ${currentPage} de ${pageCount}`,
        alignment: "center",
        margin: [0, 10, 0, 0],
      };
    },
    content: [
      {
        text: " Reporte de agua  ", // Agregar un título al documento
        style: "title",
      },
      {
        table: {
          headerRows: 1,
          widths: "*", // Ajustar ancho de columnas automáticamente
          body: [
            headers, // Encabezados
            ...rows, // Datos de las filas
          ],
        },
        layout: "lightHorizontalLines", // Diseño de líneas horizontales ligeras
        alignment: "center", // Centrar la tabla
      },
    ],
    styles: {
      title: {
        fontSize: 18,
        bold: true,
        margin: [0, 0, 0, 20],
        alignment: "center", // Centrar el título
      },
    },
    defaultStyle: {
      fontSize: 12, // Tamaño de fuente por defecto para el contenido
    },
  };

  // Generar y descargar el PDF
  pdfMake.createPdf(docDefinition).download("Rizabal-pVC.pdf");
});

document.getElementById("proyect").addEventListener("click", function () {
  // Obtener los datos de la tabla
  const table = document.getElementById("tabla2");
  const headers = Array.from(table.querySelectorAll("thead th")).map((th) =>
    th.textContent.trim()
  );
  const rows = Array.from(table.querySelectorAll("tbody tr")).map((tr) => {
    return Array.from(tr.querySelectorAll("td")).map((td) =>
      td.textContent.trim()
    );
  });

  // Preparar el contenido del PDF con encabezado y pie de página
  const docDefinition = {
    header: {
      columns: [
        {
          text: [
            { text: "RIZABAL \n", alignment: "left" }, // Texto en la izquierda
            { text: "asociados\n", alignment: "left" }, // Otro texto en la izquierda
          ],
          margin: [20, 10, 0, 0],
        },
        {
          stack: [
            { text: "Teléfono: 987456321", alignment: "right" },
            { text: "Dirección: Jr. Bolívar", alignment: "right" },
            { text: "Correo: Rizabal@gmail.com", alignment: "right" },
          ],
          margin: [0, 10, 20, 10], // Márgenes ajustados [izquierda, arriba, derecha, abajo]
          alignment: "right", // Alinear el stack a la derecha
        },
      ],
    },
    footer: function (currentPage, pageCount) {
      return {
        text: `Página ${currentPage} de ${pageCount}`,
        alignment: "center",
        margin: [0, 10, 0, 0],
      };
    },
    content: [
      {
        text: "Reporte de desague", // Agregar un título al documento
        style: "title",
      },
      {
        table: {
          headerRows: 1,
          widths: "*", // Ajustar ancho de columnas automáticamente
          body: [
            headers, // Encabezados
            ...rows, // Datos de las filas
          ],
        },
        layout: "lightHorizontalLines", // Diseño de líneas horizontales ligeras
        alignment: "center", // Centrar la tabla
      },
    ],
    styles: {
      title: {
        fontSize: 18,
        bold: true,
        margin: [0, 0, 0, 20],
        alignment: "center", // Centrar el título
      },
    },
    defaultStyle: {
      fontSize: 12, // Tamaño de fuente por defecto para el contenido
    },
  };

  // Generar y descargar el PDF
  pdfMake.createPdf(docDefinition).download("Rizabal-pVC.pdf");
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
