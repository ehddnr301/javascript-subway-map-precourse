import { LS_KEY, WORDS } from "../constants/index.js";
import { clearChilds, appendChilds } from "../utils/display.js";
import {
  createButton,
  createDiv,
  createDivContainer,
  createHeader,
  createInput,
  createLabel,
  createSelect,
  createTable,
} from "../utils/HTMLElement.js";
import { loadLocalStorage } from "../utils/localStorage.js";
import lineContainer from "./lineContainer.js";

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
