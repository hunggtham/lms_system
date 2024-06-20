import { Typography } from "@mui/material";
import { StyledButton } from "./styled";
const CButton = ({ label, disabled = false, rounded = false, ...rest }) => {
  return (
    <StyledButton disabled={disabled} rounded={rounded} {...rest}>
      <Typography>{label}</Typography>
    </StyledButton>
  );
};

export default CButton;
