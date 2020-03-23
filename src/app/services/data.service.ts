import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('https://portfolio-57f5d.firebaseio.com/data.json');
  }
}
