import React from 'react';
import { PrimaryButton } from './PrimaryButton';
import { OutlinedPrimaryButton } from './OutlinedPrimaryButton';
import { TextPrimaryButton } from './TextPrimaryButton';
import { SecondaryButton } from './SecondaryButton';
import { Button } from "@mui/material";
import { Add, Delete, Edit, Check, Error } from '@mui/icons-material';
import { error, success, neutral, gray } from "./theme/colorTokens";
import { typography } from "./typography";

export default {
  title: 'Components/Buttons',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['contained-primary', 'outlined-primary', 'text-primary', 'contained-secondary', 'contained-error', 'contained-success'],
      description: 'Button variant',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size of the button',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the button is disabled',
    },
    children: {
      control: { type: 'text' },
      description: 'Button content',
    },
    hasStartIcon: {
      control: { type: 'boolean' },
      description: 'Whether to show a start icon',
    },
  },
};

// Error Button Component (inline for story)
const ErrorButton = ({ children, size = 'medium', disabled = false, startIcon, ...props }) => {
  const getPadding = () => {
    switch (size) {
      case "small": return "8px 16px";
      case "large": return "12px 24px";
      case "medium":
      default: return "10px 20px";
    }
  };

  const getTypography = () => {
    switch (size) {
      case "small": return typography["button.Small"];
      case "large": return typography["button.Large"];
      case "medium":
      default: return typography["button.Medium"];
    }
  };

  return React.createElement(Button, {
    variant: "contained",
    disableRipple: true,
    disableElevation: true,
    size: size,
    disabled: disabled,
    startIcon: startIcon,
    sx: {
      backgroundColor: error[500],
      color: neutral.white,
      fontFamily: typography.fontFamily,
      ...getTypography(),
      textTransform: "none",
      borderRadius: "8px",
      padding: getPadding(),
      boxShadow: "none",
      "&:hover": {
        backgroundColor: error[400],
        boxShadow: "none",
      },
      "&:active": {
        backgroundColor: error[300],
        color: neutral.white,
      },
      "&:disabled": {
        backgroundColor: gray[200],
        color: gray[400],
        borderColor: "transparent",
      },
    },
    ...props
  }, children);
};

// Success Button Component (inline for story)
const SuccessButton = ({ children, size = 'medium', disabled = false, startIcon, ...props }) => {
  const getPadding = () => {
    switch (size) {
      case "small": return "8px 16px";
      case "large": return "12px 24px";
      case "medium":
      default: return "10px 20px";
    }
  };

  const getTypography = () => {
    switch (size) {
      case "small": return typography["button.Small"];
      case "large": return typography["button.Large"];
      case "medium":
      default: return typography["button.Medium"];
    }
  };

  return React.createElement(Button, {
    variant: "contained",
    disableRipple: true,
    disableElevation: true,
    size: size,
    disabled: disabled,
    startIcon: startIcon,
    sx: {
      backgroundColor: success[500],
      color: neutral.white,
      fontFamily: typography.fontFamily,
      ...getTypography(),
      textTransform: "none",
      borderRadius: "8px",
      padding: getPadding(),
      boxShadow: "none",
      "&:hover": {
        backgroundColor: success[400],
        boxShadow: "none",
      },
      "&:active": {
        backgroundColor: success[300],
        color: neutral.white,
      },
      "&:disabled": {
        backgroundColor: gray[200],
        color: gray[400],
        borderColor: "transparent",
      },
    },
    ...props
  }, children);
};

// Interactive Template with Controls
const Template = (args) => {
  const { variant, children, size, disabled, hasStartIcon, ...otherProps } = args;
  
  const getStartIcon = () => {
    if (!hasStartIcon) return undefined;
    switch (variant) {
      case 'contained-error': return React.createElement(Error);
      case 'contained-success': return React.createElement(Check);
      case 'outlined-primary': return React.createElement(Edit);
      case 'contained-secondary': return React.createElement(Delete);
      default: return React.createElement(Add);
    }
  };
  
  const commonProps = {
    size,
    disabled,
    startIcon: getStartIcon(),
    ...otherProps
  };
  
  switch (variant) {
    case 'outlined-primary':
      return React.createElement(OutlinedPrimaryButton, commonProps, children);
    case 'text-primary':
      return React.createElement(TextPrimaryButton, commonProps, children);
    case 'contained-secondary':
      return React.createElement(SecondaryButton, commonProps, children);
    case 'contained-error':
      return React.createElement(ErrorButton, commonProps, children);
    case 'contained-success':
      return React.createElement(SuccessButton, commonProps, children);
    case 'contained-primary':
    default:
      return React.createElement(PrimaryButton, commonProps, children);
  }
};

// Interactive Story with Controls
export const Playground = Template.bind({});
Playground.args = {
  variant: 'contained-primary',
  size: 'medium',
  disabled: false,
  children: 'Button',
  hasStartIcon: false,
};

// All Button Variants Showcase
export const AllButtons = () => 
  React.createElement('div', {
    style: { 
      display: 'flex', 
      flexDirection: 'column',
      gap: '32px',
      padding: '20px'
    }
  }, [
    // Primary Buttons Section
    React.createElement('div', { key: 'primary-section' }, [
      React.createElement('h3', { 
        key: 'primary-title',
        style: { marginBottom: '16px', color: '#333', fontFamily: '"Open Sans", sans-serif' }
      }, 'Primary Buttons'),
      React.createElement('div', {
        key: 'primary-buttons',
        style: { display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }
      }, [
        React.createElement(PrimaryButton, { key: 'contained', startIcon: React.createElement(Add) }, 'Contained Primary'),
        React.createElement(OutlinedPrimaryButton, { key: 'outlined', startIcon: React.createElement(Edit) }, 'Outlined Primary'),
        React.createElement(TextPrimaryButton, { key: 'text', startIcon: React.createElement(Add) }, 'Text Primary')
      ])
    ]),
    
    // Secondary Button Section
    React.createElement('div', { key: 'secondary-section' }, [
      React.createElement('h3', { 
        key: 'secondary-title',
        style: { marginBottom: '16px', color: '#333', fontFamily: '"Open Sans", sans-serif' }
      }, 'Secondary Button'),
      React.createElement('div', {
        key: 'secondary-button',
        style: { display: 'flex', gap: '16px' }
      }, [
        React.createElement(SecondaryButton, { key: 'secondary', startIcon: React.createElement(Delete) }, 'Contained Secondary')
      ])
    ]),
    
    // Status Buttons Section
    React.createElement('div', { key: 'status-section' }, [
      React.createElement('h3', { 
        key: 'status-title',
        style: { marginBottom: '16px', color: '#333', fontFamily: '"Open Sans", sans-serif' }
      }, 'Status Buttons'),
      React.createElement('div', {
        key: 'status-buttons',
        style: { display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }
      }, [
        React.createElement(ErrorButton, { key: 'error', startIcon: React.createElement(Error) }, 'Contained Error'),
        React.createElement(SuccessButton, { key: 'success', startIcon: React.createElement(Check) }, 'Contained Success')
      ])
    ])
  ]);
