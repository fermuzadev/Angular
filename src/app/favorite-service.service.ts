import { EventEmitter,Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteServiceService {
  @Output() disparadorDeFavoritos: EventEmitter<any> = new EventEmitter(); 
  constructor() { }
}
