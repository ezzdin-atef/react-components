import { Story } from '@storybook/react';
import { Loader } from '../components/Loader';

export default {
  title: 'Loader',
  component: Loader,
};

export const Default = () => <Loader className="text-blue-600" />;
