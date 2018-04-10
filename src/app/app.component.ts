import { Component } from '@angular/core';
import { ThemesService } from './services/themes.service';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  themes: any[];
  selectedTheme: string;

  constructor(private service:ThemesService){
    service.getThemes().subscribe(response => {
      this.themes = response.json().themes;
      this.selectedTheme = response.json().themes[0].cssMin;
    })
  }

  onThemeSelected(selectedUrl:string){
    $('#styleUrl').attr("href", selectedUrl);
  }

  setTheme(theme:string){
    this.selectedTheme = theme;
    $("#styleUrl").attr("href", this.selectedTheme);
  }
}
