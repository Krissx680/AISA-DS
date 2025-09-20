import { TextPrimaryButton } from './TextPrimaryButton';

export default {
  title: 'Components/TextPrimaryButton',
  component: TextPrimaryButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Button content',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    disableRipple: {
      control: 'boolean',
      description: 'Whether to disable the ripple effect',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Button size',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the button takes full width',
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler',
    },
  },
};

// Default story
export const Default = {
  args: {
    children: 'Text Button',
  },
};

// Disabled state
export const Disabled = {
  args: {
    children: 'Disabled Text Button',
    disabled: true,
  },
};

// Without ripple effect
export const NoRipple = {
  args: {
    children: 'No Ripple',
    disableRipple: true,
  },
};

// Different sizes
export const Small = {
  args: {
    children: 'Small Text Button',
    size: 'small',
  },
};

export const Medium = {
  args: {
    children: 'Medium Text Button',
    size: 'medium',
  },
};

export const Large = {
  args: {
    children: 'Large Text Button',
    size: 'large',
  },
};

// Full width
export const FullWidth = {
  args: {
    children: 'Full Width Text Button',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
};

// Interactive example
export const Interactive = {
  args: {
    children: 'Click me!',
    onClick: () => alert('Text button clicked!'),
  },
};