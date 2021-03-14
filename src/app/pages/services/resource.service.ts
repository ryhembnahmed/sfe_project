import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

private REST_API_SERVER = "http://localhost:3000";

constructor(private http : HttpClient) { }

public getResources(){
  return this.http.get(this.REST_API_SERVER+"/RessourcesDispo");
}

}
