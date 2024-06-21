import { Button, styled, Typography } from "@mui/material";

const StyledButton = styled(Button)(
  ({ theme, color, bgcolor, borderRadius }) => {
    const { palette, spacing } = theme;

    return {
      backgroundColor: bgcolor || palette.yellow[0],
      boxShadow: "none",
      padding: "10px",
      width: "200px",
      minWidth: "unset",
      color: color || palette.text.primary,
      borderRadius: borderRadius || spacing(1),

      ":hover": {
        boxShadow: "none",
        backgroundColor: palette.yellow[1],
      },
      "&.Mui-disabled": {
        backgroundColor: palette.black[1],
        cursor: "not-allowed",
      },
    };
  }
);

const CButton = ({ label, disabled = false, ...rest }) => {
  return (
    <StyledButton disabled={disabled} {...rest}>
      <Typography>{label}</Typography>
    </StyledButton>
  );
};

export default CButton;
