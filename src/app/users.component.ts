import { Component,Input} from '@angular/core';

@Component({
  selector: 'myapp',
  templateUrl: './users.component.html',
})
export class userComponent {
   @Input() title;
  
}
