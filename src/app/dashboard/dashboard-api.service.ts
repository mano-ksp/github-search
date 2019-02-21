import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SearchData} from './dashboard.component';

@Injectable({
  providedIn: 'root'
})
export class DashboardApiService {

  constructor(private http: HttpClient) { }

  getSearchData(query: string): Observable<SearchData> {
    return this.http.get<SearchData>(`https://api.github.com/search/repositories?q=${query}`);
  }
}
