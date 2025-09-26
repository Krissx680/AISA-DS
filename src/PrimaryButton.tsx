import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { brand, neutral, gray } from "./theme/colorTokens";
import { typography } from "./typography";

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

  const getTypography = () => {
    switch (size) {
      case "small":
        return typography["button.Small"];
      case "large":
        return typography["button.Large"];
      case "medium":
      default:
        return typography["button.Medium"];
    }
  };

  return {
    backgroundColor: brand[500],
    color: neutral.white,
    fontFamily: typography.fontFamily,
    ...getTypography(),
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
     "&:disabled": {
      backgroundColor: gray[200], // gray 200
      color: gray[400], // gray 400
      borderColor: "transparent",
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