import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ROUTH_PATHS } from './shared/constants/constants';

import { EmployeeComponent } from './pages/employee/employee.component';
import { TechnologiesComponent } from './pages/technologies/technologies.component';
import { ProjectsComponent } from './pages/projects/projects.component';

const routes: Routes = [

  { path: '', redirectTo: ROUTH_PATHS.EMPLOYEE, pathMatch: 'full' },

  {
    path: ROUTH_PATHS.EMPLOYEE,
    component: EmployeeComponent
    // canActivate: [AuthGuard],
  },
    { path: ROUTH_PATHS.TECHNOLOGY,
    component: TechnologiesComponent
    // canActivate: [AuthGuard],
  },
     { path: ROUTH_PATHS.PROJECTS,
    component: ProjectsComponent
    // canActivate: [AuthGuard],
  }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
