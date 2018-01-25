import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
 

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

tfdetails: any[];
items:Observable<any[]> ;
 TFnumber : string = '4';
 tfdetailss:any;
 TeamName : string = '';
 private sub:number;

  constructor(public db:AngularFireDatabase,private route: ActivatedRoute, private router: Router) {
    //this.TFnumber = '3';
   // this.items=this.db.list('/TFTrackerDetail', ref => ref.orderByChild('TFNo').equalTo(this.TFnumber)).valueChanges();
   //this.tfdetailss=this.db.list('/TFTrackerDetail/', ref => ref.orderByChild('TFNo').equalTo(this.TFnumber)).valueChanges();
   //this.db.list('/TFTrackerDetail/', ref => ref.orderByChild('TFNo').equalTo(this.TFnumber)).valueChanges().subscribe(x=>{this.tfdetailss =x[0];console.log(this.tfdetailss);});
   

  //this.db.list('/TFTrackerDetail', ref => ref.orderByChild('TFNo').equalTo(this.TFnumber)).valueChanges().first().subscribe(x=> x);
 
      
   }

   trackById(index, tf) {

    this.TeamName = tf.ScrumTeamName;
  
  }

  editTF(QCID){
    this.router.navigate(['/create'], { queryParams: { qcid: QCID} });
  }

  deleteTF(QCID){
    this.db.list('/TFTrackerDetail/'+QCID).remove();
    this.router.navigate(['/tftracker']);
        
  }

  ngOnInit() {
    this.route
    .queryParams
    .subscribe(params => {
      // Defaults to 0 if no query param provided.
      this.sub = +params['qcid'] || 0;

      
    });
    this.db.object('/TFTrackerDetail/'+this.sub).valueChanges().subscribe(x=>{this.tfdetailss=x;});
   
    
  }


}
