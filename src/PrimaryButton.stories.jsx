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
  component: PrimaryButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Button Components

A comprehensive set of button components following the design system standards, built on Material-UI with custom styling.

## Overview

The button library includes multiple variants to cover different use cases and visual hierarchies:

- **Primary Buttons**: Main call-to-action buttons in contained, outlined, and text variants
- **Secondary Button**: Alternative actions with neutral styling  
- **Status Buttons**: Error and success states for contextual actions

## Button Variants

### Primary Buttons
- **Contained Primary**: High-emphasis button for primary actions (brand blue)
- **Outlined Primary**: Medium-emphasis button with border (brand blue outline)
- **Text Primary**: Low-emphasis button for tertiary actions (brand blue text)

### Secondary Button
- **Contained Secondary**: Alternative actions with neutral gray styling

### Status Buttons
- **Error Button**: Destructive actions (red)
- **Success Button**: Confirmations and positive actions (green)

## Sizes

All buttons support three sizes:
- **Small**: 8px vertical padding, 16px horizontal padding, 14px font size
- **Medium** (default): 10px vertical padding, 20px horizontal padding, 16px font size
- **Large**: 12px vertical padding, 24px horizontal padding, 18px font size

## Usage

\`\`\`jsx
import { PrimaryButton } from './PrimaryButton';
import { OutlinedPrimaryButton } from './OutlinedPrimaryButton';
import { Add, Delete } from '@mui/icons-material';

// Primary contained button
<PrimaryButton size="medium">
  Click Me
</PrimaryButton>

// With icon
<PrimaryButton startIcon={<Add />}>
  Add Item
</PrimaryButton>

// Outlined variant
<OutlinedPrimaryButton size="large" disabled>
  Disabled
</OutlinedPrimaryButton>
\`\`\`

## Best Practices

1. Use **Contained Primary** for the most important action on a page
2. Use **Outlined Primary** for secondary actions
3. Use **Text Primary** for tertiary or less important actions
4. Use **Error buttons** sparingly for destructive actions
5. Use **Success buttons** for confirmations after positive actions
6. Always provide meaningful button text
7. Use icons to enhance understanding, not replace text
8. Maintain consistent button sizes within the same context

## Accessibility

- Proper color contrast ratios for WCAG compliance
- Clear hover and focus states
- Disabled state styling for inactive buttons
- Support for keyboard navigation
- Icon + text combinations for better comprehension
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['contained-primary', 'outlined-primary', 'text-primary', 'contained-secondary', 'contained-error', 'contained-success'],
      description: 'Button variant',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'contained-primary' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size of the button',
      table: {
        type: { summary: 'small | medium | large' },
        defaultValue: { summary: 'medium' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the button is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    children: {
      control: { type: 'text' },
      description: 'Button content',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    startIcon: {
      control: { type: 'boolean' },
      description: 'Optional icon element to display before the button text',
      table: {
        type: { summary: 'ReactNode' },
      },
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
Playground.parameters = {
  docs: {
    description: {
      story: 'Interactive playground to experiment with all button variants and properties. Use the controls below to test different combinations of size, state, icons, and variants.',
    },
  },
};

// Primary Buttons
export const ContainedPrimary = {
  render: () => React.createElement(PrimaryButton, { startIcon: React.createElement(Add) }, 'Contained Primary'),
  parameters: {
    docs: {
      description: {
        story: 'High-emphasis button for primary actions. Uses brand blue color.',
      },
    },
  },
};

export const OutlinedPrimary = {
  render: () => React.createElement(OutlinedPrimaryButton, { startIcon: React.createElement(Edit) }, 'Outlined Primary'),
  parameters: {
    docs: {
      description: {
        story: 'Medium-emphasis button with border. Good for secondary actions.',
      },
    },
  },
};

export const TextPrimary = {
  render: () => React.createElement(TextPrimaryButton, { startIcon: React.createElement(Add) }, 'Text Primary'),
  parameters: {
    docs: {
      description: {
        story: 'Low-emphasis button for tertiary actions. Minimal visual weight.',
      },
    },
  },
};

// Secondary Button
export const ContainedSecondary = {
  render: () => React.createElement(SecondaryButton, { startIcon: React.createElement(Delete) }, 'Contained Secondary'),
  parameters: {
    docs: {
      description: {
        story: 'Alternative actions with neutral gray styling.',
      },
    },
  },
};

// Status Buttons
export const ContainedError = {
  render: () => React.createElement(ErrorButton, { startIcon: React.createElement(Error) }, 'Contained Error'),
  parameters: {
    docs: {
      description: {
        story: 'Destructive actions. Use sparingly for delete/remove operations.',
      },
    },
  },
};

export const ContainedSuccess = {
  render: () => React.createElement(SuccessButton, { startIcon: React.createElement(Check) }, 'Contained Success'),
  parameters: {
    docs: {
      description: {
        story: 'Confirmations and positive actions. Good for save/submit operations.',
      },
    },
  },
};

// Size Variants
export const Sizes = {
  render: () => React.createElement('div', {
    style: { display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }
  }, [
    React.createElement(PrimaryButton, { key: '1', size: 'small' }, 'Small'),
    React.createElement(PrimaryButton, { key: '2', size: 'medium' }, 'Medium'),
    React.createElement(PrimaryButton, { key: '3', size: 'large' }, 'Large'),
  ]),
  parameters: {
    docs: {
      description: {
        story: 'All buttons support three sizes: small (14px), medium (16px), and large (18px).',
      },
    },
  },
};

// Disabled State
export const DisabledStates = {
  render: () => React.createElement('div', {
    style: { display: 'flex', gap: '16px', flexWrap: 'wrap' }
  }, [
    React.createElement(PrimaryButton, { key: '1', disabled: true }, 'Disabled Primary'),
    React.createElement(OutlinedPrimaryButton, { key: '2', disabled: true }, 'Disabled Outlined'),
    React.createElement(SecondaryButton, { key: '3', disabled: true }, 'Disabled Secondary'),
  ]),
  parameters: {
    docs: {
      description: {
        story: 'Disabled state for all button variants with reduced opacity and no hover effects.',
      },
    },
  },
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

AllButtons.parameters = {
  docs: {
    description: {
      story: 'Complete showcase of all available button variants organized by category.',
    },
  },
};