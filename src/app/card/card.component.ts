import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent  {
  constructor() {}
   public index = window.location.href.lastIndexOf('/')
   public path = window.location.href.slice(this.index + 1)
public fields=['name:',
 'technologies:',
  'manager:',
  'experience:',
 'status:',
 'start date:',
 ' finish date:',
  'employee:']

}
