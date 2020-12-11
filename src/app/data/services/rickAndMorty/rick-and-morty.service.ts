import { rickAndMorty } from './../../constants/rickyandmorty-routes';
import { Character } from '@data/interfaces/character';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  constructor(private http: HttpClient) { }

  getCharacter() {
    return this.http.get(environment.rickAndMorty + rickAndMorty.home.getCharacter);
  }

  getCharacterById(id: number){
    return this.http.get<Character>(environment.rickAndMorty + rickAndMorty.home.getCharacter + id);
  }
}
