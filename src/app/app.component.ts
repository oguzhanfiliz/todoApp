import { Component } from '@angular/core';
import { Model } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model = new Model();

  getName(){
    return this.model.user;
  }
  getitems(){
    return this.model.items.filter(item=>!item.action);
  }
}
