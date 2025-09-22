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
      disableElevation 
      size={size}
      {...props}
    >
      {children}
    </StyledButton>
  );
};