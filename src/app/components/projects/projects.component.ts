import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project, ProjectService } from '../../services/projects.service';
import { List, ListService } from '../../services/lists.service';
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
  projectsDatas!: Object;
  projectLabel!: string;
  projectDescription!: string;

  constructor(
    public projectsService: ProjectService,
    public listsService: ListService
  ) {}

  ngOnInit() {
    this.projectsService.getProjects().subscribe((projects: Project[]) => {
      this.projects = projects;
      if (this.projects[0]) {
        this.selectProject(this.projects[0]);
      }
    });
  }

  selectProject(project: Project) {
    this.actualProject = project;
    this.listsService.getListByProjectId(project.id).subscribe((lists: any) => {
      this.lists = lists;
    });
  }

  addList() {
    this.listsService
      .createList({
        name: 'Add name',
        idProject: this.actualProject.id,
      })
      .subscribe((list: any) => {
        this.lists.push(list);
      });
  }

  sendProject() {
    if (
      this.projectLabel.trim() !== '' &&
      this.projectDescription.trim() !== ''
    ) {
      // let lastProjectId = this.getLastProjectId();
      // let newProjectId = lastProjectId ? lastProjectId + 1 : 1;
      this.projectsService
        .createProject({
          name: this.projectLabel,
          description: this.projectDescription,
          createdAt: new Date(),
        })
        .subscribe((project: any) => {
          this.projects.push(project);
          this.projectLabel = '';
          this.projectDescription = '';
          this.selectProject(project);
        });
    }
  }

  deleteProject(projectId?: number) {
    this.projectsService.deleteProject(projectId).subscribe(() => {
      this.projects = this.projects.filter(
        (project) => project.id != Number(projectId)
      );
      if (this.actualProject && this.actualProject.id == Number(projectId)) {
        // this.actualProject = {
        //   id: this.projects[0].id,
        //   name: this.projects[0].name,
        //   description: this.projects[0].description,
        //   createdAt: this.projects[0].createdAt,
        // };
      }
    });
  }

<<<<<<< HEAD
  getLastProjectId(): number | undefined {
    if (this.projects.length > 0) {
      const lastProject = this.projects[this.projects.length - 1]; // Récupère le dernier projet
      return Number(lastProject.id); // Renvoie l'ID du dernier projet
    }
    return undefined; // S'il n'y a pas de projet, renvoie undefined
  }

  deleteList(list: List) {
    this.listsService.deleteList(list.id).subscribe(() => {
      this.lists = this.lists.filter((list) => list.id !== list.id);
    });
  }
=======
  // getLastProjectId(): number | undefined {
  //   if (this.projects.length > 0) {
  //     const lastProject = this.projects[this.projects.length - 1]; // Récupère le dernier projet
  //     return Number(lastProject.id); // Renvoie l'ID du dernier projet
  //   }
  //   return undefined; // S'il n'y a pas de projet, renvoie undefined
  // }
>>>>>>> 018dbccf9e99652f4afd62dabc67bd85c5cb8180
}
