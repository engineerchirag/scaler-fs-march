import { createContext, useEffect, useState } from "react";

export const FavouriteMovieContext = createContext();

const FavouriteMovieProvider = ({ children }) => {
  const [favourites, setFavourites] = useState({});

  const updateLocalStorage = (data) => {
    localStorage.setItem("favourites", JSON.stringify(data));
  };

  const handleAddFavourite = (movie) => {
    setFavourites((prevData) => ({
      ...prevData,
      [movie.id]: movie,
    }));
  };

  const handleDeleteFavourite = (movie) => {
    setFavourites((prevData) => {
      const prevDataCopy = { ...prevData };
      delete prevDataCopy[movie.id];
      return prevDataCopy;
    });
  };

  useEffect(() => {
    const persistedFavourites = localStorage.getItem("favourites");
    if (persistedFavourites) {
      setFavourites(JSON.parse(persistedFavourites));
    }
  }, []);

  useEffect(() => {
    updateLocalStorage(favourites);
  }, [favourites]);

  return (
    <FavouriteMovieContext.Provider
      value={{
        favourites,
        onAdd: handleAddFavourite,
        onDelete: handleDeleteFavourite,
      }}
    >
      {children}
    </FavouriteMovieContext.Provider>
  );
};

export default FavouriteMovieProvider;
