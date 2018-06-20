import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class FservService {

  constructor( private http : HttpClient ) 
  { }
  
  getData( path : string ): Observable < any > {

    return this.http.get( path );
   }

   sendData( path :string , data:string ){

    let body = JSON.stringify({ data });            
        let headers = new Headers({ 'Content-Type': 'application/json' });
        // let options = new RequestOptions({ headers: headers });
    // return this.http.post(this.path, body)
    // .map(this.extractData)
    // .catch(this.handleError);
    
    // return this.http.get( path );

   }

  //  private extractData(res: Response) {
  //   let body = res.json();
  //   return body.data || {};
// }

// private handleError(error: Response) {
//     console.error(error);
//     return Observable.throw(error.json().error || 'Server Error');
// }

}





  

   

