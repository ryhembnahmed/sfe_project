import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AirlineService {

private REST_API_SERVER = "http://localhost:3000";
constructor( private http : HttpClient) { }

public getAirlines(){
  return this.http.get(this.REST_API_SERVER+"/Airlines");
}

/*
POST
DELETE
PUT
goes here
*/

}
