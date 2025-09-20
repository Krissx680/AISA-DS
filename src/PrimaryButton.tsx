import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { brand, neutral } from "./theme/colorTokens";

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: brand[500],
  color: neutral.white,
  fontFamily: "Open Sans, sans-serif",
  fontWeight: 500,
  fontSize: "18px",
  lineHeight: "22px",
  textTransform: "none",
  borderRadius: "8px",
  padding: "12px 24px",
  boxShadow: "none",
  "&:hover": {
    backgroundColor: brand[400],
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#387CBB",
    borderColor: "#90C4FB",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
}));

interface PrimaryButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export const PrimaryButton = ({ children, ...props }: PrimaryButtonProps) => {
  return (
    <StyledButton variant="contained" disableElevation {...props}>
      {children}
    </StyledButton>
  );
};
