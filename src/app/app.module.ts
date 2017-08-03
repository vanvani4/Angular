import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav.component';
import { InfoComponent } from './info.component';
import { FotoComponent } from './foto.component';

@NgModule({
    declarations: [
         AppComponent,
         NavComponent,
         InfoComponent,
         FotoComponent
    ],
    imports: [
        BrowserModule 
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

}