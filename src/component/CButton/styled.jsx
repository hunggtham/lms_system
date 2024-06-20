import { Button, styled } from "@mui/material";

export const StyledButton = styled(Button, ({ theme, color, rounded }) => {
  const { palette, spacing } = theme;

  return {
    backgroundColor: palette.yellow[0],
    boxShadow: "none",
    padding: "10px",
    width: "200px",
    height: "50px",
    minWidth: "unset",
    color: palette.text.primary || color,
    borderRadius: rounded ? "999999px" : spacing(1),

    ":hover": {
      boxShadow: "none",
      backgroundColor: palette.yellow[1],
    },
    "& .MuiButton-endIcon": {
      marginRight: 0,
      marginLeft: spacing(1),
    },
    "& .MuiButton-startIcon": {
      marginRight: spacing(1),
      marginLeft: 0,
    },
    "&.Mui-disabled": {
      backgroundColor: palette.black[1],
      cursorPointer: "none",
    },
  };
});
