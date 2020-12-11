import { rickAndMortyRoutes } from '../../constants/rickandMortyRoutes';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from '@data/interfaces/rickandmorty';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  constructor(private http: HttpClient) { }
 
  getCharacter(){
    this.http.get(environment.rickAndMorty + rickAndMortyRoutes.home.character);
  }

  getCharacterById(id: number){
    return this.http.get<Character>(environment.rickAndMorty + rickAndMortyRoutes.home.character + id);
  }
}
