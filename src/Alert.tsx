import { Alert as MuiAlert, AlertProps as MuiAlertProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { error, success } from "./theme/colorTokens";
import { typography } from "./typography";

type AlertVariant = 'simple' | 'withTitle' | 'withLabel' | 'withTitleAndLabel';

interface AlertProps extends Omit<MuiAlertProps, 'variant' | 'color'> {
  children: React.ReactNode;
  severity?: 'error' | 'success';
  title?: string;
  label?: string;
  onLabelClick?: () => void;
  variant?: AlertVariant;
}

const BaseAlert = styled(MuiAlert)<{ severity?: 'error' | 'success' }>(({ severity = 'error' }) => ({
  backgroundColor: severity === 'success' ? "#EDF7ED" : "#FDEDED",
  color: severity === 'success' ? success[900] : error[900],
  fontFamily: typography.fontFamily,
  ...typography["body2.Regular"],
  padding: "12px 16px",
  position: "relative",
  "& .MuiAlert-icon": {
    color: severity === 'success' ? success[500] : error[500],
    marginRight: "12px",
    padding: "0px 2px"
  },
  "& .MuiAlert-message": {
    padding: "0"
  },
  "& .alert-content": {
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  },
  "& .alert-title": {
    ...typography["body1.Semibold"],
    display: "block",
    marginBottom: "4px"
  },
  "& .alert-message": {
    marginBottom: "4px"
  },
  "& .alert-label-button": {
    ...typography["Overline.button"],
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    color: severity === 'success' ? success[500] : error[500],
    padding: "4px 8px",
    borderRadius: "4px",
    transition: "background-color 0.2s",
    alignSelf: "flex-start",
    marginTop: "4px",
    "&:hover": {
      backgroundColor: severity === 'success' ? "rgba(0, 200, 83, 0.04)" : "rgba(211, 47, 47, 0.04)"
    },
    "&:active": {
      backgroundColor: severity === 'success' ? "rgba(0, 200, 83, 0.1)" : "rgba(211, 47, 47, 0.1)"
    }
  }
}));

export const Alert = ({ 
  children, 
  severity = 'error', 
  title, 
  label,
  onLabelClick,
  variant = 'simple',
  ...props 
}: AlertProps) => {
  // Validate props based on variant
  if (variant === 'simple' && (title || label)) {
    console.warn('Title and label props will be ignored in simple variant');
  }
  if (variant === 'withTitle' && !title) {
    console.warn('Title prop is required for withTitle variant');
  }
  if (variant === 'withLabel' && !label) {
    console.warn('Label prop is required for withLabel variant');
  }
  if (variant === 'withTitleAndLabel' && (!title || !label)) {
    console.warn('Both title and label props are required for withTitleAndLabel variant');
  }

  const shouldShowTitle = variant === 'withTitle' || variant === 'withTitleAndLabel';
  const shouldShowLabel = variant === 'withLabel' || variant === 'withTitleAndLabel';

  return (
    <BaseAlert 
      severity={severity}
      {...props}
    >
      <div className="alert-content">
        {shouldShowTitle && title && <span className="alert-title">{title}</span>}
        <div className="alert-message">{children}</div>
        {shouldShowLabel && label && (
          <button 
            className="alert-label-button"
            onClick={onLabelClick}
          >
            {label}
          </button>
        )}
      </div>
    </BaseAlert>
  );
};