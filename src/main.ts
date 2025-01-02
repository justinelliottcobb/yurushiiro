import "./style.scss";
import colors from "./colors.json";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  if (!container) return;

  // Clear any placeholder content
  container.innerHTML = "<h1>Traditional Japanese Colors (伝統色)</h1>";

  // Create color series sections
  colors.forEach((series) => {
    const seriesSection = document.createElement("div");
    seriesSection.className = "color-series";

    seriesSection.innerHTML = `
      <h2 class="series-title">${series["series-name"]}</h2>
      <div class="color-grid">
        ${series.series
          .map(
            (color) => `
          <div class="color-swatch" style="background-color: ${color.hex};">
            <div class="color-info">
              <div class="color-name">${color.english}</div>
              <div class="color-romaji">${color.name}</div>
              <div class="color-hex">${color.hex}</div>
            </div>
          </div>
        `,
          )
          .join("")}
      </div>
    `;

    container.appendChild(seriesSection);
  });
});
