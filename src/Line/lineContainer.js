import { LS_KEY } from "../constants/index.js";
import {
  clearLocalStorage,
  loadLocalStorage,
  saveLocalStorage,
} from "../utils/localStorage.js";

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
};

const lineContainer = () => {
  const lineAddButton = document.getElementById("line-add-button");

  lineAddButton.addEventListener("click", lineAddClicked);
};

export default lineContainer;
