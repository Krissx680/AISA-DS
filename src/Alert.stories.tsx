import React from 'react';
import { Alert } from './Alert';


export default {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'The content of the alert',
    },
    title: {
      control: 'text',
      description: 'Optional title for the alert',
    },
    severity: {
      control: 'select',
      options: ['error', 'success'],
      description: 'The severity of the alert',
    },
  },
};

// Error Alert Story
export const ErrorAlert = {
  args: {
    severity: 'error',
    children: 'This is an error alert message with Body 2 Regular typography.',
  },
};

// Success Alert Story
export const SuccessAlert = {
  args: {
    severity: 'success',
    children: 'This is a success alert message with Body 2 Regular typography.',
  },
};

// Error Alert with Title
export const ErrorAlertWithTitle = {
  args: {
    severity: 'error',
    title: 'Error Title',
    children: 'This is an error alert message. The title uses Body 1 Semibold and the message uses Body 2 Regular typography.',
  },
};

// Success Alert with Title
export const SuccessAlertWithTitle = {
  args: {
    severity: 'success',
    title: 'Success Title',
    children: 'This is a success alert message. The title uses Body 1 Semibold and the message uses Body 2 Regular typography.',
  },
};

