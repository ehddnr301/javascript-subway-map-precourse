export const appendChilds = (elements, targetId = "root") => {
  const target = document.getElementById(targetId);

  elements.forEach((element) => {
    target.appendChild(element);
  });
};

export const clearChilds = (targetId = "root") => {
  const target = document.getElementById(targetId);

  target.innerHTML = "";
};

export const deleteChild = (targetId = "root") => {
  const target = document.getElementById(targetId);

  target.parentNode.removeChild(target);
};

export const clearTableBody = () => {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";

  return tbody;
};
