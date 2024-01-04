import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project, ProjectService } from '../../services/projects.service';
import { List, ListService } from '../../services/lists.service';
import { FormsModule } from '@angular/forms';
import { ListComponent } from '../list/list.component';
import { CardService } from '../../services/cards.service';

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
  listNom!: string;
  projectLabel!: string;
  projectDescription!: string;

  constructor(
    public projectsService: ProjectService,
    public listsService: ListService,
    public cardsService: CardService
  ) {}

  selectProject(project: Project) {
    this.actualProject = project;
    this.listsService.getListByProjectId(project.id).subscribe((lists: any) => {
      this.lists = lists;
    });
  }

  ngOnInit() {
    this.projectsService.getProjects().subscribe((projects: Project[]) => {
      this.projects = projects;
      this.selectProject(this.projects[0]);
    });
  }
  // sendList(){
  //   if(this.listNom.trim() !== ""){
  //     this.listsService.createList({

  //     })
  //   }
  // }
  sendProject() {
    if (this.projectLabel.trim() !== '') {
      let lastProjectId = this.getLastProjectId();
      let newProjectId = lastProjectId ? lastProjectId + 1 : 1;
      this.projectsService
        .createProject({
          id: newProjectId,
          nom: this.projectLabel,
          description: this.projectDescription,
          dateCreation: new Date(),
        })
        .subscribe((project: any) => {
          this.projects.push(project);
          this.projectLabel = '';
          this.projectDescription = '';
        });
    }
  }

  deleteProject(projectId: number) {
    this.projectsService.deleteProject(projectId).subscribe(() => {
      this.projects = this.projects.filter(
        (project) => project.id != Number(projectId)
      );
      if (this.actualProject && this.actualProject.id == Number(projectId)) {
        this.actualProject = {
          id: this.projects[0].id,
          nom: this.projects[0].nom,
          description: this.projects[0].description,
          dateCreation: this.projects[0].dateCreation,
        };
      }
    });
  }
  getLastProjectId(): number | undefined {
    if (this.projects.length > 0) {
      const lastProject = this.projects[this.projects.length - 1]; // Récupère le dernier projet
      return Number(lastProject.id); // Renvoie l'ID du dernier projet
    }
    return undefined; // S'il n'y a pas de projet, renvoie undefined
  }
}
