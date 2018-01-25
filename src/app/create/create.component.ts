import { Component, OnInit,Host ,Pipe,PipeTransform} from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/map';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit  {
  form: any;
  builds$: any;
  Scrums$: any;
  private dateval;
  FormLblName: any;
  FormBtnName: any;
  qcid:any;
  items:any[];
  TFItem:any;
  YesNo:string[]=['YES','NO'];

  //Assigning Variables
  TFNo:any;
  SCRUM:any;
  QCIDNo:any;
  CSID:any;
  TASKIDS:any;
  SYNERGYPATH:any;
  BUILD:any;
  SPCHANGE:any;
  CONFIGCHANGE:any;
  COMMONIMPACT:any;
  ASPXDELIVERED:any;

  constructor(private datePipe:DatePipe,private db:AngularFireDatabase,private activatedRoute: ActivatedRoute,private router:Router) { 
    this.dateval=this.datePipe.transform(new Date(), 'yyyy/MM/dd');
    this.activatedRoute.queryParams.subscribe(params => {this.qcid = params['qcid']; });
    
    if(this.qcid)
    {
    this.FormLblName=" Update TF Request";
    this.FormBtnName="Update";
   
   this.TFItem =this.db.object('/TFTrackerDetail/'+this.qcid).valueChanges().subscribe(x=>
    {this.TFNo=x['TFNo'];this.SCRUM=x['ScrumTeamName'];this.QCIDNo=x['QCID'];
    this.CSID=x['CSID'];this.TASKIDS=x['TaskIds'];this.SYNERGYPATH=x['CMSynergyFilePath'];this.BUILD=x['TFOnBuild'];
    this.SPCHANGE=x['SPChange']==0?'YES':'NO';this.CONFIGCHANGE=x['ConfigChange']==0?'YES':'NO';this.COMMONIMPACT=x['CommonFilesImpact']==0?'YES':'NO';
    this.ASPXDELIVERED=x['ASPXDelivered']==0?'YES':'NO'});
     
    }
    else
    {
    this.FormLblName=" Create TF Request";
    this.FormBtnName="Create";
    }
  }
ngOnInit() { 
  this.db.list('/Configuration/BuildRelease').valueChanges().subscribe(x=>this.builds$=x); 
  this.db.list('/Configuration/ScrumTeams').valueChanges().subscribe(x=>this.Scrums$=x);

}

onSubmit(form: any)  {
  this.form = form;
}

SaveCreateForm(cForm: NgForm){
  var datePipe=new DatePipe('en-US');
  this.db.list('/TFTrackerDetail').set(cForm.value.qcid,{
   ASPXDelivered: cForm.value.ASPXDeli,
   CMSynergyFilePath: cForm.value.synergypath,
   CSID: cForm.value.csid,
   CommonFilesImpact: cForm.value.FileImpact,
   ConfigChange: cForm.value.Configchanges,
   CreatedAt: new Date(),
   CreatedBy: "user1",
   DeliveryDate: datePipe.transform(cForm.value.deldate,'dd-MM-yyyy'),
   IssueType: "SampleIssue Type",
   JIRAID: "cForm.value.JIRAID",
   QCID: cForm.value.qcid,
    SPChange: cForm.value.spchanges,
    ScrumTeamName: cForm.value.Scrum,
    TFNo: cForm.value.TFNo,
    TFOnBuild: cForm.value.build,
    TaskIds: cForm.value.taskids,
    Title: "cForm.value.Title",
    Trust: "HULL AND EAST YORKSHIRE HOSPITALS NHS TRUST"
  });
  this.router.navigate(['/tftracker']), { queryParams: { qcid: cForm.value.qcid}};
}
}
