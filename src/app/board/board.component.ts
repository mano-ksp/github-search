import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  @Input() data: Board;
  constructor() { }

  ngOnInit() {
  }
}

export class Board {
  id: number;
  name: string;
  owner: {avatar_url: string};
  html_url: string;
  description: string;
  created_at: Date;
  updated_at: Date;
  git_url: string;
  homepage: string;
  language: string;
  forks: number;
  open_issues: number;
  stargazers_count: number;
}
