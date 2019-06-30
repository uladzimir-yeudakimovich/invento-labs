import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  data: Array<object> = [
    { technology: "JavaScript", level: [1,2,3,4,5] },
    { technology: "HTML5",      level: [1,2,3,4,5] },
    { technology: "CSS3",       level: [1,2,3,4,5] },
    { technology: "Angular",    level: [1,2,3,4] },
    { technology: "AngularJS",  level: [1,2,3,4] },
    { technology: "Angular Material", level: [1,2,3,4,5] },
    { technology: "Bootstrap",  level: [1,2,3,4,5] },
    { technology: "Webpack",    level: [1,2,3,4] },
    { technology: "Git",        level: [1,2,3,4] }
  ]
}