import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // <-- Make sure this is present
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // <-- Ensure AppRoutingModule is included here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }