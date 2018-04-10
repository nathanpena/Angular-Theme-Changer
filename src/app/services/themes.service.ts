import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class ThemesService {
  private url = "https://bootswatch.com/api/4.json";
  public bootswatchThemes:any[];
  private theme:string;

  constructor(public http:Http) {

  }

  getThemes(){
    return this.http.get(this.url);
  }

  setTheme(theme:string){
    this.theme = theme;
  }

  getTheme (){
    return this.theme;
  }
}
