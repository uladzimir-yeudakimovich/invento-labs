import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  data: any;
  customOptions: OwlOptions = {
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true
  }

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(dataFromServer => {
      this.data = dataFromServer;
    });
  }
}