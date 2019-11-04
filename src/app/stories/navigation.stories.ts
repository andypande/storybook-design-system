import {storiesOf} from '@storybook/angular';
import {MatButtonModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, array } from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';
import {AppComponent} from './fullTollbar'

import '!style-loader!css-loader!./navigation.css';

storiesOf('navigation', module)
.addDecorator(withA11y)
.addDecorator(withKnobs)
  .add('Side', () => ({
    component: AppComponent,
    props: {
        appname: text('AppName', 'Application Name'),
        menuItems: array('Items', ['Menu Item 1', 'Menu Item 2', 'Menu Item 3', 'Menu Item 4'])
    },
    moduleMetadata: {
      imports: [MatButtonModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, BrowserAnimationsModule]
    }
  }))