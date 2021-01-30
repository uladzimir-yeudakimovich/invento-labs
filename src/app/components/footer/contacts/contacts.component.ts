import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  contacts = [
    {icon: 'lt-icon-phone', link: 'tel:+48884603351', name: '+48 884 603 351'},
    {icon: 'lt-icon-skype', link: 'skype:live:be52441aa4a87669?chat', name: 'live:be52441aa4a87669'},
    {icon: 'lt-icon-envelope', link: 'mailto:uladzimir.yeudakimovich@gmail.com', name: 'uladzimir.yeudakimovich@gmail.com'},
    {icon: 'lt-icon-linkedin', link: 'https://www.linkedin.com/in/uladzimir-yeudakimovich', name: 'Linkedin'},
    {icon: 'lt-icon-github', link: 'https://github.com/uladzimir-yeudakimovich', name: 'Github'},
    // {icon: 'lt-icon-cloud', link: 'assets/CV_Uladzimir Yeudakimovich.pdf', name: 'footer.cv', option: 'download'},
    // {icon: 'lt-icon-codewars', link: 'https://www.codewars.com/users/uladzimir.yeudakimovich', name: 'CodeWars'},
    // {icon: 'lt-icon-students-cap', link: 'https://www.duolingo.com/91YN1', name: 'Duolingo'},
  ];

  constructor() { }

  ngOnInit() { }
}
