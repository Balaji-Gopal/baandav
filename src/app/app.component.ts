import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'baandav';
  public menuContent: boolean = false;
  public show:boolean = true;
  public hide:boolean = false;
  public year:any = new Date().getFullYear();

  openMenu() {
    this.menuContent = !this.menuContent;
  }
}
