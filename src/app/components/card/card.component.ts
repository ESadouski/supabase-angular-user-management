import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IEmployee } from 'src/app/models/employees.model';
import { IProject } from 'src/app/models/projects.model';
import { ITechnology } from 'src/app/models/technologies';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent  {

  @Input() employee: IEmployee
  @Input() technology:ITechnology
  @Input()project:IProject
   public index = window.location.href.lastIndexOf('/')
   public path = window.location.href.slice(this.index + 1)

public fields=['name',
 'employee_projects',
 'employee_technology',
  'manager',
  'experience',
 'status',
 'start date',
 'finish date',
  'employee']
}
