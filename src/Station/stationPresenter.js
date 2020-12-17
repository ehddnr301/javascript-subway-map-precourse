import { WORDS } from "../constants/index.js";
import {
  createButton,
  createDiv,
  createDivContainer,
  createHeader,
  createInput,
  createTable,
} from "../utils/HTMLElement.js";
import stationContainer from "./stationContainer.js";

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
