import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { BlueComponent } from './blue/blue.component';
import { RedComponent } from './red/red.component';
import { GreenComponent } from './green/green.component';
import { YellowComponent } from './yellow/yellow.component';
import { BlackComponent } from './black/black.component';
import { WhiteComponent } from './white/white.component';
import { PinkComponent } from './pink/pink.component';
import { DirectivesDirective } from './directives.directive';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    BlueComponent,
    RedComponent,
    GreenComponent,
    YellowComponent,
    BlackComponent,
    WhiteComponent,
    PinkComponent,
    DirectivesDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
