import lineManager from "./Line/index.js";
import sectionManager from "./Section/index.js";
import stationManager from "./Station/index.js";

const menu = document.getElementsByClassName("menu")[0];

const init = () => {
  const stationManagerButton = document.getElementById(
    "station-manager-button"
  );
  const lineManagerButton = document.getElementById("line-manager-button");
  const sectionManagerButton = document.getElementById(
    "section-manager-button"
  );
  const mapManagerButton = document.getElementById("map-print-manager-button");

  stationManagerButton.addEventListener("click", stationManager);
  lineManagerButton.addEventListener("click", lineManager);
  sectionManagerButton.addEventListener("click", sectionManager);
};

if (menu) {
  init();
}
