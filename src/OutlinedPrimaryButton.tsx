import { Button, ButtonProps } from "@mui/material";
import { brand, neutral, gray } from "./theme/colorTokens";
import { typography } from "./typography";

interface OutlinedPrimaryButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export const OutlinedPrimaryButton = ({
  children,
  size = "medium",
  ...props
}: OutlinedPrimaryButtonProps) => {

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

  return (
    <Button
      variant="outlined"
      size={size}
      disableRipple
      sx={{
        border: "1.5px solid #0068A9",
        color: "#0068A9",
        fontFamily: typography.fontFamily,
        ...getTypography(),
        textTransform: "none",
        borderRadius: "8px",
        padding: getPadding(),
        backgroundColor: "transparent",
        boxShadow: "none",
       "&:hover": {
          backgroundColor: "rgba(188, 217, 255, 0.3)", 
          borderColor: brand[300], 
          color: brand[300], 
        },
        "&:active": {
          boxShadow: "none",
          backgroundColor: "rgba(0, 104, 169, 0.2)", 
          borderColor: brand[300],
          color: brand[300],
        },
        "&:focus": {
          outline: "none",
          boxShadow: "none",
        },
        "&:disabled": {
          backgroundColor: "transparent",
          borderColor: gray[200],
          color: gray[400],
        },
      }}
      {...props}
    >
      {children}
    </Button>
  );
};