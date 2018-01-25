import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class ChecklistService {
items:any[];
  constructor(db:AngularFireDatabase) {
     db.list('/Checklist').valueChanges().subscribe(x=>{this.items=x;});
   }

  getCheckListData(){
    return this.items;
  }

}
