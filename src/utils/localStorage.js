export const loadLocalStorage = (key) => {
  const value = localStorage.getItem(key);
  const parsedValue = JSON.parse(value);

  return parsedValue;
};

export const saveLocalStorage = (key, valueArray) => {
  const value = JSON.stringify(valueArray);

  localStorage.setItem(key, value);
};

export const clearLocalStorage = (key) => {
  localStorage.removeItem(key);
};
