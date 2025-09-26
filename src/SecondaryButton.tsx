import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { neutral, gray } from "./theme/colorTokens";
import { typography } from "./typography";

interface SecondaryButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const StyledSecondaryButton = styled(Button)<{ size?: "small" | "medium" | "large" }>(({ theme, size }) => {
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
    backgroundColor: gray[50], // gray 500
    color: neutral.white,
    fontFamily: typography.fontFamily,
    ...getTypography(),
    textTransform: "none",
    borderRadius: "8px",
    padding: getPadding(),
    boxShadow: "none",
    "&:hover": {
      backgroundColor: gray[100], // gray 600
      boxShadow: "none",
    },
    "&:active": {
      backgroundColor: "#374151", // gray 700
      color: neutral.white,
    },
    "&:disabled": {
      backgroundColor: gray[200], // gray 200
      color: gray[400], // gray 400
      borderColor: "transparent",
    },
  };
});

export const SecondaryButton = ({ 
  children, 
  size = "medium", 
  ...props 
}: SecondaryButtonProps) => {
  return (
    <StyledSecondaryButton 
      variant="contained" 
      disableRipple 
      disableElevation 
      size={size}
      {...props}
    >
      {children}
    </StyledSecondaryButton>
  );
};