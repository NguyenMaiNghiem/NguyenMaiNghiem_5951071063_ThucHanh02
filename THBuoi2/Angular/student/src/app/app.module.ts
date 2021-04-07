import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { FriendComponent } from './friend/friend.component';
import { from } from 'rxjs';

export class Friend{
  constructor(
    public Id: number,
    public f_name: string,
    public m_name : string,
    public l_name: string,
    public address: string,
    public birtDate: string,
    public score: string
  ){

  }
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FriendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
