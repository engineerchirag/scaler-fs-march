export const updateLocalStorage = (data) => {
  localStorage.setItem("favourites", JSON.stringify(data));
};
