import { storiesOf } from '@storybook/angular';
import { boolean, array, text, withKnobs } from '@storybook/addon-knobs';

import { Button } from '@storybook/angular/demo';

const stories = storiesOf('Storybook Knobs', module);

// "withKnobs" decorator should be applied before the stories using knobs
stories.addDecorator(withKnobs);

// Knobs for Angular props
stories.add('with a button', () => ({
  component: Button,
  props: {
   text: text('text', 'Hello Storybook'), // The first param of the knob function has to be exactly the same as the component input.
   menuItems: array('Menu Items', ['Menu Item 1', 'Menu Item 2', 'Menu Item 3', 'Menu Item 4'])
  },
}));
