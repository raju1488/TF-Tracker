import { CommonService } from './../common/common.service';
import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import 'rxjs/add/operator/map';
declare var require:(filename:string)=>any;
import {asEnumerable} from 'linq-es2015'
import {Router} from '@angular/router'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  items:any[];
  builds$: Observable<{}[]>;
  selectedbuild: any;
  temp:any[];

 

  constructor(private db:AngularFireDatabase,private router:Router,private commonservice:CommonService) { 
    
  }
  
  onChange(newValue) {
    this.db.list('/TFTrackerDetail',ref=>ref.orderByChild('TFOnBuild').equalTo(newValue)).valueChanges().subscribe(x=>this.items=x);
    
  }
  goToDetail(QCID){


    // this.router.navigate(['/details'], { queryParams: { qcid: QCID['QCID']} });
  }

  deleteTF(rowData){
    this.db.list('/TFTrackerDetail/'+rowData['QCID']).remove();
        
  }
  editTF(QCID){
    this.router.navigate(['/create'], { queryParams: { qcid: QCID['QCID']} });
  }
  ngOnInit() {
    this.builds$=this.commonservice.getBuildversions();
    this.db.list('/TFTrackerDetail').valueChanges().subscribe(x=>{this.items=x;});
  }

}
