import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from '../../services/data.service';
import { LanguageService } from '../../services/language.servise';
import { Project } from '../../models/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  data: Project[];
  customOptions: OwlOptions = {
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true
  }

  constructor(public dataService: DataService, public languageService: LanguageService) { }

  ngOnInit() {
    this.dataService.getProjects().subscribe((response: Project[]) => {
      this.languageService.currentLang.subscribe((lang: string) => {
        this.data = response.map(el => {
          el.description = el[lang];
          return el;
        });
      });
    });
  }
}