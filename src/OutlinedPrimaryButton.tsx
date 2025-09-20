import { Button, ButtonProps } from "@mui/material";

interface OutlinedPrimaryButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export const OutlinedPrimaryButton = ({
  children,
  ...props
}: OutlinedPrimaryButtonProps) => {
  return (
    <Button
      variant="outlined"
      sx={{
        border: "1.5px solid #0068A9",
        color: "#0068A9",
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 500,
        fontSize: "18px",
        lineHeight: "22px",
        textTransform: "none",
        borderRadius: "8px",
        padding: "10px 22px",
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
          boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
        },
      }}
      {...props}
    >
      {children}
    </Button>
  );
};
