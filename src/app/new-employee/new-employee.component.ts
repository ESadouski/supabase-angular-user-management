import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.scss']
})
export class NewEmployeeComponent implements OnInit {
 public formFields= [
    {
      id: 'name',
      label: 'name',
      formControlName: 'name',
      type: 'text',
    },
    {
      id: 'technology',
      label: 'technology',
      formControlName: 'technology',
      type: 'text',
    },
    {
      id: 'experience',
      label: 'experience',
      formControlName: 'experience',
      type: 'text',
    },
    {
      id: 'manager',
      label: 'manager',
      formControlName: 'manager',
      type: 'text',
    },
  ];
  constructor( public route: Router,
    private fb: FormBuilder,) { }

  ngOnInit(): void {
  }
  public editForm = this.fb.group({
    name: [
      null,
      [Validators.required],
    ],
    technology: [null, [Validators.required]],
   manager: [null, [Validators.required]],
    experience: [null, [Validators.required]],
  });


}
