import { Component,OnInit} from '@angular/core'
import {ChecklistService} from './checklist.service'



@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {

items:any[];

constructor(private checklistservice:ChecklistService){}
ngOnInit(){
  this.items=this.checklistservice.getCheckListData();
}
//ngOnInit(){
  //this.loading=true;
 // setTimeout(() => {
   // db.list('/Checklist').valueChanges().subscribe(x=>{this.items=x;);
  //}, timeout);
//}
}
