import { Character } from '../../data/interfaces/rickAndMorty/rickandmorty';
import { RickAndMortyService } from './../../data/services/rickAndMorty/rick-and-morty.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rick-and-morty',
  templateUrl: './rick-and-morty.component.html',
  styleUrls: ['./rick-and-morty.component.scss']
})
export class RickAndMortyComponent implements OnInit {

  form: FormGroup;
  character$: Observable<Character>
  constructor(private rickAndMortyService: RickAndMortyService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: new FormControl(null, Validators.required)
    })
    this.rickAndMortyService.getCharacter();
  }

  getCharacterbyId(id: number){
    this.character$ = this.rickAndMortyService.getCharacterById(id);
  }

}
