import { Component, OnInit } from '@angular/core';
//service
import {  FservService } from '../fserv.service';

import { ShareDataService } from '../share-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchResult: object;
  constructor( private urlHistoryService: ShareDataService) {
    this.searchResult = this.urlHistoryService.getUrlHistoryObj();
    console.log(this.searchResult);
   }

ngOnInit() {

}

}

