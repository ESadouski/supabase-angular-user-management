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
   public openEmployee(): void {
    this.router.navigate([ROUTH_PATHS.EMPLOYEE]);
  }
   public openTechnologies(): void {
    this.router.navigate([ROUTH_PATHS.TECHNOLOGY]);
  }
   public openProjects(): void {
    this.router.navigate([ROUTH_PATHS.PROJECTS]);
  }
}
