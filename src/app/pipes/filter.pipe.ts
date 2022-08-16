import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(fields:string[], path:string): string[] {
const technologies=['name', 'employee_technology',]
const employee=['name',
 'employee_technology',
'employee_projects',
  'manager',
  'experience']
  const projects=[ 'name','status',
 'start_date',
 'end_date',
  'employee_projects'
]
    if(path === 'technologies')return technologies
    if(path === 'projects')return projects
    if(path === 'employee')return employee
    return fields
  }
}
