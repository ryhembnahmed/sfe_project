import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccidentService {

private REST_API_SERVER = "http://localhost:3000";

constructor(private http : HttpClient) { }

public getAccidents(){
  return this.http.get(this.REST_API_SERVER+"/Accidents");
}

}
