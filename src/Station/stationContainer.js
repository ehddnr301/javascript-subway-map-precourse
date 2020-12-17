import { LS_KEY } from "../constants/index.js";
import { loadLocalStorage, saveLocalStorage } from "../utils/localStorage.js";
import { displayStations } from "./stationPresenter.js";

export const stationAddClicked = () => {
  const stationName = document.getElementById("station-name-input").value;

  const currentStations = loadLocalStorage(LS_KEY.STATION) || [];
  currentStations.push(stationName);
  saveLocalStorage(LS_KEY.STATION, currentStations);

  displayStations(currentStations);
};

const stationContainer = () => {
  const stationAddButton = document.getElementById("station-add-button");

  stationAddButton.addEventListener("click", stationAddClicked);
};

export default stationContainer;
