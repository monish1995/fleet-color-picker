# Color Extractor

This web application enables user to search images and extract dominant colors from them

## Libraries Used
* [Material UI](https://mui.com/) as UI Library
* [google-images](https://www.npmjs.com/package/google-images) to extract images from google image search
* [colorthief](https://www.npmjs.com/package/colorthief) to extract color from image

## Usage
* Search for any thing using the input field and click "Go!".
* Click on image from shown results on left pane, to generate color palette.
* Click on color on right pane to copy hex code

## Demo
 [Click Here](https://monish1995.github.io/fleet-color-picker/) for demo page

## Build
* Clone project using `git clone https://github.com/monish1995/fleet-color-picker.git`
* Go inside project folder using `cd fleet-color-picker`
* Update node_modules using `npm i --save`
* Build project using `npm run-script build`
* Modify paths in index.html from `/static/` to `static` to avoid fetch errors

## Other References
* [RGB to HEX](https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb) snippet

### Resources
Repository: [Github](https://github.com/monish1995/fleet-color-picker)
