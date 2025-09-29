import { Alert as MuiAlert, AlertProps as MuiAlertProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { error, success } from "./theme/colorTokens";
import { typography } from "./typography";

interface AlertProps extends Omit<MuiAlertProps, 'variant' | 'color'> {
  children: React.ReactNode;
  severity?: 'error' | 'success';
  title?: string;
}

const StyledAlert = styled(MuiAlert)<{ severity?: 'error' | 'success' }>(({ severity = 'error' }) => ({
  backgroundColor: severity === 'success' ? "#EDF7ED" : "#FDEDED",
  color: severity === 'success' ? success[900] : error[900],
  fontFamily: typography.fontFamily,
  ...typography["body2.Regular"],
  "& .MuiAlert-icon": {
    color: severity === 'success' ? success[500] : error[500],
    marginRight: "12px"
  },
  "& .MuiAlert-message": {
    padding: "8px 0"
  },
  "& .MuiAlert-action": {
    padding: "0 8px",
    alignItems: "center"
  },
  "& .alert-title": {
    ...typography["body1.Semibold"],
    marginBottom: "4px",
    display: "block"
  }
}));

export const Alert = ({ children, severity = 'error', title, ...props }: AlertProps) => {
  return (
    <StyledAlert 
      severity={severity}
      {...props}
    >
      {title && <span className="alert-title">{title}</span>}
      {children}
    </StyledAlert>
  );
};