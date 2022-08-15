import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTH_PATHS } from '../shared/constants/constants';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent  {
  constructor(private router: Router) { }
  employee = true
  technology = false
  project = false
   public openEmployee(): void {
    this.router.navigate([ROUTH_PATHS.EMPLOYEE]);
 this.employee = true
  this.technology = false
  this.project = false
  }
   public openTechnologies(): void {
    this.router.navigate([ROUTH_PATHS.TECHNOLOGY]);
    this.employee = false
    this.technology = true
    this.project = false
  }
   public openProjects(): void {
    this.router.navigate([ROUTH_PATHS.PROJECTS]);
    this.employee = false
    this.technology = false
    this.project = true
  }

}
