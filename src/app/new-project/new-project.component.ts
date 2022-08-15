import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent  {
 public formFields= [
    {
      id: 'name',
      label: 'name',
      formControlName: 'name',
      type: 'text',
    },
    {
      id: 'status',
      label: 'status',
      formControlName: 'status',
      type: 'text',
    },
    {
      id: 'start',
      label: 'start',
      formControlName: 'start',
      type: 'date',
    },
    {
      id: 'end',
      label: 'end',
      formControlName: 'end',
      type: 'date',
    },
     {
      id: 'employees',
      label: 'employees',
      formControlName: 'employees',
      type: 'text',
    },
  ];
  constructor(public route: Router,
    private fb: FormBuilder) { }


public newProject = this.fb.group({
    name: [
      null,
      [Validators.required],
    ],
    status: [null, [Validators.required]],
    start: [null, [Validators.required]],
    end: [null, [Validators.required]],
    employees: [null, [Validators.required]],
  });

}
