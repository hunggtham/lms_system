const paletteOptions = {
  primary: {
    main: "#1C1E53", //xanh dam
  },
  secondary: {
    main: "#FCD980", //vang
  },
  white: {
    0: "#FFFFFF",
  },
  yellow: {
    0: "#FCD980",
    1: "#fcd980cc",
  },
  blue: {
    0: "#EEF4FA",
    1: "#2405F2",
  },
  black: {
    0: "#000000",
    1: "#282938",
  },
};

const paletteConfig = {
  ...paletteOptions,
  button: {
    primary: paletteOptions.yellow[0],
  },
  text: {
    primary: paletteOptions.black[0],
    secondary: paletteOptions.black[1],
    white: paletteOptions.white,
  },
};
export default paletteConfig;
