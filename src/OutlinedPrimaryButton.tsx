import { Button, ButtonProps } from "@mui/material";
import { brand, neutral } from "./theme/colorTokens";

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

  return (
    <Button
      variant="outlined"
      size={size}
      disableRipple
      sx={{
        border: "1.5px solid #0068A9",
        color: "#0068A9",
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 500,
        fontSize: "18px",
        lineHeight: "22px",
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
      }}
      {...props}
    >
      {children}
    </Button>
  );
};
