import { Button, ButtonProps } from "@mui/material";

interface TextPrimaryButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export const TextPrimaryButton = ({
  children,
  ...props
}: TextPrimaryButtonProps) => {
  return (
    <Button
      variant="text"
      sx={{
        color: "#0068A9",
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 500,
        fontSize: "18px",
        lineHeight: "22px",
        textTransform: "none",
        borderRadius: "8px",
        padding: "12px 24px",
        backgroundColor: "transparent",
        boxShadow: "none",
        "&:hover": {
          backgroundColor: "rgba(188, 217, 255, 0.3)",
          color: "#387CBB",
        },
      }}
      {...props}
    >
      {children}
    </Button>
  );
};
