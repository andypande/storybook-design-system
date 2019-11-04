import {storiesOf} from '@storybook/angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule, MatIconModule, MatButtonModule} from '@angular/material';
import {boolean} from '@storybook/addon-knobs/angular';
import { centered } from '@storybook/addon-centered/angular';

storiesOf('tqMenu', module)
.addDecorator(centered)
  .add('Basic', () => ({
    template: `
    <div>
      <button mat-button [disabled]="disabled" [matMenuTriggerFor]="menu">Menu</button>
      <mat-menu #menu="matMenu">
        <button mat-menu-item>Item 1</button>
        <button mat-menu-item>Item 2</button>
      </mat-menu>
    </div>
    `,
    props: {
      disabled: boolean('disabled', false)
    },
    moduleMetadata: {
      imports: [MatMenuModule, MatButtonModule, BrowserAnimationsModule]
    }
  }))
  .add('Nested', () => ({
    template: `
    <div>
      <button mat-button [disabled]="disabled" [matMenuTriggerFor]="animals">Animal index</button>
      <mat-menu #animals="matMenu">
        <button mat-menu-item [matMenuTriggerFor]="vertebrates">Vertebrates</button>
        <button mat-menu-item [matMenuTriggerFor]="invertebrates">Invertebrates</button>
      </mat-menu>
      <mat-menu #vertebrates="matMenu">
        <button mat-menu-item [matMenuTriggerFor]="fish">Fishes</button>
        <button mat-menu-item [matMenuTriggerFor]="amphibians">Amphibians</button>
        <button mat-menu-item [matMenuTriggerFor]="reptiles">Reptiles</button>
        <button mat-menu-item>Birds</button>
        <button mat-menu-item>Mammals</button>
      </mat-menu>
      <mat-menu #invertebrates="matMenu">
        <button mat-menu-item>Insects</button>
        <button mat-menu-item>Molluscs</button>
        <button mat-menu-item>Crustaceans</button>
        <button mat-menu-item>Corals</button>
        <button mat-menu-item>Arachnids</button>
        <button mat-menu-item>Velvet worms</button>
        <button mat-menu-item>Horseshoe crabs</button>
      </mat-menu>
      <mat-menu #fish="matMenu">
        <button mat-menu-item>Baikal oilfish</button>
        <button mat-menu-item>Bala shark</button>
        <button mat-menu-item>Ballan wrasse</button>
        <button mat-menu-item>Bamboo shark</button>
        <button mat-menu-item>Banded killifish</button>
      </mat-menu>
      <mat-menu #amphibians="matMenu">
        <button mat-menu-item>Sonoran desert toad</button>
        <button mat-menu-item>Western toad</button>
        <button mat-menu-item>Arroyo toad</button>
        <button mat-menu-item>Yosemite toad</button>
      </mat-menu>
      <mat-menu #reptiles="matMenu">
        <button mat-menu-item>Banded Day Gecko</button>
        <button mat-menu-item>Banded Gila Monster</button>
        <button mat-menu-item>Black Tree Monitor</button>
        <button mat-menu-item>Blue Spiny Lizard</button>
        <button mat-menu-item disabled>Velociraptor</button>
      </mat-menu>
    </div>
    `,
    props: {
      disabled: boolean('disabled', false)
    },
    moduleMetadata: {
      imports: [MatMenuModule, MatButtonModule, BrowserAnimationsModule]
    }
  }));