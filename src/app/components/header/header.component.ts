import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { LanguageService } from '../../services/language.servise';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public education: Array<object> = [];
  public experience: Array<object> = [];
  public technology: Array<object> = [];

  constructor(public dataService: DataService, public languageService: LanguageService) { }

  ngOnInit() {
    this.dataService.getInformation().subscribe((response: any) => {
      this.technology = response.technology;

      this.languageService.currentLang.subscribe(lang => {
        this.education = response.education.map(el => el[lang]);
        this.experience = response.experience.map(el => el[lang]);
      });
    });
  }
}