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
};

if (menu) {
  init();
}
