import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTH_PATHS } from '../../shared/constants/constants';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent  {
  constructor(private router: Router) { }
  public index = window.location.href.lastIndexOf('/')
   public path = window.location.href.slice(this.index + 1)

   public openEmployee(): void {
    this.router.navigate([ROUTH_PATHS.EMPLOYEE]);
  this.path = 'employee'
  }
   public openTechnologies(): void {
    this.router.navigate([ROUTH_PATHS.TECHNOLOGY]);
   this.path = 'technologies'
  }
   public openProjects(): void {
    this.router.navigate([ROUTH_PATHS.PROJECTS]);
   this.path ='projects'
  }

}
