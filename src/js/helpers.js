export const saveToLS = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`error`, error);
  }
};

export const getFromLS = key => {
  try {
    const value = localStorage.getItem(key);

    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error(`error`, error);
  }
};
