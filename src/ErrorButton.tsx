import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { neutral, error, gray } from "./theme/colorTokens";
import { typography } from "./typography";

interface ErrorButtonProps extends ButtonProps {
  children: React.ReactNode;
  startIcon?: React.ReactNode;
}

const StyledErrorButton = styled(Button)<{ size?: "small" | "medium" | "large" }>(({ theme, size }) => {
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
    backgroundColor: error[500], 
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
      backgroundColor: error[400], 
      boxShadow: "none",
    },
    "&:active": {
      backgroundColor: error[300], 
      color: neutral.white,
    },
    "&:disabled": {
      backgroundColor: gray[200], 
      color: gray[400], 
      borderColor: "transparent",
    },
  };
});

export const ErrorButton = ({ 
  children, 
  size = "medium",
  startIcon,
  ...props 
}: ErrorButtonProps) => {
  return (
    <StyledErrorButton 
      variant="contained" 
      disableRipple 
      disableElevation 
      size={size}
      startIcon={startIcon}
      {...props}
    >
      {children}
    </StyledErrorButton>
  );
};
