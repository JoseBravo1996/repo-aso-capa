import { delay } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  checkMail(mail: string){
    return of({validMail: mail !== 'jose.bravo@neoris.com'}).pipe(delay(500));
  }

  
}
