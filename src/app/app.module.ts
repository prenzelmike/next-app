import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child.component';
import { DetailComponentComponent } from './detail-component/detail-component.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SimpleTypeSearchComponent } from './simple-type-search/simple-type-search.component';
import { AsyncobservablepipeComponent } from './asyncobservablepipe/asyncobservablepipe.component';


@NgModule({
  declarations: [
    AppComponent
    , ChildComponent
    , DetailComponentComponent, MessagesComponent, DashboardComponent, SimpleTypeSearchComponent, AsyncobservablepipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
