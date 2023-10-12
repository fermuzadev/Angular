import { Component, OnInit, Input } from '@angular/core';
import {FavoriteServiceService} from '../favorite-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() dataEntrante:any;
  public image:string;
  
  constructor(private servicioFavoritos:FavoriteServiceService) { 

  this.image='';
}
  
  ngOnInit(): void {
      this.image = 'https://picsum.photos/536/354'
      // console.log('Entrando data: ', this.dataEntrante)
    
    }

    agregarFavorito() {
      // console.log(this.dataEntrante)
      this.servicioFavoritos.disparadorDeFavoritos.emit({data: this.dataEntrante});
    }
  }
