import { configure, addParameters } from '@storybook/angular';
import tqTheme from './tqTheme';

addParameters({
  options: {
    theme: tqTheme,
  },
});
configure(require.context('../src', true, /\.stories\.[tj]s$/), module);
 