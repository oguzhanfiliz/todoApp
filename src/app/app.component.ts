import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoApp';
  user = 'Oğuz';
  items = [
    {description: "Kahvaltı", action:"No"},
    {description: "Sinema", action:"No"},
    {description: "Spor", action:"Yes"},
    {description: "Ders Çalışma", action:"No"},
  ]
}
