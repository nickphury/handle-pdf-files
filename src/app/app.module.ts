import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsingSimplePdfViewerComponent } from './components/using-simple-pdf-viewer/using-simple-pdf-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    UsingSimplePdfViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
