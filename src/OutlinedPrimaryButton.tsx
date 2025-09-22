import { Button, ButtonProps } from "@mui/material";

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
        return "6px 18px"; 
      case "large":
        return "12px 24px"; 
      case "medium":
      default:
        return "20px 10px"; 
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
          borderColor: "#387CBB",
          color: "#387CBB",
        },
        "&:active": {
          boxShadow: "none",
          backgroundColor: "rgba(188, 217, 255, 0.3)",
          borderColor: "#90C4FB",
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