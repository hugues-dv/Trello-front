import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project, ProjectService } from '../../services/projects.service';
import { List, ListsService } from '../../services/lists.service';
import { FormsModule } from '@angular/forms';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FormsModule, ListComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  projects!: Project[];
  actualProject!: Project;
  lists!: List[];
  @Input()
  nomProjet!: string;

  constructor(
    public threadsService: ProjectService,
    public listsService: ListsService
  ) {}

  ngOnInit() {
    this.projects = [
      {
        id: 1,
        nom: 'Projet Alpha',
        description: 'Le premier projet concerne...',
        dateCreation: new Date(2024, 0, 1, 9, 30, 25),
      },
      {
        id: 2,
        nom: 'Projet Beta',
        description: 'Le second projet traite de...',
        dateCreation: new Date(2024, 1, 15, 14, 45, 10),
      },
    ];
    this.lists = [
      {
        id: 1,
        nom: 'Liste A',
        idProject: 1,
      },
      {
        id: 2,
        nom: 'Liste B',
        idProject: 1,
      },
      {
        id: 3,
        nom: 'Liste C',
        idProject: 1,
      },
      {
        id: 4,
        nom: 'Liste D',
        idProject: 1,
      },
    ];
  }
}
