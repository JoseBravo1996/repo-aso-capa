import { ReadReasonsResponse } from './../../interfaces/recover/readReasons';
import { RejectRecover } from './../../interfaces/recover/rejectRecover';
import { CloseRecover } from './../../interfaces/recover/closeRecover';
import { recoversRoutes } from './../../constants/recovers';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBsaWNhdGlvbklkIjoiMSIsIkFwcGxpY2F0aW9uVG9rZW4iOiJmZTgwNGUzOC1iMTA0LTQyNDEtOWE1My1mYWY5NmE0ZjIyMzYiLCJBdXRvbWF0aW9uQWNjZXNzIjoiVHJ1ZSIsIm5hbWVpZCI6IjQ1YmRjOTYwLTU3ZjctNDU3Mi1iNTM4LTk5OTRkNTJlOTAzYiIsInVuaXF1ZV9uYW1lIjoiSkJyYXZvQGFzb2NpYXJ0LmNvbS5hciIsImVtYWlsIjoiSkJyYXZvQGFzb2NpYXJ0LmNvbS5hciIsIkZpcnN0TmFtZSI6Ikpvc8ODwqkgTHVpcyIsIkxhc3ROYW1lIjoiQnJhdm8iLCJUYXhJZCI6IiIsIk9mZmljaWFsSWRUeXBlIjoiIiwiZ2VuZGVyIjoiIiwiQ3VpdEN1aWwiOiIiLCJyb2xlIjpbIkFkbWluaXN0cmFkb3IiLCJVc3VhcmlvIl0sIm5iZiI6MTYwNzcxOTQzMSwiZXhwIjoxNjA3NzI2NjMxLCJpYXQiOjE2MDc3MTk0MzF9.QEYNuJ8-5ffGR-ZYpCR9ioJoXDJeu4eOsQwf1RS38gE'
});
@Injectable({
  providedIn: 'root'
})
export class RecoverService {

  constructor(private http: HttpClient) { }

  closeRecoverDifferenceValuesAsync(request: CloseRecover): Observable<any>{
    return this.http.post<CloseRecover>(environment.recover + recoversRoutes.home.closeRecover, request, {headers: headers});
  }

  readClosingReasonsDifferenceAsync(){
    return this.http.get<ReadReasonsResponse>(environment.recover + recoversRoutes.home.readReasons, {headers: headers});
  }

  rejectClosingRecoverAsync(request: RejectRecover) : Observable<any>{
    return this.http.post<RejectRecover>(environment.recover + recoversRoutes.home.rejectRecover, request, {headers: headers});
  }
}
