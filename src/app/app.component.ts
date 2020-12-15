import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'random-numbers';
  generated = null;
  values = {
    min: null,
    max: null
  }
  
  generate(){
    if(this.values.max !== null && this.values.min !== null)
      this.generated = this.getRandomIntInclusive(this.values.min, this.values.max);
  }

  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
