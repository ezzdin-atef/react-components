import { Story } from '@storybook/react';
import { Badge, BadgeProps } from '../components/Badge';

export default {
  title: 'Badge',
  component: Badge,
};

const Template: Story<BadgeProps> = (args) => (
  <h3>
    <Badge {...args}>Badge</Badge> for visualizing
  </h3>
);

export const Default = Template.bind({});
Default.args = {};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};

export const Light = Template.bind({});
Light.args = {
  light: true,
};

export const Green = Template.bind({});
Green.args = {
  green: true,
};

export const Red = Template.bind({});
Red.args = {
  red: true,
};

export const Yellow = Template.bind({});
Yellow.args = {
  yellow: true,
};
