import { Story } from '@storybook/react';
import Button, { ButtonProps } from '../components/Button';

export default {
  title: 'Button',
  component: Button,
};

// const Template: Story<ButtonProps> = args => <Button.Default {...args} />;

export const Default = () => <Button.Default>Default</Button.Default>;
export const Loading = () => <Button.Default loading>Default</Button.Default>;
export const Green = () => <Button.Green>Green</Button.Green>;
export const Yellow = () => <Button.Yellow>Yellow</Button.Yellow>;
export const Red = () => <Button.Red>Red</Button.Red>;
export const Light = () => <Button.Light>Light</Button.Light>;

// export const Loading = Template.bind({});
// Loading.args = {
//   label: 'Button',
//   loading: true,
// };

// export const Light = Template.bind({});
// Light.args = {
//   label: 'Button',
//   light: true,
// };

// export const Green = Template.bind({});
// Green.args = {
//   label: 'Button',
//   green: true,
// };

// export const Red = Template.bind({});
// Red.args = {
//   label: 'Button',
//   red: true,
// };

// export const Yellow = Template.bind({});
// Yellow.args = {
//   label: 'Button',
//   yellow: true,
// };
