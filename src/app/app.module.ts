import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './home/home.component';
import { MenudemoComponent } from './menudemo/menudemo.component';
import { FormsModule } from '@angular/forms';
import {
    MatButtonModule, 
    MatSidenavModule, 
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule
} from '@angular/material';


@NgModule({
    declarations: [
        AppComponent, HomeComponent, MenudemoComponent
    ],
    imports: [
        BrowserModule, 
        AppRoutingModule, 
        BrowserAnimationsModule, 
        MatButtonModule,
        MatSidenavModule, 
        MatCheckboxModule,
        MatToolbarModule, 
        MatIconModule,
        FormsModule
    ],
    exports: [MatButtonModule,MatSidenavModule, MatCheckboxModule, MatToolbarModule],

    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}