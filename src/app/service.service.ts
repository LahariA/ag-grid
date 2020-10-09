import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  baseUrl = 'http://localhost:3000/tableData';

  constructor(private http: HttpClient) { }
  getJsonData() {
    return this.http.get(this.baseUrl);
  }
}
