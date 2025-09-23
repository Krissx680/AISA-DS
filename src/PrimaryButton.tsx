import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { brand, neutral } from "./theme/colorTokens";

interface PrimaryButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const StyledButton = styled(Button)<{ size?: "small" | "medium" | "large" }>(({ theme, size }) => {
  const getPadding = () => {
    switch (size) {
      case "small":
        return "8px 16px";
      case "large":
        return "12px 24px";
      case "medium":
      default:
        return "10px 20px";
    }
  };

  return {
    backgroundColor: brand[500],
    color: neutral.white,
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 500,
    fontSize: "18px",
    lineHeight: "22px",
    textTransform: "none",
    borderRadius: "8px",
    padding: getPadding(),
    boxShadow: "none",
    "&:hover": {
      backgroundColor: brand[400],
      boxShadow: "none",
    },
    "&:active": {
          backgroundColor: brand[300], 
          color: neutral.white,
        },
  };
});

export const PrimaryButton = ({ 
  children, 
  size = "medium", 
  ...props 
}: PrimaryButtonProps) => {
  return (
    <StyledButton 
      variant="contained" 
      disableRipple 
      disableElevation 
      size={size}
      {...props}
    >
      {children}
    </StyledButton>
  );
};
