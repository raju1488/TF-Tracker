import { Injectable } from '@angular/core';

@Injectable()
export class FirebaseService {

  constructor() { }

  GetBuildRelease(){
   // this.db.list('/Configuration/BuildRelease').valueChanges().subscribe(x=>this.builds$=x);
  }
}
