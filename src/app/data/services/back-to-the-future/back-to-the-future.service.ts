import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackToTheFutureService {

  private telegrafista  = new BehaviorSubject<string>('');

  // No se utiliza directamente el BehaviorSubject (buena practica)
  // Se canaliza su uso a través de un observable que será público.
  // Este observable llamará quién quiera ver el último mensaje que se dejó.
  public telegrafista$ = this.telegrafista.asObservable();

  // Almacenar mensaje, listo para mostrarlo a quién lo pida.
  send(menssage) {
    // function que llamará quien quiera transmitir un mensaje.
    this.telegrafista.next(menssage);
  }
  
  constructor() { }
}
