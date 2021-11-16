import React, { useContext } from "react";
import { AppContext } from "../Contexts/appContext";
import ColorThief from "colorthief";
import { Container, Paper, Typography } from "@mui/material";
import Masonry from "@mui/lab/Masonry";

const ImageListContainer = (props) => {
  let { searchResult, selectedImage, setSelectedImage, setColorPalette } =
    useContext(AppContext);

  const onImageClick = (event) => {
    setColorPalette(
      event?.target ? new ColorThief().getPalette(event.target) : []
    );
    setSelectedImage(event?.target?.dataset?.index);
  };

  return (
    <Container className={"search-results"}>
      <Typography variant={"h5"} style={{ margin: "8px" }}>
        Click Image to generate palette
      </Typography>
      <Masonry cols={3} gap={8}>
        {searchResult?.map((img, index) => (
          <Paper
            key={index}
            elevation={index == selectedImage ? 10 : 1}
            style={{ cursor: "pointer", margin: "4px", overflow: "hidden" }}
          >
            <img
              alt={img?.description}
              className={"result-image"}
              src={img?.url}
              styles={{
                display: "flex !important",
                justifySelf: "center !important",
                objectFit: "cover",
              }}
              height="100px"
              crossOrigin="Anonymous"
              onClick={onImageClick}
              data-index={index}
              loading="lazy"
            />
          </Paper>
        ))}
      </Masonry>
    </Container>
  );
};

export default ImageListContainer;
