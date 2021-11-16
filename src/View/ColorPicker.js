import { Grid } from "@mui/material";
import { Container, Typography } from "@mui/material";
import React from "react";
import ColorPalette from "../Components/ColorPalette";
import ImageList from "../Components/ImageList";
import ImageSearch from "../Components/ImageSearch";

import { AppContextProvider } from "../Contexts/appContext";

class ColorPicker extends React.Component {
  render() {
    return (
      <AppContextProvider>
        <Container>
          <Typography variant="h2">Color Extractor</Typography>
          <ImageSearch />
          <Grid container spacing={2}>
            <Grid item xs={7}>
              <ImageList />
            </Grid>
            <Grid item xs={5}>
              <ColorPalette />
            </Grid>
          </Grid>
        </Container>
      </AppContextProvider>
    );
  }
}

export default ColorPicker;
