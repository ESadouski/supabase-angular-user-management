import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITechnology } from 'src/app/models/technologies';
import { AppStateService } from 'src/app/services/app-state.service';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent {

  constructor(private readonly stateService:AppStateService ) { }
    public technologies:ITechnology[] | [] =[]
    private subscriptions = new Subscription();

  ngOnInit(): void {
    this.stateService.getAllTechnologies()
    const data = this.stateService.technologiesList$.subscribe(data=>this.technologies=data)
    this.subscriptions.add(data)}

async getTechnologies(){
  return await this.stateService.getAllTechnologies()
}
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
