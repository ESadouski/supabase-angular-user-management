import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ROUTH_PATHS } from './shared/constants/constants';
import { PageErrorComponent } from './page-error/page-error.component';
import { MainModule } from './main/main.module';
import { MainComponent } from './main/main.component';
import { EmployeeComponent } from './employee/employee.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {
    path: ROUTH_PATHS.MAIN,
component: MainComponent
    // canActivate: [AuthGuard],
  },

  { path: '', redirectTo: ROUTH_PATHS.MAIN, pathMatch: 'full' },

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
  },

  { path: '**', component: PageErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
