import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth.component';
import { AccountComponent } from './account.component';
import { AvatarComponent } from './avatar.component';
import { MembersComponent } from './members';
import { CardComponent } from './card/card.component';
import { EmployeeComponent } from './employee/employee.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { NewItemComponent } from './new-item/new-item.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { ProjectsComponent } from './projects/projects.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterPipe } from './pipes/filter.pipe';
@NgModule({
  declarations: [
    FilterPipe,
    AppComponent, MembersComponent, AuthComponent, AccountComponent, AvatarComponent, EmployeeComponent,
    TechnologiesComponent,
    ProjectsComponent,
    NewItemComponent,
    CardComponent,
    NewEmployeeComponent,
    NewProjectComponent,MenuComponent,],
  imports: [BrowserModule, MatFormFieldModule,FormsModule,ReactiveFormsModule,MatInputModule, AppRoutingModule, BrowserAnimationsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
