import { PackLegacy } from "./packs/packLegacy";
import { Pack2019 } from "./packs/pack2019";
import { Pack2020 } from "./packs/pack2020";
import { Pack2021 } from "./packs/pack2021";
import { Pack2022 } from "./packs/pack2022";
import { Pack2023 } from "./packs/pack2023";
import { Pack2024 } from "./packs/pack2024";
import { Pack2025 } from "./packs/pack2025";

// paquetes
const packs = {
  Legado: PackLegacy,
  2019: Pack2019,
  2020: Pack2020,
  2021: Pack2021,
  2022: Pack2022,
  2023: Pack2023,
  2024: Pack2024,
  2025: Pack2025,
};

const packList = document.getElementById("content");
const packYear = document.getElementById("pack-year");

const displayPack = (pack) => {
  packList.innerHTML += `
    <div class="pack">
      <div class="pack-download">
        <div class="link-pack" >
          <div class="pack-year">
            <h4>${pack.packYear}</h4>
          </div>
          <div class="pack-title">
            <h4>${pack.packTitle}</h4>
          </div>
          <div class="pack-img">
            <img src="${pack.packImg}" alt="${pack.packTitle}">
          </div>
          <div class="pack-btn">
            <a href="${pack.downloadLink}" class="pack-download-btn">
              Descargar
            </a>
          </div>
          <div class="pack-info">
            <p>Actualizado al ${
              pack.updated
                ? new Date(pack.updated).toLocaleDateString("es-ES", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })
                : pack.packYear
            } | ${pack.size}</p>
          </div>
        </div>
      </div>
    </div>
  `;
};

// const displayPackContent = (pack) => {
// 	packYear.innerHTML = `<h2>${pack[0].packYear}</h2>`;
// 	packList.innerHTML = '';
// 	pack.forEach((packItem) => {
// 		if (packItem.frame) {
// 			packList.innerHTML += `
//         <div class="pack">
//           <div class="pack-download-iframes">
//             <iframe class="frametest" src=${packItem.frame} frameborder="0"></iframe>
//           </div>
//         </div>
//       `;
// 		} else {
// 			displayPack(packItem);
// 		}
// 	});
// };
const displayPackContent = (pack) => {
  // Check if the pack is Pack2025
  const isPack2025 = pack === Pack2025;

  // Conditionally add the question text only for Pack2025
  packYear.innerHTML = isPack2025
    ? `<div class="pack-year-container">
         <h2>${pack[0].packYear}</h2>
         <div class="question-text-container">
          <a href="#faq" class="question-text">
            ¿Qué instalador debo descargar?
          </a>
          <span class="material-symbols-outlined">
             help
          </span>
         </div>
       </div>`
    : `<h2>${pack[0].packYear}</h2>`;

  packList.innerHTML = "";
  pack.forEach((packItem) => {
    if (packItem.frame) {
      packList.innerHTML += `
        <div class="pack">
          <div class="pack-download-iframes">
            <iframe class="frametest" src=${packItem.frame} frameborder="0"></iframe>
          </div>
        </div>
      `;
    } else {
      displayPack(packItem);
    }
  });
};

const getSelectedValue = () => {
  const selectedValue = document.getElementById("menuSelector").value;
  return selectedValue;
};

const btnBuscar = document.getElementById("btnBuscar");
btnBuscar.addEventListener("click", () => {
  const value = getSelectedValue();
  const selectedPack = packs[value];
  displayPackContent(selectedPack);
});

// display pack2023 on load
window.onload = () => {
  displayPackContent(Pack2024);
};
