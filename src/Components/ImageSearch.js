import React, { useContext, useState } from "react";
import { Button, Container, TextField } from "@mui/material";
import GoogleImages from "google-images";

import { AppContext } from "../Contexts/appContext";

const ImageSearch = (props) => {
  const [searchString, setSearchString] = useState("");

  const { setSearchResults } = useContext(AppContext);

  let onInputChange = (event) => {
    setSearchString(event.target.value);
  };

  let onSearchClick = () => {
    if (searchString.length > 0) {
      const client = new GoogleImages(
        "a19eb9981d4a54cbb",
        "AIzaSyC60Z1TBXDHgUGetxlmzeUqNIy3OPkRxak"
      );

      client
        .search(searchString, { type: "photo" })
        .then((images) => {
          setSearchResults(images);
        })
        .catch((error) => {
          setSearchResults([]);
        });
    }
  };

  return (
    <Container className={"search-container"}>
      <div className={"search-bar"}>
        <TextField
          variant="standard"
          type="text"
          onChange={onInputChange}
          placeholder={"Search item..."}
          value={searchString}
        />
        <Button className={"search-button"} onClick={onSearchClick}>
          Go!
        </Button>
      </div>
    </Container>
  );
};

export default ImageSearch;
