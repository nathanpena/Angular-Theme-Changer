import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ThemesService } from './services/themes.service';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [ThemesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
