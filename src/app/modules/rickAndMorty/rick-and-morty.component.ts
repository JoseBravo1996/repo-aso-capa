import { RickAndMortyService } from '@data/services/rickAndMorty/rick-and-morty.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Character } from '@data/interfaces/character';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rick-and-morty',
  templateUrl: './rick-and-morty.component.html',
  styleUrls: ['./rick-and-morty.component.scss']
})
export class RickAndMortyComponent implements OnInit {

  form: FormGroup;
  character$: Observable<Character>;
  objectCharacter: Character;

  constructor(private rickAndMortyService: RickAndMortyService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    this.rickAndMortyService.getCharacter().subscribe(data => {
      console.log(data);
    })
  }

  createForm() {
    this.form = this.formBuilder.group({
      id: new FormControl(null, Validators.required)
    })
  }

  getCharacter(event) {
    this.character$ = this.rickAndMortyService.getCharacterById(event)
    this.form.reset();
    // si queremos trabajar el objecto a nivel controller
    // this.rickAndMortyService.getCharacterById(event).subscribe(resp =>{
    //    this.objectCharacter = resp;
    // });
  }

}
