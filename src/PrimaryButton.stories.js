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
    onClick: { action: 'clicked' },
  },
};

import { PrimaryButton } from './PrimaryButton';
import { OutlinedPrimaryButton } from './OutlinedPrimaryButton';
import { TextPrimaryButton } from './TextPrimaryButton';

const Template = (args) => {
  const { variant, children, size, disabled, onClick, ...otherProps } = args;
  
  const commonProps = {
    size,
    disabled,
    onClick,
    ...otherProps
  };
  
  switch (variant) {
    case 'outlined':
      return React.createElement(OutlinedPrimaryButton, commonProps, children);
    case 'text':
      return React.createElement(TextPrimaryButton, commonProps, children);
    case 'contained':
    default:
      return React.createElement(PrimaryButton, commonProps, children);
  }
};


// Individual variant stories
export const Contained = () => 
  React.createElement(PrimaryButton, { size: 'medium' }, 'Contained Primary');

export const Outlined = () => 
  React.createElement(OutlinedPrimaryButton, { size: 'medium' }, 'Outlined Primary');

export const Text = () => 
  React.createElement(TextPrimaryButton, { size: 'medium' }, 'Text Primary');

// All variants showcase
export const AllVariants = () => 
  React.createElement('div', {
    style: { display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }
  }, [
    React.createElement(PrimaryButton, { key: 'contained' }, 'Contained'),
    React.createElement(OutlinedPrimaryButton, { key: 'outlined' }, 'Outlined'),
    React.createElement(TextPrimaryButton, { key: 'text' }, 'Text')
  ]);

// Size variants for all button types
export const AllSizes = () => 
  React.createElement('div', {
    style: { display: 'flex', flexDirection: 'column', gap: '24px' }
  }, [
    // Small buttons
    React.createElement('div', {
      key: 'small-section',
      style: { display: 'flex', gap: '16px', alignItems: 'center' }
    }, [
      React.createElement('span', { key: 'small-label', style: { minWidth: '60px', fontWeight: 'bold' } },),
      React.createElement(PrimaryButton, { key: 'contained-small', size: 'small' }, 'Contained'),
      React.createElement(OutlinedPrimaryButton, { key: 'outlined-small', size: 'small' }, 'Outlined'),
      React.createElement(TextPrimaryButton, { key: 'text-small', size: 'small' }, 'Text')
    ]),
    // Medium buttons
    React.createElement('div', {
      key: 'medium-section',
      style: { display: 'flex', gap: '16px', alignItems: 'center' }
    }, [
      React.createElement('span', { key: 'medium-label', style: { minWidth: '60px', fontWeight: 'bold' } },),
      React.createElement(PrimaryButton, { key: 'contained-medium', size: 'medium' }, 'Contained'),
      React.createElement(OutlinedPrimaryButton, { key: 'outlined-medium', size: 'medium' }, 'Outlined'),
      React.createElement(TextPrimaryButton, { key: 'text-medium', size: 'medium' }, 'Text')
    ]),
    // Large buttons
    React.createElement('div', {
      key: 'large-section',
      style: { display: 'flex', gap: '16px', alignItems: 'center' }
    }, [
      React.createElement('span', { key: 'large-label', style: { minWidth: '60px', fontWeight: 'bold' } },),
      React.createElement(PrimaryButton, { key: 'contained-large', size: 'large' }, 'Contained'),
      React.createElement(OutlinedPrimaryButton, { key: 'outlined-large', size: 'large' }, 'Outlined'),
      React.createElement(TextPrimaryButton, { key: 'text-large', size: 'large' }, 'Text')
    ])
  ]);

// Size variants - Contained only
export const ContainedSizes = () => 
  React.createElement('div', {
    style: { display: 'flex', gap: '16px', alignItems: 'center' }
  }, [
    React.createElement(PrimaryButton, { key: 'small', size: 'small' }, 'Small'),
    React.createElement(PrimaryButton, { key: 'medium', size: 'medium' }, 'Medium'),
    React.createElement(PrimaryButton, { key: 'large', size: 'large' }, 'Large')
  ]);

// Size variants - Outlined only
export const OutlinedSizes = () => 
  React.createElement('div', {
    style: { display: 'flex', gap: '16px', alignItems: 'center' }
  }, [
    React.createElement(OutlinedPrimaryButton, { key: 'small', size: 'small' }, 'Small'),
    React.createElement(OutlinedPrimaryButton, { key: 'medium', size: 'medium' }, 'Medium'),
    React.createElement(OutlinedPrimaryButton, { key: 'large', size: 'large' }, 'Large')
  ]);

// Size variants - Text only
export const TextSizes = () => 
  React.createElement('div', {
    style: { display: 'flex', gap: '16px', alignItems: 'center' }
  }, [
    React.createElement(TextPrimaryButton, { key: 'small', size: 'small' }, 'Small'),
    React.createElement(TextPrimaryButton, { key: 'medium', size: 'medium' }, 'Medium'),
    React.createElement(TextPrimaryButton, { key: 'large', size: 'large' }, 'Large')
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