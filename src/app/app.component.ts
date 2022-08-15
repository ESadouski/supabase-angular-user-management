import { Component, OnInit } from '@angular/core';
import { SupabaseService } from './supabase.service';

@Component({
  selector: 'app-root',
  template: `
   <app-menu></app-menu>
<router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  session = this.supabase.session;

  constructor(private readonly supabase: SupabaseService) {}

  ngOnInit() {
    this.supabase.authChanges((_, session) => (this.session = session));
  }
}
