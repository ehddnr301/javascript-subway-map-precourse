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
  names.forEach((name) => {
    const th = document.createElement("th");

    th.innerText = name;

    tr.appendChild(th);
  });

  table.appendChild(tr);

  return table;
};
