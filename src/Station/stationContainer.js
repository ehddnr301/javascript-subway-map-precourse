import { LS_KEY } from "../constants/index.js";
import { loadLocalStorage, saveLocalStorage } from "../utils/localStorage.js";
import { displayStations } from "./stationPresenter.js";

const stationDeleteClicked = (event) => {
  const {
    target: {
      dataset: { station: targetStation },
    },
  } = event;
  const currentStations = loadLocalStorage(LS_KEY.STATION);
  const filteredStations = currentStations.filter(
    (station) => station !== targetStation
  );

  saveLocalStorage(LS_KEY.STATION, filteredStations);
};

const activateDeleteButton = () => {
  const deleteStationButtons = document.getElementsByClassName(
    "station-delete-button"
  );

  for (let i = 0; i < deleteStationButtons.length; i++) {
    deleteStationButtons[i].addEventListener("click", stationDeleteClicked);
  }
};

const stationAddClicked = () => {
  const stationName = document.getElementById("station-name-input").value;

  const currentStations = loadLocalStorage(LS_KEY.STATION) || [];
  currentStations.push(stationName);
  saveLocalStorage(LS_KEY.STATION, currentStations);

  const isDisplayed = displayStations(currentStations);

  if (isDisplayed) {
    activateDeleteButton();
  }
};

const stationContainer = () => {
  const stationAddButton = document.getElementById("station-add-button");
  const currentStations = loadLocalStorage(LS_KEY.STATION) || [];

  stationAddButton.addEventListener("click", stationAddClicked);

  const isDisplayed = displayStations(currentStations);

  if (isDisplayed) {
    activateDeleteButton();
  }
};

export default stationContainer;
