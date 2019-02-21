import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Board} from '../board/board.component';
import {DashboardApiService} from './dashboard-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  queryString = 'test';
  data: SearchData;
  boards: Board[];
  pages: Array<number>;
  noOfItemsPerPage = 6;

  constructor(private http: HttpClient, private apiService: DashboardApiService) {
  }


  ngOnInit() {
    this.getSearchResults();
  }

  getSearchResults() {
    this.apiService.getSearchData(this.queryString)
      .subscribe(data => {
        this.data = data;
        this.boards = data.items.slice(0, this.noOfItemsPerPage);
        console.log((Math.round(data.items.length / this.noOfItemsPerPage)));
        this.pages = Array(Math.round(data.items.length / this.noOfItemsPerPage)).fill(0);
      }, error => alert(error.message));
  }

  setNextPage(page: number) {
    const start = this.noOfItemsPerPage * page;
    const end = this.noOfItemsPerPage * (page + 1);
    console.log(this.data.items.length);
    console.log(`${start} ${end}`);
    this.boards = this.data.items.slice(start, end);
  }
}

export class SearchData {
  total_count: number;
  incomplete_results: boolean;
  items: Board[];
}
