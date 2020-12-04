import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  checkEmail(email: string) {
    return of({ isEmailAvailable: email !== 'jose@neoris.com' })
    .pipe(delay(500));
  }

}
