import { Component, Input, OnInit } from '@angular/core';
import { Profile, SupabaseService } from './services/supabase.service';
import { Session } from '@supabase/supabase-js';

@Component({
  selector: 'members',
  template: `
    <div >
      Members
    </div>
  `,
})
export class MembersComponent implements OnInit {
  constructor(private readonly supabase: SupabaseService) {}

  ngOnInit() {
    this.getMembers();
  }

  async getMembers() {
    const data = await this.supabase.members;
    debugger
  }


}
