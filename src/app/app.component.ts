import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Rejser', url: '/pages/rejser', icon: 'warning' },
    { title: 'Tegneserier', url: '/pages/tegneserier', icon: 'trash' },
    { title: 'Images', url: '/pages/images', icon: 'image' },
    
  ];
  public labels = ['Rejser', 'Tegneserier', 'Images',];
  constructor() {}
}
