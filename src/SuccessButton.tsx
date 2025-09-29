import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { neutral, success } from "./theme/colorTokens";
import { typography } from "./typography";

interface SuccessButtonProps extends ButtonProps {
  children: React.ReactNode;
  startIcon?: React.ReactNode;
}

const StyledSuccessButton = styled(Button)<{ size?: "small" | "medium" | "large" }>(({ theme, size }) => {
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

  const getIconSpacing = () => {
    return "8px";
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
    backgroundColor: success[500], 
    color: neutral.white,
    fontFamily: typography.fontFamily,
    ...getTypography(),
    textTransform: "none",
    "& .MuiButton-startIcon": {
      marginRight: getIconSpacing(),
    },
    borderRadius: "8px",
    padding: getPadding(),
    boxShadow: "none",
    "&:hover": {
      backgroundColor: success[400], // green 700
      boxShadow: "none",
    },
    "&:active": {
      backgroundColor: success[300], // green 800
      color: neutral.white,
    },
    "&:disabled": {
      backgroundColor: "#E5E7EB", // gray 200
      color: "#9CA3AF", // gray 400
      borderColor: "transparent",
    },
  };
});

export const SuccessButton = ({ 
  children, 
  size = "medium",
  startIcon,
  ...props 
}: SuccessButtonProps) => {
  return (
    <StyledSuccessButton 
      variant="contained" 
      disableRipple 
      disableElevation 
      size={size}
      startIcon={startIcon}
      {...props}
    >
      {children}
    </StyledSuccessButton>
  );
};
