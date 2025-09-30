import React from 'react';
import { Alert } from './Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Alert Component

The Alert component displays important messages to users with various severity levels and optional interactive elements.

## Features

- **Two Severity Types**: Error and Success states with appropriate color schemes
- **Four Variants**: Simple, with title, with label button, or with both
- **Typography Hierarchy**: Uses Body 1 Semibold for titles, Body 2 Regular for content, and Overline Button for action labels
- **Interactive Labels**: Optional clickable label buttons for user actions
- **Consistent Styling**: Follows design system color tokens and spacing

## Variants

- **simple**: Basic alert with only description text
- **withTitle**: Alert with a title and description
- **withLabel**: Alert with description and action button
- **withTitleAndLabel**: Full-featured alert with title, description, and action button

## Severity Types

- **error**: Red color scheme for error messages
- **success**: Green color scheme for success messages

## Usage

\`\`\`tsx
import { Alert } from './Alert';

// Simple alert
<Alert severity="error">
  This is a simple error message.
</Alert>

// Alert with title
<Alert 
  severity="success" 
  title="Success!"
  variant="withTitle"
>
  Your file has been uploaded successfully.
</Alert>

// Alert with action button
<Alert 
  severity="error" 
  label="RETRY NOW"
  onLabelClick={() => console.log('Retry clicked')}
  variant="withLabel"
>
  Connection failed. Please try again.
</Alert>

// Full-featured alert
<Alert 
  severity="success" 
  title="Upload Complete"
  label="VIEW FILE"
  onLabelClick={() => console.log('View file clicked')}
  variant="withTitleAndLabel"
>
  Your document has been successfully uploaded.
</Alert>
\`\`\`

## Accessibility

- Uses semantic HTML with proper ARIA roles
- Color is not the only indicator of severity (icons are included)
- Label buttons are keyboard accessible and have proper focus states
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['simple', 'withTitle', 'withLabel', 'withTitleAndLabel'],
      description: 'The variant of the alert component',
      defaultValue: 'simple',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'simple' },
      },
    },
    children: {
      control: 'text',
      description: 'The content of the alert (uses Body 2 Regular typography)',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    title: {
      control: 'text',
      description: 'Optional title for the alert (uses Body 1 Semibold typography)',
      table: {
        type: { summary: 'string' },
      },
    },
    severity: {
      control: 'select',
      options: ['error', 'success'],
      description: 'The severity of the alert',
      table: {
        type: { summary: 'error | success' },
        defaultValue: { summary: 'error' },
      },
    },
    label: {
      control: 'text',
      description: 'Optional button label that appears below the content (uses Overline Button typography)',
      table: {
        type: { summary: 'string' },
      },
    },
    onLabelClick: {
      action: 'labelClicked',
      description: 'Callback fired when the label button is clicked',
      table: {
        type: { summary: '() => void' },
      },
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
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to experiment with all alert properties. Use the controls below to customize the alert.',
      },
    },
  },
};

// Simple Alert (Description only)
export const SimpleAlert = {
  args: {
    variant: 'simple',
    severity: 'error',
    children: 'This is a simple alert message with Body 2 Regular typography.',
  },
  parameters: {
    docs: {
      description: {
        story: 'The simplest form of alert with only a description message. Use this for brief, straightforward notifications.',
      },
    },
  },
};

// Simple Success Alert
export const SimpleSuccessAlert = {
  args: {
    variant: 'simple',
    severity: 'success',
    children: 'Operation completed successfully.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Simple success alert for positive feedback without additional context.',
      },
    },
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
  parameters: {
    docs: {
      description: {
        story: 'Alert with a title for added context. The title helps categorize or emphasize the alert message.',
      },
    },
  },
};

// Success Alert with Title
export const SuccessAlertWithTitle = {
  args: {
    variant: 'withTitle',
    severity: 'success',
    title: 'Success',
    children: 'Your changes have been saved successfully.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Success variant with title for confirming positive actions.',
      },
    },
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
  parameters: {
    docs: {
      description: {
        story: 'Alert with an action button. Use this when you want to provide a quick action related to the alert message.',
      },
    },
  },
};

// Success Alert with Label
export const SuccessAlertWithLabel = {
  args: {
    variant: 'withLabel',
    severity: 'success',
    label: 'VIEW DETAILS',
    children: 'Your file has been uploaded.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Success alert with action button for next steps.',
      },
    },
  },
};

// Alert with Title and Label
export const AlertWithTitleAndLabel = {
  args: {
    variant: 'withTitleAndLabel',
    severity: 'error',
    title: 'Connection Failed',
    label: 'RETRY NOW',
    children: 'Unable to connect to the server. Please check your internet connection and try again.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Full-featured alert with both title and action button. Ideal for important notifications that require user action.',
      },
    },
  },
};

// Success Alert with Title and Label
export const SuccessAlertWithTitleAndLabel = {
  args: {
    variant: 'withTitleAndLabel',
    severity: 'success',
    title: 'File Uploaded',
    label: 'VIEW FILE',
    children: 'Your document has been successfully uploaded to the server and is now available for viewing.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Success variant with both title and action. Shows complete information with a clear next step.',
      },
    },
  },
};

// All Variants Showcase
export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '500px' }}>
      <Alert variant="simple" severity="error">
        Simple error alert
      </Alert>
      <Alert variant="simple" severity="success">
        Simple success alert
      </Alert>
      <Alert variant="withTitle" severity="error" title="Error">
        Alert with title
      </Alert>
      <Alert variant="withLabel" severity="error" label="ACTION">
        Alert with label button
      </Alert>
      <Alert 
        variant="withTitleAndLabel" 
        severity="success" 
        title="Complete" 
        label="VIEW"
      >
        Alert with title and label
      </Alert>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all alert variants and severity types.',
      },
    },
  },
};