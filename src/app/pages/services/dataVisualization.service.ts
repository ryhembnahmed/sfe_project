import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataVisualizationService {
  headers = new HttpHeaders();

  private DASHBOARD_BASE_URL = "http://localhost:8080/config";

  constructor(private http : HttpClient, private authService: NbAuthService) {

    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {

        if (token.isValid()) {
          this.headers = this.headers.set('Content-Type', 'application/json; charset=utf-8');
          this.headers = this.headers.set('Authorization', 'Bearer '+token['token']);
        }

      });
  }


  public getDashbords(){
    return this.http.get(this.DASHBOARD_BASE_URL+"/dashboards", { headers : this.headers});
  }

  public postDashboard(dashboard){
    return this.http.post(this.DASHBOARD_BASE_URL+"/dashboards", dashboard, { headers : this.headers})
  }

  public deleteDashboard(id){
    return this.http.delete(this.DASHBOARD_BASE_URL+"/dashboards/"+id, { headers : this.headers})
  }

  public getWidgets(){
    return this.http.get(this.DASHBOARD_BASE_URL+"/widgets");
  }

  public getInsights(){
    return this.http.get(this.DASHBOARD_BASE_URL+"/insights");
  }

}
