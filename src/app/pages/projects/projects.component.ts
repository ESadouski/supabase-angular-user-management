import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProject} from 'src/app/models/projects.model';
import { AppStateService } from 'src/app/services/app-state.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit,OnDestroy {

   constructor(private readonly stateService:AppStateService ) { }
    public projects:IProject[] | [] =[]
    private subscriptions = new Subscription();

  ngOnInit(): void {
    this.stateService.getAllProjects()
    const data = this.stateService.projectsList$.subscribe(data=>this.projects=data)
    this.subscriptions.add(data)
  }

async getProjects(){
  return await this.stateService.getAllProjects()
}
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
