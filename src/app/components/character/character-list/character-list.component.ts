import { Component } from '@angular/core';
import { Character } from 'src/app/models/character';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent {

  data: Character[] = [];

  constructor(private characters: CharacterService){}

  ngOnInit(){
    this.characters.getFilter()
      .subscribe( 
        (result:Character[]) =>  this.data = result
        )
  }

}
