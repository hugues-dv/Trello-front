import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { List, ListService } from '../../services/lists.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, CardComponent, ListComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
  constructor(private listsService: ListService) {}

  ngOnInit() {}

  addCard() {}

  removeList() {}
}
