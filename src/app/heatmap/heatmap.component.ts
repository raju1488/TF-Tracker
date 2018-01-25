import { Component, OnInit, Attribute,Pipe,PipeTransform } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-heatmap',
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.css']
})
export class HeatmapComponent implements OnInit {
  private todayDate;
  private dateval;
  items:any[];
  
  constructor(private datePipe:DatePipe,private db:AngularFireDatabase) { 
    this.todayDate=new Date();
    this.dateval=this.datePipe.transform(this.todayDate,'dd-MM-yyyy');
    this.db.list('/TFTrackerDetail',ref=>ref.orderByChild('DeliveryDate').equalTo(this.dateval)).valueChanges().subscribe(x=>{this.items=x});
  }

  ngOnInit() {
  }

}
