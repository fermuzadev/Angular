import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class InformationService {

  info:any = {};
  load:boolean = false;
  loadabout:boolean = false;
  team:any = [];

  constructor(public http: HttpClient) { 
    this.info_load();
    this.load_aboutus();
    
  }
    
    public info_load() {
      this.http.get("assets/data/data.json")
      .subscribe(data => {
        this.load = true;
        this.info = data;
      })
    }

    public load_aboutus() {
      this.http.get("assets/data/data.json")
      .subscribe(data => {
        this.loadabout = true;
        this.team = data;
      })
    }
}
