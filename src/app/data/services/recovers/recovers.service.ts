import { recoversRoutes } from './../../constants/recoversRoutes';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

const headers = new HttpHeaders({
  'Content-Type': 'application/json, text/plain, */*',
  'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBsaWNhdGlvbklkIjoiMSIsIkFwcGxpY2F0aW9uVG9rZW4iOiJmZTgwNGUzOC1iMTA0LTQyNDEtOWE1My1mYWY5NmE0ZjIyMzYiLCJBdXRvbWF0aW9uQWNjZXNzIjoiVHJ1ZSIsIm5hbWVpZCI6IjQ1YmRjOTYwLTU3ZjctNDU3Mi1iNTM4LTk5OTRkNTJlOTAzYiIsInVuaXF1ZV9uYW1lIjoiSkJyYXZvQGFzb2NpYXJ0LmNvbS5hciIsImVtYWlsIjoiSkJyYXZvQGFzb2NpYXJ0LmNvbS5hciIsIkZpcnN0TmFtZSI6Ikpvc8ODwqkgTHVpcyIsIkxhc3ROYW1lIjoiQnJhdm8iLCJUYXhJZCI6IiIsIk9mZmljaWFsSWRUeXBlIjoiIiwiZ2VuZGVyIjoiIiwiQ3VpdEN1aWwiOiIiLCJyb2xlIjpbIkFkbWluaXN0cmFkb3IiLCJVc3VhcmlvIl0sIm5iZiI6MTYwNzY5NDc0NiwiZXhwIjoxNjA3NzAxOTQ2LCJpYXQiOjE2MDc2OTQ3NDZ9.EbLBX3bdTfIa4d5NO7Yy3EuAgwIyiP4KLnBd86NY_aI`
})

@Injectable({
  providedIn: 'root'
})
export class RecoversService {

  constructor(private http: HttpClient) { }

  closeRecoverDifferenceValuesAsync(request: any) 
  {
    return this.http.post(environment.recoverUrl + recoversRoutes.home.closeRecover, {headers: headers}, request)
  }

  rejectClosingRecoverAsync(request: any) 
  {
    return this.http.post(environment.recoverUrl + recoversRoutes.home.rejectRecover, {headers: headers}, request)
  }

  readClosingReasonsDifferenceAsync(): Observable<any> {
    return this.http.get<any>(environment.recoverUrl + recoversRoutes.home.readRecover, {headers: headers});
  }
}
