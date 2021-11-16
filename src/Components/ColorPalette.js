import React, { useContext } from "react";
import { Card, Container, ImageList, Paper, Typography } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import { AppContext } from "../Contexts/appContext";

const ColorPalette = (props) => {
  let { colorPalette } = useContext(AppContext);

  /**
   *
   * Reference https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
   *  */

  let rgbToHex = ([r, g, b]) => {
    let componentToHex = (c) => {
      var hex = c.toString(16);
      return hex.length == 1 ? "0" + hex : hex;
    };
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  };

  let copyToClipboard = (color) => {
    navigator.clipboard.writeText(color);
  };

  return (
    <Container>
      <Typography variant={"h5"} style={{ margin: "8px" }}>
        Click color to copy HEX to clipboard
      </Typography>
      <Masonry columns={4} spacing={1}>
        {colorPalette.map((color, index) => {
          let hex = rgbToHex(color);
          return (
            <Paper
              key={index}
              onClick={() => {
                copyToClipboard(rgbToHex(color));
              }}
              style={{
                height: "100px",
                width: "100px",
                borderRadius: "100px",
                backgroundColor: hex,
                margin: "2px",
                padding: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <Typography
                color={hex.toUpperCase() > "#777777" ? "black" : "white"}
              >
                {hex}
              </Typography>
            </Paper>
          );
        })}
      </Masonry>
    </Container>
  );
};

export default ColorPalette;
