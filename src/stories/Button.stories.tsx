import { Story } from '@storybook/react';
import { Button, ButtonProps } from '../components/Button';

export default {
  title: 'Button',
  component: Button,
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
};

export const Loading = Template.bind({});
Loading.args = {
  label: 'Button',
  loading: true,
};

export const Light = Template.bind({});
Light.args = {
  label: 'Button',
  light: true,
};

export const Green = Template.bind({});
Green.args = {
  label: 'Button',
  green: true,
};

export const Red = Template.bind({});
Red.args = {
  label: 'Button',
  red: true,
};

export const Yellow = Template.bind({});
Yellow.args = {
  label: 'Button',
  yellow: true,
};
