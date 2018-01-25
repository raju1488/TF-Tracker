import { CommonService } from './common/common.service';

import { DatePipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { HeatmapComponent } from './heatmap/heatmap.component';
import { ListComponent } from './list/list.component';
import { environment } from '../environments/environment';
import {FormsModule} from '@angular/forms'
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FirebaseService } from './services/firebase.service';
import { ChecklistService } from './checklist/checklist.service';

import {DataTableModule,SharedModule,SplitButtonModule} from 'primeng/primeng';
import {DropdownModule,ChartModule,ButtonModule} from 'primeng/primeng';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CreateComponent,
    DetailComponent,
    HeatmapComponent,
    ListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      {path:'',redirectTo:'/dashboard',pathMatch:'full'},
      {path:'dashboard',component:HomeComponent},
      {path:'tftracker',component:ListComponent},
      {path:'tfheatmap',component:HeatmapComponent},
      {path:'create',component:CreateComponent},
      {path:'details',component:DetailComponent},
      { path: '**', component: PageNotFoundComponent   }    
    ]),
    DataTableModule,
    SplitButtonModule,
    DropdownModule,
    BrowserAnimationsModule,
    FormsModule,
    ChartModule,
    ButtonModule
  ],
  providers: [ChecklistService,DatePipe,FirebaseService,CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
