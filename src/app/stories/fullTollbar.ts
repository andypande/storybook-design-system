import { Component } from '@angular/core';
import {MatButtonModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule} from '@angular/material';

@Component({
  template: `
    <span [ngClass]="{ 'torq-dark-theme' : !lightTheme}">
    <mat-toolbar color="surface" class="mat-elevation-z4">
    <div class="appInfo">
            <button mat-icon-button (click)="sidenav.toggle()">
                <mat-icon>view_headline</mat-icon>
            </button>
            <img src="https://i.imgur.com/HlSPyjf.png" style="width: 100px; position: absolute; left: 40px;"/>
            <span color="primary" id="appname">{{appname}}</span>
    </div>
    </mat-toolbar>

    <mat-drawer-container autosize="true" hasBackdrop="false" class="layout-container" color="primary" [ngClass]="{ 'background-light' : lightTheme, 'background-dark': !lightTheme }">
        <mat-drawer #sidenav mode="side" opened> 
                <mat-nav-list disableRipple="true" *ngFor="let n of menuItems" (click)="select(n)" [ngClass]="{active: isActive(n)}">
                        <a mat-list-item> {{n}} </a>
                </mat-nav-list>
        </mat-drawer>
        <mat-drawer-content>
        </mat-drawer-content>
    </mat-drawer-container>
    `
})
export class AppComponent {
  lightTheme = true;
  name = 'Application Name';

  selected :any;
  
  select(item) {
    this.selected = item; 
  };

  isActive(item) {
    return this.selected === item;
  };
// https://storybooks-official.netlify.com/?path=/story/addons-knobs-withknobs--tweaks-static-values
// All the things you can tweak with knobs

}
