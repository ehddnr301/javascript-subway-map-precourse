import { LS_KEY } from "../constants/index.js";
import {
  clearLocalStorage,
  loadLocalStorage,
  saveLocalStorage,
} from "../utils/localStorage.js";
import { displayLines } from "./linePresenter.js";

const lineDeleteClicked = (event) => {
  const {
    target: {
      dataset: { line: targetLine },
    },
  } = event;
  const currentLines = loadLocalStorage(LS_KEY.LINE);
  const filteredLines = currentLines.filter((line) => {
    const lineName = Object.keys(line)[0];

    if (lineName !== targetLine) {
      return line;
    }
  });

  saveLocalStorage(LS_KEY.LINE, filteredLines);
  const isDisplayed = displayLines(filteredLines);

  if (isDisplayed) {
    activateLineDeleteButton();
  }
};

const activateLineDeleteButton = () => {
  const deleteLineButtons = document.getElementsByClassName(
    "line-delete-button"
  );

  for (let i = 0; i < deleteLineButtons.length; i++) {
    deleteLineButtons[i].addEventListener("click", lineDeleteClicked);
  }
};

const lineAddClicked = () => {
  const lineName = document.getElementById("line-name-input").value;
  const startStation = document.getElementById("line-start-station-selector")
    .value;
  const endStation = document.getElementById("line-end-station-selector").value;
  const currentLines = loadLocalStorage(LS_KEY.LINE) || [];
  const newLine = {};

  newLine[lineName] = [startStation, endStation];
  currentLines.push(newLine);

  clearLocalStorage(LS_KEY.LINE);
  saveLocalStorage(LS_KEY.LINE, currentLines);
  const isDisplayed = displayLines(currentLines);

  if (isDisplayed) {
    activateLineDeleteButton();
  }
};

const lineContainer = () => {
  const lineAddButton = document.getElementById("line-add-button");
  const currentLines = loadLocalStorage(LS_KEY.LINE) || [];

  lineAddButton.addEventListener("click", lineAddClicked);

  const isDisplayed = displayLines(currentLines);

  if (isDisplayed) {
    activateLineDeleteButton();
  }
};

export default lineContainer;
