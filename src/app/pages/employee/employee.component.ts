import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IEmployee } from 'src/app/models/employees.model';
import { AppStateService } from 'src/app/services/app-state.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent  implements OnInit, OnDestroy{
  constructor(private readonly stateService:AppStateService ) { }
    public employees:IEmployee[] | [] =[]
    private subscriptions = new Subscription();

  ngOnInit(): void {
    this.stateService.getAllEmployees()
    const data = this.stateService.employeesList$.subscribe(data=>this.employees=data)
    this.subscriptions.add(data)}

async getEmployees(){
  return await this.stateService.getAllEmployees()
}
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
