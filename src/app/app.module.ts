import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth.component';
import { AccountComponent } from './account.component';
import { AvatarComponent } from './avatar.component';
import { MembersComponent } from './members';

@NgModule({
  declarations: [AppComponent, MembersComponent, AuthComponent, AccountComponent, AvatarComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
