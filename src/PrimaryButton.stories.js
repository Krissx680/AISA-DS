import { PrimaryButton } from './PrimaryButton';

export default {
  title: 'Components/PrimaryButton',
  component: PrimaryButton,
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
    children: 'Primary Button',
  },
};

// Disabled state
export const Disabled = {
  args: {
    children: 'Disabled Button',
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
    children: 'Small Button',
    size: 'small',
  },
};

export const Medium = {
  args: {
    children: 'Medium Button',
    size: 'medium',
  },
};

export const Large = {
  args: {
    children: 'Large Button',
    size: 'large',
  },
};

// Full width
export const FullWidth = {
  args: {
    children: 'Full Width Button',
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
    onClick: () => alert('Button clicked!'),
  },
};