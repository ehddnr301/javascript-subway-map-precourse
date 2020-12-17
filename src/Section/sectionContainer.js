import { LS_KEY } from "../constants/index.js";
import { loadLocalStorage } from "../utils/localStorage.js";
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

const sectionLineMenuClicked = (e) => {
  const {
    target: { innerText: selectedLineName },
  } = e;

  const selectLine = findLine(selectedLineName)[0];
  const lineName = Object.keys(selectLine)[0];
  const stations = Object.values(selectLine)[0];

  displaySelectedLine(lineName, stations);
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
