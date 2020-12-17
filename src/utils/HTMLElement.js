export const createDivContainer = (elements, idValue = "") => {
  const div = document.createElement("div");

  div.setAttribute("id", idValue);

  elements.forEach((element) => {
    div.appendChild(element);
  });

  return div;
};

export const createDiv = (text, idValue = "", classValue = "") => {
  const div = document.createElement("div");

  div.innerText = text;
  div.setAttribute("id", idValue);
  div.setAttribute("class", classValue);

  return div;
};

export const createInput = (idValue, placeholder) => {
  const input = document.createElement("input");

  input.setAttribute("id", idValue);
  input.placeholder = placeholder;

  return input;
};

export const createButton = (text, idValue = "", classVlaue = "") => {
  const button = document.createElement("button");

  button.innerText = text;
  button.setAttribute("id", idValue);
  button.setAttribute("class", classVlaue);

  return button;
};

export const createHeader = (text, size = 2) => {
  const header = document.createElement(`h${size}`);

  header.innerText = text;

  return header;
};

export const createTable = (names) => {
  const table = document.createElement("table");
  const tr = document.createElement("tr");
  const tHead = document.createElement("thead");
  const tBody = document.createElement("tbody");

  names.forEach((name) => {
    const th = document.createElement("th");
    th.innerText = name;
    tr.appendChild(th);
  });

  tHead.appendChild(tr);
  table.appendChild(tHead);
  table.appendChild(tBody);

  return table;
};

export const createDeleteButtonTd = (button) => {
  const td = document.createElement("td");

  td.appendChild(button);

  return td;
};

export const createTableData = (text) => {
  const td = document.createElement("td");

  td.innerText = text;

  return td;
};

export const createTableRow = (tdArray) => {
  const tr = document.createElement("tr");

  tdArray.forEach((td) => {
    tr.appendChild(td);
  });

  return tr;
};

export const createTableBody = (tdArray) => {
  const tbody = document.createElement("tbody");

  return tbody;
};
