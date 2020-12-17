import { WORDS, LS_KEY } from "../constants/index.js";
import { clearChilds, appendChilds, deleteChild } from "../utils/display.js";
import {
  createButton,
  createDivContainer,
  createHeader,
  createInput,
  createSelect,
  createTable,
} from "../utils/HTMLElement.js";
import { loadLocalStorage } from "../utils/localStorage.js";
import sectionContainer from "./sectionContainer.js";

const createSelectedLineContainer = (lineName, allStations) => {
  const h3 = createHeader(`${lineName} ${WORDS.SECTION.MANGE_LINE}`, 3);
  const inputTitle = createHeader(WORDS.SECTION.INPUT_TITLE, 4);
  const select = createSelect("section-station-selector", allStations);
  const input = createInput(
    "section-order-input",
    WORDS.SECTION.INPUT_PLACEHOLDER,
    "number"
  );
  const button = createButton(WORDS.SECTION.ADD_BUTTON, "section-add-button");
  const table = createTable(WORDS.SECTION.LIST_COL_NAMES);
  const elements = [h3, inputTitle, select, input, button, table];

  const selectedLineContainer = createDivContainer(
    elements,
    "",
    "selected-line"
  );

  return selectedLineContainer;
};

export const displaySelectedLine = (lineName, stations) => {
  const allStations = loadLocalStorage(LS_KEY.STATION);
  const selectedLineContainer = createSelectedLineContainer(
    lineName,
    allStations
  );
  const selectedLine = document.getElementById("selected-line");

  if (selectedLine) {
    deleteChild("selected-line");
    appendChilds([selectedLineContainer]);
  } else {
    appendChilds([selectedLineContainer]);
  }

  return true;
};

const initialSectionUtil = () => {
  const lines = loadLocalStorage(LS_KEY.LINE);
  const lineNames = lines.map((line) => Object.keys(line)[0]);
  const sectionHeader = createHeader(WORDS.SECTION.CHOICE_LINE_TITLE, 3);
  const lineButtons = lineNames.map((line) =>
    createButton(line, "", "section-line-menu-button")
  );

  appendChilds([sectionHeader, ...lineButtons]);
  sectionContainer();
};

const sectionPresenter = () => {
  clearChilds();

  const isInitialDisplayed = initialSectionUtil(root);
};

export default sectionPresenter;
