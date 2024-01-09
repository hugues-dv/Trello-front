import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { List, ListService } from '../../services/lists.service';
import { Card, CardService } from '../../services/cards.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, CardComponent, ListComponent, FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
  cards!: Card[];

  constructor(
    public listService: ListService,
    public cardService: CardService
  ) {}
  @Input()
  list!: List;

  ngOnInit() {
    this.cardService.getCardByListId(this.list.id).subscribe((cards: any) => {
      this.cards = cards;
    });
  }

  getListById() {
    this.listService.getListById(this.list.id).subscribe((list: List) => {
      this.list = list;
    });
  }

  updateList() {
    this.listService.updateList(this.list).subscribe(() => {});
  }

  addCard() {
    this.cardService
      .createCard({
        title: 'titre',
        description: 'description',
        createdAt: new Date(),
        idList: this.list.id,
      })
      .subscribe((card: any) => {
        this.cards.push(card);
      });
  } //"id, description, createdAt, idList"

  removeList() {}
}
