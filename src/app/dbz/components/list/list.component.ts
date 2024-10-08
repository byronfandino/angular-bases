import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {

  // @Output()
  // public onDeleteId: EventEmitter<number> = new EventEmitter();

  @Input()
  public characterList: Character[] = [
    {
      name:'Trunks',
      power: 10
    }
  ];

  onDeleteCharacter(index : number):void {
    //TODO: Emitir el id del personaje
    console.log(index);
  }
}
