import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(fields:string[], path:string): string[] {
const technologies=['name:']
const employee=['name:',
 'technologies:',
  'manager:',
  'experience:']
  const projects=[ 'name:','status:',
 'start date:',
 ' finish date:',
  'employees:']
    if(path === 'technologies')return technologies
    if(path === 'projects')return projects
    if(path === 'employee')return employee
    return fields
  }
}
