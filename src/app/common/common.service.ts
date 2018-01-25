import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class CommonService {

  
  constructor(private db:AngularFireDatabase) { }

  getBuildversions(){
    return this.db.list('/Configuration/BuildRelease',ref=>ref.orderByValue()).valueChanges();
  }

}
