import { Component } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  contacts = [
    {icon: 'lt-icon-phone', link: 'tel:+375333344201', name: '+375333344201'},
    {icon: 'lt-icon-envelope', link: 'mailto:uladzimir.yeudakimovich@gmail.com', name: 'uladzimir.yeudakimovich@gmail.com'},
    {icon: 'lt-icon-cloud', link: 'assets/CV_Евдокимович Владимир.pdf', name: 'footer.cvRussian', option: 'download'},
    {icon: 'lt-icon-cloud', link: 'assets/CV_Uladzimir Yeudakimovich.pdf', name: 'footer.cvEnglish', option: 'download'},
  ];
  socialNetworks = [
    {icon: 'lt-icon-linkedin', link: 'https://www.linkedin.com/in/uladzimir-yeudakimovich', name: 'Linkedin'},
    {icon: 'lt-icon-github', link: 'https://github.com/uladzimir-yeudakimovich', name: 'Github'},
    {icon: 'lt-icon-codewars', link: 'https://www.codewars.com/users/uladzimir.yeudakimovich', name: 'CodeWars'},
    {icon: 'lt-icon-students-cap', link: 'https://www.duolingo.com/91YN1', name: 'Duolingo'},
  ];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    const req = new HttpRequest('PUT', 'https://portfolio-57f5d.firebaseapp.com/contacts.json', this.contacts, {reportProgress: true});
    return this.httpClient.request(req);
  }
}
