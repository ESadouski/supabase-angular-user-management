import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IEmployee } from "../models/employees.model";
import { IProject } from "../models/projects.model";
import { ITechnology } from "../models/technologies";
import { SupabaseService } from "./supabase.service";

@Injectable({
  providedIn: 'root',
})
export class AppStateService {
  public employeesList$ = new BehaviorSubject<IEmployee[]>([]);
 public technologiesList$ = new BehaviorSubject<ITechnology[]>([]);
  public projectsList$ = new BehaviorSubject<IProject[]>([]);
constructor(private readonly supabase: SupabaseService){}
async getAllEmployees(){
 const res= await this.supabase.getAllEmployees()
 this.employeesList$.next(res.data as IEmployee[])
}
async getAllTechnologies(){
  const res= await this.supabase.getAllTechnologies()
 this.technologiesList$.next(res.data as ITechnology[])
}

async getAllProjects(){
  const res= await this.supabase.getAllProjects()
 this.projectsList$.next(res.data as IProject[])
}
}
