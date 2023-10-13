import { RestService } from './rest.service';
import { Component, OnInit } from '@angular/core';
import { FavoriteServiceService } from './favorite-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'first-angular-app';
  public videoList:any = []

  constructor(private RestService: RestService){

  }
  ngOnInit(): void {
    this.cargarData();
  }

  public cargarData() {
    this.RestService.get('../assets/data/data.json')
    .subscribe(respuesta => {
      this.videoList = respuesta;
    })
  }
}
