import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { List, ListsService } from '../../services/lists.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, CardComponent, ListComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  list: List = {
    id: 2,
    nom: 'You',
    idProject: 1,
  };

  constructor(private listsService: ListsService) {}

  // Méthode pour effectuer une action lorsque le composant est initialisé
  ngOnInit() {
    // Exemple d'utilisation du service ListsService pour obtenir des données
    this.listsService.getListeById(this.list.id).subscribe((data: List) => {
      // Mettre à jour la propriété list avec les données récupérées
      this.list = data;
    });
  }
}
