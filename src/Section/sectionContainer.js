import { LS_KEY } from "../constants/index.js";
import { loadLocalStorage, saveLocalStorage } from "../utils/localStorage.js";
import { displaySelectedLine } from "./sectionPresenter.js";

const findLine = (selectedLineName) => {
  const currentLines = loadLocalStorage(LS_KEY.LINE);
  const selectLine = currentLines.filter((line) => {
    const lineName = Object.keys(line)[0];

    if (lineName === selectedLineName) {
      return line;
    }
  });

  return selectLine;
};

const sectionAddClicked = (selectLine) => {
  const currentLine = loadLocalStorage(LS_KEY.LINE);
  const sectionStation = document.getElementById("section-station-selector")
    .value;
  const sectionOrder = document.getElementById("section-order-input").value;

  const lineName = Object.keys(selectLine)[0];
  const currentSectionStations = Object.values(selectLine)[0];
  const newSection = {};
  currentSectionStations.splice(sectionOrder, 0, sectionStation);

  currentLine.map((line) => {
    if (lineName === Object.keys(line)[0]) {
      line[lineName] = currentSectionStations;
    }

    return line;
  });

  saveLocalStorage(LS_KEY.LINE, currentLine);
};

const activateAddButton = (selectLine) => {
  const sectionAddButton = document.getElementById("section-add-button");

  sectionAddButton.addEventListener("click", () =>
    sectionAddClicked(selectLine)
  );
};

const sectionLineMenuClicked = (e) => {
  const {
    target: { innerText: selectedLineName },
  } = e;

  const selectLine = findLine(selectedLineName)[0];
  const lineName = Object.keys(selectLine)[0];
  const stations = Object.values(selectLine)[0];

  const isDisplayed = displaySelectedLine(lineName, stations);

  if (isDisplayed) {
    activateAddButton(selectLine);
  }
};

const sectionContainer = () => {
  const sectionLineMenuButtons = document.getElementsByClassName(
    "section-line-menu-button"
  );

  for (let i = 0; i < sectionLineMenuButtons.length; i++) {
    sectionLineMenuButtons[i].addEventListener("click", sectionLineMenuClicked);
  }
};

export default sectionContainer;
