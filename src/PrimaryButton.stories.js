import React from 'react';

export default {
  title: 'Components/Buttons/Primary',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['contained', 'outlined', 'text'],
      description: 'Visual style variant of the button',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size of the button (not available for text variant)',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the button is disabled',
    },
    children: {
      control: { type: 'text' },
      description: 'Button content',
    },
    onClick: { action: 'clicked' },
  },
};


import { PrimaryButton } from './PrimaryButton';
import { OutlinedPrimaryButton } from './OutlinedPrimaryButton';
import { TextPrimaryButton } from './TextPrimaryButton';

const Template = (args) => {
  const { variant, children, size, disabled, onClick, ...otherProps } = args;
  
  const commonProps = {
    disabled,
    onClick,
    ...otherProps
  };
  
  switch (variant) {
    case 'outlined':
      return React.createElement(OutlinedPrimaryButton, {
        size: size,
        ...commonProps
      }, children);
    case 'text':
      return React.createElement(TextPrimaryButton, commonProps, children);
    case 'contained':
    default:
      return React.createElement(PrimaryButton, {
        size: size,
        ...commonProps
      }, children);
  }
};

// Default interactive story
export const Default = Template.bind({});
Default.args = {
  variant: 'contained',
  size: 'medium',
  children: 'Primary Button',
  disabled: false,
};

// Individual variant stories
export const Contained = () => 
  React.createElement(PrimaryButton, { size: 'medium' }, 'Contained Primary');

export const Outlined = () => 
  React.createElement(OutlinedPrimaryButton, { size: 'medium' }, 'Outlined Primary');

export const Text = () => 
  React.createElement(TextPrimaryButton, null, 'Text Primary');

// All variants showcase
export const AllVariants = () => 
  React.createElement('div', {
    style: { display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }
  }, [
    React.createElement(PrimaryButton, { key: 'contained' }, 'Contained'),
    React.createElement(OutlinedPrimaryButton, { key: 'outlined' }, 'Outlined'),
    React.createElement(TextPrimaryButton, { key: 'text' }, 'Text')
  ]);

// Size variants
export const ContainedSizes = () => 
  React.createElement('div', {
    style: { display: 'flex', gap: '16px', alignItems: 'center' }
  }, [
    React.createElement(PrimaryButton, { key: 'small', size: 'small' }, 'Small'),
    React.createElement(PrimaryButton, { key: 'medium', size: 'medium' }, 'Medium'),
    React.createElement(PrimaryButton, { key: 'large', size: 'large' }, 'Large')
  ]);

export const OutlinedSizes = () => 
  React.createElement('div', {
    style: { display: 'flex', gap: '16px', alignItems: 'center' }
  }, [
    React.createElement(OutlinedPrimaryButton, { key: 'small', size: 'small' }, 'Small'),
    React.createElement(OutlinedPrimaryButton, { key: 'medium', size: 'medium' }, 'Medium'),
    React.createElement(OutlinedPrimaryButton, { key: 'large', size: 'large' }, 'Large')
  ]);

// Disabled states
export const DisabledStates = () => 
  React.createElement('div', {
    style: { display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }
  }, [
    React.createElement(PrimaryButton, { key: 'contained-disabled', disabled: true }, 'Contained Disabled'),
    React.createElement(OutlinedPrimaryButton, { key: 'outlined-disabled', disabled: true }, 'Outlined Disabled'),
    React.createElement(TextPrimaryButton, { key: 'text-disabled', disabled: true }, 'Text Disabled')
  ]);
