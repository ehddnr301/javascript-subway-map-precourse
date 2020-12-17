import { DATA, WORDS } from "../constants/index.js";
import { clearTableBody } from "../utils/display.js";
import {
  createButton,
  createDeleteButtonTd,
  createDiv,
  createDivContainer,
  createHeader,
  createInput,
  createTable,
  createTableData,
  createTableRow,
  createDataAttribute,
} from "../utils/HTMLElement.js";
import stationContainer from "./stationContainer.js";

export const displayStations = (currentStations) => {
  const tbody = clearTableBody();

  currentStations.forEach((station) => {
    const stationTd = createTableData(station);
    const deleteButton = createButton(
      WORDS.STATION.DELETE_BUTTON,
      "",
      "station-delete-button"
    );
    const dataButton = createDataAttribute(deleteButton, DATA.STATION, station);
    const deleteTd = createDeleteButtonTd(dataButton);

    const tr = createTableRow([stationTd, deleteTd]);
    tbody.appendChild(tr);
  });
};

const initialStationUtil = (root) => {
  const inputTitle = createDiv(WORDS.STATION.INPUT_TITLE);
  const input = createInput(
    "station-name-input",
    WORDS.STATION.INPUT_PLACEHOLDER
  );
  const button = createButton(WORDS.STATION.ADD_BUTTON, "station-add-button");
  const header = createHeader(WORDS.STATION.LIST_HEADER);
  const table = createTable(WORDS.STATION.LIST_COL_NAMES);
  const elements = [inputTitle, input, button, header, table];

  const initialDiv = createDivContainer(elements);
  root.appendChild(initialDiv);

  return true;
};

const stationPresenter = () => {
  const root = document.getElementById("root");

  const isInitialDisplayed = initialStationUtil(root);

  if (isInitialDisplayed) {
    stationContainer();
  }
};

export default stationPresenter;
