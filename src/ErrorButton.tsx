import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { neutral } from "./theme/colorTokens";
import { typography } from "./typography";

interface ErrorButtonProps extends ButtonProps {
  children: React.ReactNode;
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
    backgroundColor: "#DC2626", // red 600
    color: neutral.white,
    fontFamily: typography.fontFamily,
    ...getTypography(),
    textTransform: "none",
    borderRadius: "8px",
    padding: getPadding(),
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "#B91C1C", // red 700
      boxShadow: "none",
    },
    "&:active": {
      backgroundColor: "#991B1B", // red 800
      color: neutral.white,
    },
    "&:disabled": {
      backgroundColor: "#E5E7EB", // gray 200
      color: "#9CA3AF", // gray 400
      borderColor: "transparent",
    },
  };
});

export const ErrorButton = ({ 
  children, 
  size = "medium", 
  ...props 
}: ErrorButtonProps) => {
  return (
    <StyledErrorButton 
      variant="contained" 
      disableRipple 
      disableElevation 
      size={size}
      {...props}
    >
      {children}
    </StyledErrorButton>
  );
};
