import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FservService {

  constructor( private http : HttpClient ) 
  { }
  
  getData( path : string ): Observable < any > {

    return this.http.get( path );
   }

}





  

   

