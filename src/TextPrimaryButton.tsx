import { Button, ButtonProps } from "@mui/material";
import { typography } from "./typography";
import { brand, neutral } from "./theme/colorTokens";


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
      disableRipple
      sx={{
        color: brand[500],
        fontFamily: typography.fontFamily,
        ...typography["button.Large"],
        textTransform: "none",
        borderRadius: "8px",
        padding: "12px 24px",
        backgroundColor: "transparent",
        boxShadow: "none",
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
