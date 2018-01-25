import { item } from './../checklist/checklist';
import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import 'rxjs/add/operator/map';
declare var require:(filename:string)=>any;
import {asEnumerable} from 'linq-es2015'
import {UIChart} from "primeng/primeng";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
builds$: any;
IPPMA1Team:number=0;
ClinicalsIndicatorsHICareplanTeam:number=0;
CMECDayCareTeam:number=0;
CMUserservicesTeam:number=0;
CMReferralTeam:number=0;
CMIDMTeam:number=0;
ClinicalsObservationsTeam:number=0;
MaternityTeam:number=0;
CMInpatientTeam:number=0;
PlatformCoreUITeam:number=0;
ClinicalsCNSTeam:number=0;
ClinicalsRequestandResultsTeam:number=0;
Theatres1Team:number=0;
Messaging:number=0;
CMOutPatientMgmtTeam:number=0;
data:any;
options:any;




  constructor(private db:AngularFireDatabase) { 
     
   this.data = {
            labels: ['IPPMA-1-Team','CM-Userservices-Team','Clinicals-RequestandResults-Team',
            'Clinicals-Indicators-HI-Careplan-Team','CM-EC-Day Care- Team',
            'CM-Referral-Team','CM-IDM-Team','Clinicals-Observations-Team','Maternity-Team',
            'CM-Inpatient-Team','Platform-Core UI-Team','CM-OutPatientMgmt-Team','Clinicals-CNS-Team',
            'CM-EC-DayCare-team','Messaging','CM-IDM-Team'],
            datasets: [
                {
                    data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    backgroundColor: [
                        "#FFA07A",
                        "#98FB98",
                        "#48D1CC",
                        "#87CEFA",
                        "#EE82EE",
                        "#FF69B4",
                        "#CD853F",
                        "#CD5C5C",
                        "#FFD700",
                        "#00FA9A",
                        "#008B8B",
                        "#1E90FF",
                        "#9370DB",
                        "#C71585",
                        "#808080",
                        "#A52A2A"
                    ],
                    
                }]    
            };
      
    
      
   
   
  }

  onChange(selectedvalue){
    var linq=require('ng2-linq');
    var groupBy = require('json-groupby');
    var aj = require('array-json-transform')
    this.db.list('/TFTrackerDetail/').valueChanges().subscribe(x=>{
this.IPPMA1Team=0;
this.ClinicalsIndicatorsHICareplanTeam=0;
this.CMECDayCareTeam=0;
this.CMUserservicesTeam=0;
this.CMReferralTeam=0;
this.CMIDMTeam=0;
this.ClinicalsObservationsTeam=0;
this.MaternityTeam=0;
this.CMInpatientTeam=0;
this.PlatformCoreUITeam=0;
this.ClinicalsCNSTeam=0;
this.ClinicalsRequestandResultsTeam=0;
this.Theatres1Team=0;
this.Messaging=0;
this.CMOutPatientMgmtTeam=0;
    var tj=groupBy(x,['TFOnBuild'],['ScrumTeamName']);
        if(!(tj[selectedvalue] == undefined))
    {
    for(let i=0;i<tj[selectedvalue]['ScrumTeamName'].length;i++){
      switch (tj[selectedvalue]['ScrumTeamName'][i]) {
        case 'IPPMA-1-Team':
          this.IPPMA1Team++;
          continue;
       case 'CM-Userservices-Team':
          this.CMUserservicesTeam++;
          continue;
        case 'Clinicals-Request and Results-Team':
        this.ClinicalsRequestandResultsTeam++;
        continue;
        case 'Clinicals-Indicators-HI-Careplan-Team':
        this.ClinicalsIndicatorsHICareplanTeam++;
        continue;
        case 'CM-EC-Day Care- Team':
        this.CMECDayCareTeam++;
        continue;
        case 'CM-Referral-Team':
        this.CMReferralTeam++;
        continue;
        case 'CM-IDM-Team':
        this.CMIDMTeam++;
        continue;
        case 'Clinicals-Observations-Team':
        this.ClinicalsObservationsTeam++;
        continue;
        case 'Maternity-Team':
        this.MaternityTeam++;
        continue;
        case 'CM-Inpatient-Team':
        this.CMInpatientTeam++;
        continue;
        case 'Platform-Core UI-Team':
        this.PlatformCoreUITeam++;
        continue;
        case 'CM-OutPatientMgmt-Team':
        this.CMOutPatientMgmtTeam++;
        continue;
        case 'Clinicals-CNS-Team':
        this.ClinicalsCNSTeam++;
        continue;
        case 'Messaging':
        this.Messaging++;
        continue;
        case 'CM-EC-Day Care- Team':
        this.CMECDayCareTeam++;
        continue;
        case 'CM-IDM-Team':
        this.CMIDMTeam++;
        continue; 
      }
    }
    this.data = {
            labels: ['IPPMA-1-Team','CM-Userservices-Team','Clinicals-RequestandResults-Team',
            'Clinicals-Indicators-HI-Careplan-Team','CM-EC-Day Care- Team',
            'CM-Referral-Team','CM-IDM-Team','Clinicals-Observations-Team','Maternity-Team',
            'CM-Inpatient-Team','Platform-Core UI-Team','CM-OutPatientMgmt-Team','Clinicals-CNS-Team',
            'CM-EC-DayCare-team','Messaging','CM-IDM-Team'],
            datasets: [
                {
                    data: [this.IPPMA1Team, this.CMUserservicesTeam, this.ClinicalsRequestandResultsTeam,
                        this.ClinicalsIndicatorsHICareplanTeam,this.CMECDayCareTeam,
                        this.CMReferralTeam,
                        this.CMIDMTeam,
                        this.ClinicalsObservationsTeam,
                        this.MaternityTeam,
                        this.CMInpatientTeam,
                        this.PlatformCoreUITeam,
                        this.CMOutPatientMgmtTeam,
                        this.ClinicalsCNSTeam,
                        this.Messaging,
                        this.CMECDayCareTeam,
                        this.CMIDMTeam],
                    backgroundColor: [
                        "#FFA07A",
                        "#98FB98",
                        "#48D1CC",
                        "#87CEFA",
                        "#EE82EE",
                        "#FF69B4",
                        "#CD853F",
                        "#CD5C5C",
                        "#FFD700",
                        "#00FA9A",
                        "#008B8B",
                        "#1E90FF",
                        "#9370DB",
                        "#C71585",
                        "#808080",
                        "#A52A2A"
                    ],
                    hoverBackgroundColor: [
                        "#FFA07A",
                        "#98FB98",
                        "#48D1CC",
                        "#87CEFA",
                        "#EE82EE",
                        "#FF69B4",
                        "#CD853F",
                        "#CD5C5C",
                        "#FFD700",
                        "#00FA9A",
                        "#008B8B",
                        "#1E90FF",
                        "#9370DB",
                        "#C71585",
                        "#808080",
                        "#A52A2A"
                    ]
                }]    
            };
    
    
        }
        else
        {
            this.data = {
                labels: ['IPPMA-1-Team','CM-Userservices-Team','Clinicals-RequestandResults-Team',
                'Clinicals-Indicators-HI-Careplan-Team','CM-EC-Day Care- Team',
                'CM-Referral-Team','CM-IDM-Team','Clinicals-Observations-Team','Maternity-Team',
                'CM-Inpatient-Team','Platform-Core UI-Team','CM-OutPatientMgmt-Team','Clinicals-CNS-Team',
                'CM-EC-DayCare-team','Messaging','CM-IDM-Team'],
                datasets: [
                    {
                        data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                        backgroundColor: [
                            "#FFA07A",
                            "#98FB98",
                            "#48D1CC",
                            "#87CEFA",
                            "#EE82EE",
                            "#FF69B4",
                            "#CD853F",
                            "#CD5C5C",
                            "#FFD700",
                            "#00FA9A",
                            "#008B8B",
                            "#1E90FF",
                            "#9370DB",
                            "#C71585",
                            "#808080",
                            "#A52A2A"
                        ],
                        
                    }]    
                };
        }
    
    });
  }

  ngOnInit() {
    this.db.list('/Configuration/BuildRelease',ref=>ref.orderByValue()).valueChanges().subscribe(x=>this.builds$=x);
    this.options={
        legend:
        {
            position:'left'
        }
    }
  }

}
