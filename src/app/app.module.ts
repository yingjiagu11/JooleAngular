import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SearchMenuComponent } from './search-menu/search-menu.component';

  

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { PanelComponent } from './panel/panel.component';
import { AuthService } from './Services/auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SearchMenuComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    NgxMatSelectSearchModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
