import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent {

  character:any = null;
  id:any = null;

  constructor(private route: ActivatedRoute, private characterService:CharacterService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');
    this.characterService.getById(this.id)
      .subscribe( result =>  this.character = result)

  }

}
