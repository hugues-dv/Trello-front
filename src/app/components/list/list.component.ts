import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { List, ListService } from '../../services/lists.service';
import { Card, CardService } from '../../services/cards.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, CardComponent, FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
  cards!: Card[];
  listId!: number;

  constructor(
    public listService: ListService,
    public cardService: CardService
  ) {}
  @Input()
  list!: List;
  @Output() rmList = new EventEmitter<any>();

  ngOnInit() {
    if (this.list.id) {
      this.listId = this.list.id;
    }
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
  }

  removeList() {
    // Envoie la list à supprimer au composant parent en déclenchant un event car impossible de mettre à jour
    // l'affichage des listes depuis ce composant. Je peux le supprimer en bdd mais pas mettre à jour l'affichage
    // sans recharger la page.
    this.rmList.emit(this.list);
  }
}
