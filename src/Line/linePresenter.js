import { DATA, LS_KEY, WORDS } from "../constants/index.js";
import { clearChilds, appendChilds, clearTableBody } from "../utils/display.js";
import {
  createButton,
  createDataAttribute,
  createDeleteButtonTd,
  createDiv,
  createDivContainer,
  createHeader,
  createInput,
  createLabel,
  createSelect,
  createTable,
  createTableData,
  createTableRow,
} from "../utils/HTMLElement.js";
import { loadLocalStorage } from "../utils/localStorage.js";
import lineContainer from "./lineContainer.js";

const createLineTr = (line) => {
  const lineName = Object.keys(line)[0];
  const stations = Object.values(line)[0];
  const startStation = stations[0];
  const endStation = stations[stations.length - 1];
  const lineTd = createTableData(lineName);
  const startStationTd = createTableData(startStation);
  const endStationTd = createTableData(endStation);
  const deleteButton = createButton(
    WORDS.LINE.DELETE_BUTTON,
    "",
    "line-delete-button"
  );
  const dataButton = createDataAttribute(deleteButton, DATA.LINE, lineName);
  const deleteTd = createDeleteButtonTd(dataButton);
  const tr = createTableRow([lineTd, startStationTd, endStationTd, deleteTd]);

  return tr;
};

export const displayLines = (currentLines) => {
  const tbody = clearTableBody();

  currentLines.forEach((line) => {
    const tr = createLineTr(line);
    tbody.appendChild(tr);
  });

  return true;
};

const createInputBox = () => {
  const inputTitle = createDiv(WORDS.LINE.INPUT_TITLE);
  const input = createInput("line-name-input", WORDS.LINE.INPUT_PLACEHOLDER);
  const elements = [inputTitle, input];

  const inputBox = createDivContainer(elements, "margin");

  return inputBox;
};

const createStartSelectBox = (stations) => {
  const startLabel = createLabel(
    "line-start-station-selector",
    WORDS.LINE.START_LABEL
  );
  const startSelect = createSelect("line-start-station-selector", stations);
  const elements = [startLabel, startSelect];

  const startSelectBox = createDivContainer(elements);

  return startSelectBox;
};

const createEndSelectBox = (stations) => {
  const endLabel = createLabel(
    "line-end-station-selector",
    WORDS.LINE.END_LABEL
  );
  const endSelect = createSelect("line-end-station-selector", stations);
  const elements = [endLabel, endSelect];

  const endSelectBox = createDivContainer(elements);

  return endSelectBox;
};

const createSelectBox = (stations) => {
  const startSelectBox = createStartSelectBox(stations);
  const endSelectBox = createEndSelectBox(stations);
  const elements = [startSelectBox, endSelectBox];

  const selectBox = createDivContainer(elements, "margin");

  return selectBox;
};

const initialLineUtil = () => {
  const stations = loadLocalStorage(LS_KEY.STATION);
  const inputBox = createInputBox();
  const selectBox = createSelectBox(stations);
  const lineAddButton = createButton(WORDS.LINE.ADD_BUTTON, "line-add-button");
  const header = createHeader(WORDS.LINE.LIST_HEADER);
  const table = createTable(WORDS.LINE.LIST_COL_NAMES);
  const elements = [inputBox, selectBox, lineAddButton, header, table];

  appendChilds(elements);

  return true;
};

const linePresenter = () => {
  clearChilds();

  const isInitialDisplayed = initialLineUtil();

  if (isInitialDisplayed) {
    lineContainer();
  }
};

export default linePresenter;
