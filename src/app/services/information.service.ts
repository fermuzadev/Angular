import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class InformationService {

  info:any = {};
  loaded:boolean = false;

  constructor(public http: HttpClient) { 
    this.http.get("assets/data/data.json")
    .subscribe(data => {
      this.loaded = true;
      this.info = data;
    })
  }
}
