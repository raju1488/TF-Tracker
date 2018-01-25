import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ListService {

  items:Observable<any[]>;
  constructor(private db:AngularFireDatabase) { }

  getList(){
    this.items= this.db.list('/TFTrackerDetail',ref=>ref.limitToFirst(5)).valueChanges();
  }

}
