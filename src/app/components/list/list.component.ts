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
  projectId!: number;
  listName!: string;

  constructor(
    public listService: ListService,
    public cardService: CardService
  ) {}

  ngOnInit() {
    if (this.projectId) {
      this.listService
        .getListByProjectId(this.projectId)
        .subscribe((lists: List[]) => {
          this.lists = lists;
        });
    }
  }
  updateList(listName: string) {
    // if (this.listName.trim() !== '') {
    alert(this.listName);
    // }
  }
  addCard() {}
  removeList() {}
}
