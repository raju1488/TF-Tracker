import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
}
//constructor(afDb: AngularFireDatabase) {
  //afDb.list('/Items').snapshotChanges().map(actions => {
    //return actions.map(action => ({ key: action.key, ...action.payload.val() }));
  //}).subscribe(items => {
    //return items.map(item =>console.log(item));
  //});

