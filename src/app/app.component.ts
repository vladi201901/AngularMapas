import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FinalMapas';

  opened = false;

  toogle() {
    this.opened = !this.opened;
  }
}
