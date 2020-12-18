import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfiTelegrafoService {
  private telegrafista = new BehaviorSubject<string>('');

  public telegrafista$ = this.telegrafista.asObservable();

  constructor() { }

  sendMessage(message){
    this.telegrafista.next(message);
  }
}
