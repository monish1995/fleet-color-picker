import React, { useEffect, useState } from "react";

let initState = {
  searchResult: [],
  selectedImage: 0,
  colorPalette: [],
  setSearchResults: () => {},
  setSelectedImage: () => {},
  setColorPalette: () => {},
};

export const AppContext = React.createContext(initState);

export const AppContextProvider = (props) => {
  let setSearchResults = (searchResult) => {
    console.log("in setSearchResults", state);
    setState((prevState) => ({ ...prevState, searchResult: searchResult }));
  };

  let setColorPalette = (colorPalette) => {
    setState((prevState) => ({ ...prevState, colorPalette: colorPalette }));
  };

  let setSelectedImage = (selectedImage) => {
    if (selectedImage && selectedImage.match(/[0-9]+/)) {
      setState((prevState) => ({
        ...prevState,
        selectedImage: Number.parseInt(selectedImage),
      }));
    }
  };

  const [state, setState] = useState({
    ...initState,
    setSearchResults: setSearchResults,
    setSelectedImage: setSelectedImage,
    setColorPalette: setColorPalette,
  });

  useEffect(() => {
    console.log("state", state);
  }, [state]);

  return (
    <AppContext.Provider value={state}>{props.children}</AppContext.Provider>
  );
};
