import { Injectable } from '@angular/core';

@Injectable()
export class ShareDataService {
  private urlHistory:object;

  constructor() { 
    this.urlHistory ={};
  }

  public setUrlHistoryObj(val: object): void {
    this.urlHistory = val;
}

public getUrlHistoryObj(): object {
    return this.urlHistory;
}
  

}
