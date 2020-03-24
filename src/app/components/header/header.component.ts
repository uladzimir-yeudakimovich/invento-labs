import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  education: Array<object> = [];
  experience: Array<object> = [];
  technology: Array<object> = [];

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.dataService.getInformation()
      .subscribe(
        (response: any) => {
          this.education = response.education;
          this.experience = response.experience;
          this.technology = response.technology;
        }
      );
  }
}