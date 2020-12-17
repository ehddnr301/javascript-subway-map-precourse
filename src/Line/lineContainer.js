import { LS_KEY } from "../constants/index.js";
import {
  clearLocalStorage,
  loadLocalStorage,
  saveLocalStorage,
} from "../utils/localStorage.js";
import { displayLines } from "./linePresenter.js";

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
  displayLines(currentLines);
};

const lineContainer = () => {
  const lineAddButton = document.getElementById("line-add-button");
  const currentLines = loadLocalStorage(LS_KEY.LINE) || [];

  lineAddButton.addEventListener("click", lineAddClicked);

  const isDisplayed = displayLines(currentLines);
};

export default lineContainer;
