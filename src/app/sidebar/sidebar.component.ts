import { Component, OnInit } from '@angular/core';
import {FavoriteServiceService} from '../favorite-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{

  constructor(private servicioFavoritos:FavoriteServiceService) { }
  public videoList:Array<any> = [] 
  ngOnInit():void{
    this.servicioFavoritos.disparadorDeFavoritos.subscribe(data => {
      console.log('Recibiendo data...',data);
      this.videoList.push(data);
    })
  }

}
