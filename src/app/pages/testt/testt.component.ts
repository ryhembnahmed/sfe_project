import { ResourceService } from './../services/resource.service';
import { NetworkService } from './../services/network.service';
import { CracheService } from './../services/crache.service';
import { AgenceService } from './../services/agence.service';
import { RankingService } from './../services/ranking.service';
import { AccidentService } from './../services/accident.service';
import { AirlineService } from './../services/airline.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testt',
  templateUrl: './testt.component.html',
  styleUrls: ['./testt.component.scss']
})
export class TesttComponent implements OnInit {

  constructor(private airlineService : AirlineService,
              private accidentService : AccidentService,
              private rankingService : RankingService,
              private agenceService : AgenceService,
              private cracheService : CracheService,
              private networkService : NetworkService,
              private resourceService : ResourceService ) { }

  airlines : any[]
  accidents : any[]
  rankings : any[]
  agences : any[]
  craches : any []
  networks : any []
  resources : any []

  ngOnInit() {
    /*this.airlineService.getAirlines().subscribe((data : any[]) => {
      this.airlines = data;
      console.log("Airline Data")
      console.log(this.airlines)
      console.log("-------------------------------")
    });

    this.accidentService.getAccidents().subscribe((data : any[]) => {
      this.accidents = data;
      console.log("Accident Data")
      console.log(this.accidents)
      console.log("-------------------------------")
    });

    this.rankingService.getRankings().subscribe((data : any[]) => {
      this.rankings = data;
      console.log("Ranking Data")
      console.log(this.rankings)
      console.log("-------------------------------")
    });

    this.agenceService.getAgences().subscribe((data : any[]) => {
      this.agences = data;
      console.log("Agence Data")
      console.log(this.agences)
      console.log("-------------------------------")
    });

    this.cracheService.getCraches().subscribe((data : any[]) => {
      this.craches = data;
      console.log("Crache Data")
      console.log(this.craches)
      console.log("-------------------------------")
    });

    this.networkService.getNetworks().subscribe((data : any[]) => {
      this.networks = data;
      console.log("Network Data")
      console.log(this.networks)
      console.log("-------------------------------")
    });

    this.resourceService.getResources().subscribe((data : any[]) => {
      this.resources = data;
      console.log("Resource Data")
      console.log(this.resources)
      console.log("-------------------------------")
    });
    */
  }


  prepareChartOptions(){
    /* prepare option using the airline variable */
  }

  }
