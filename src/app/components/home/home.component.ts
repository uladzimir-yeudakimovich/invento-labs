import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { LanguageService } from '../../services/language.servise';
import { InformationResponse, Info, Stars } from '../../models/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public education: Info[];
  public experience: Info[];
  public technology: Stars[];
  public general: Info;

  constructor(public dataService: DataService, public languageService: LanguageService) { }

  ngOnInit() {
    this.dataService.getInformation().subscribe((response: InformationResponse) => {
      // this.technology = response.technology;
      this.languageService.currentLang.subscribe(lang => {
        this.general = response.general[lang];
        // this.education = response.education.map(el => el[lang]);
        // this.experience = response.experience.map(el => el[lang]);
      });
    });
  }
}