import React from 'react';
import { Alert } from './Alert';


export default {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['simple', 'withTitle', 'withLabel', 'withTitleAndLabel'],
      description: 'The variant of the alert component',
      defaultValue: 'simple'
    },
    children: {
      control: 'text',
      description: 'The content of the alert (uses Body 2 Regular typography)',
    },
    title: {
      control: 'text',
      description: 'Optional title for the alert (uses Body 1 Semibold typography)',
    },
    severity: {
      control: 'select',
      options: ['error', 'success'],
      description: 'The severity of the alert',
    },
    label: {
      control: 'text',
      description: 'Optional button label that appears below the content (uses Overline Button typography)',
    },
    onLabelClick: {
      action: 'labelClicked',
      description: 'Callback fired when the label button is clicked',
    },
  },
};

// Playground Story
export const Playground = {
  args: {
    severity: 'error',
    title: 'Example Title',
    label: 'ACTION',
    children: 'This is a configurable alert. Try changing the severity, adding/removing the title or label, and modifying the content.',
  },
};

// Simple Alert (Description only)
export const SimpleAlert = {
  args: {
    variant: 'simple',
    severity: 'error',
    children: 'This is a simple alert message with Body 2 Regular typography.',
  },
};

// Alert with Title
export const AlertWithTitle = {
  args: {
    variant: 'withTitle',
    severity: 'error',
    title: 'Error Title',
    children: 'This is an alert with a title. The title uses Body 1 Semibold and the message uses Body 2 Regular typography.',
  },
};

// Alert with Label
export const AlertWithLabel = {
  args: {
    variant: 'withLabel',
    severity: 'error',
    label: 'RETRY NOW',
    children: 'This is an alert with a label button. The message uses Body 2 Regular and the label uses Overline Button typography.',
  },
};

// Alert with Title and Label
export const AlertWithTitleAndLabel = {
  args: {
    variant: 'withTitleAndLabel',
    severity: 'error',
    title: 'Connection Failed',
    label: 'RETRY NOW',
    children: 'This is an alert with both title and label. The title uses Body 1 Semibold, the message uses Body 2 Regular, and the label uses Overline Button typography.',
  },
};

// Success Variants
export const SuccessAlertWithTitleAndLabel = {
  args: {
    variant: 'withTitleAndLabel',
    severity: 'success',
    title: 'File Uploaded',
    label: 'VIEW FILE',
    children: 'This is a success alert with both title and label. The title uses Body 1 Semibold, the message uses Body 2 Regular, and the label uses Overline Button typography.',
  },
};

