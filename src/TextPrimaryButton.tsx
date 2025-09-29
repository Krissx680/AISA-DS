import { Button, ButtonProps } from "@mui/material";
import { typography } from "./typography";
import { brand, neutral } from "./theme/colorTokens";

interface TextPrimaryButtonProps extends ButtonProps {
  children: React.ReactNode;
  startIcon?: React.ReactNode;
}

export const TextPrimaryButton = ({
  children,
  size = "medium",
  startIcon,
  ...props
}: TextPrimaryButtonProps) => {
  
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
      variant="text"
      disableRipple
      startIcon={startIcon}
      sx={{
        color: brand[500],
        fontFamily: typography.fontFamily,
        ...getTypography(),
        textTransform: "none",
        borderRadius: "8px",
        padding: getPadding(),
        backgroundColor: "transparent",
        boxShadow: "none",
        "& .MuiButton-startIcon": {
          marginRight: "8px",
        },
         "&:hover": {
          backgroundColor: "rgba(188, 217, 255, 0.3)", 
          color: brand[300], 
        },
        "&:active": {
          backgroundColor: "rgba(0, 104, 169, 0.2)", 
          color: brand[300],
        },
        "&:focus": {
          outline: "none",
          boxShadow: "none",
        },
      }}
      {...props}
    >
      {children}
    </Button>
  );
};