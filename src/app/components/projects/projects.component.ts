import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project, ProjectService } from '../../services/projects.service';
import { List, ListService } from '../../services/lists.service';
import { Card, CardService } from '../../services/cards.service';
import { FormsModule } from '@angular/forms';
import { ListComponent } from '../list/list.component';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FormsModule, ListComponent, CardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  projects!: Project[];
  actualProject!: Project;
  lists!: List[];
  @Input()
  listName!: string;
  projectLabel!: string;
  projectDescription!: string;

  constructor(
    public projectsService: ProjectService,
    public listsService: ListService
  ) {}

  ngOnInit() {
    this.projectsService.getProjects().subscribe((projects: Project[]) => {
      this.projects = projects;
      this.selectProject(this.projects[0]);
    });
  }

  selectProject(project: Project) {
    this.actualProject = project;
    this.listsService.getListByProjectId(project.id).subscribe((lists: any) => {
      this.lists = lists;
    });
  }

  addList() {
    console.log(this.actualProject);
    // let newListId = this.getLastListId() + 1;
    this.listsService
      .createList({
        // id: newListId,
        name: 'Add name',
        idProject: this.actualProject.id,
      })
      .subscribe((list: any) => {
        this.lists.push(list);
        this.listName = '';
      });
  }

  sendProject() {
    if (this.projectLabel.trim() !== '') {
      let lastProjectId = this.getLastProjectId();
      let newProjectId = lastProjectId ? lastProjectId + 1 : 1;
      this.projectsService
        .createProject({
          id: newProjectId,
          name: this.projectLabel,
          description: this.projectDescription,
          createdAt: new Date(),
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
          name: this.projects[0].name,
          description: this.projects[0].description,
          createdAt: this.projects[0].createdAt,
        };
      }
    });
  }

  // getLastListId(): number {
  //   if (this.lists.length > 0) {
  //     const lastList = this.lists[this.lists.length - 1];
  //     return Number(lastList.id);
  //   }
  //   return 0;
  // }

  getLastProjectId(): number | undefined {
    if (this.projects.length > 0) {
      const lastProject = this.projects[this.projects.length - 1]; // Récupère le dernier projet
      return Number(lastProject.id); // Renvoie l'ID du dernier projet
    }
    return undefined; // S'il n'y a pas de projet, renvoie undefined
  }
}
