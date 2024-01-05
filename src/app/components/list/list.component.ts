import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { List, ListService } from '../../services/lists.service';
import { Card, CardService } from '../../services/cards.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, CardComponent, ListComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
  lists!: List[];
  actualList!: List;
  Cards!: Card[];
  listsDatas!: Object;
  @Input()
  listName!: string;

  constructor(
    public listService: ListService,
    public cardService: CardService
  ) {}

  // ngOnInit() {
  //   this.listsService
  //     .getListById(Number(this.actualList.id))
  //     .subscribe((actualList: List) => {
  //       this.actualList = actualList;
  //     });
  // }
  ngOnInit() {}
}
