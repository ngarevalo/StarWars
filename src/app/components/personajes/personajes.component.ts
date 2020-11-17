import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Results } from 'src/app/models/personaje.model';
import { StarWarsService } from 'src/app/service/service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss'],
  providers: [ StarWarsService ]
})

export class PersonajesComponent implements OnInit, OnDestroy {

  title = 'Personajes';
  PeopleList = [];

  responsePeoples: any;
  responsePlanets: any;

  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  isloading: boolean = false;

  constructor(private service: StarWarsService) { }

  ngOnInit() {

    this.isloading = true;
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]],
      language: {
        url: 'https://cdn.datatables.net/plug-ins/1.10.20/i18n/Spanish.json'
      }
    };

    const dataService = this.service.requestDataFromMultipleSources().subscribe(responseList => {
      this.responsePeoples = responseList[0].results;
      this.responsePlanets = responseList[1].results;
      // console.log('AAA', this.responsePeoples);
      // console.log('BBB', this.responsePlanets);

      this.PeopleList = this.responsePeoples;
      this.PeopleList.forEach(item => {   
        let planet = this.responsePlanets.filter(x => x.url == item.homeworld)[0];
        if (planet) {
          item.planet = planet.name;
        }
        else {
          let planetPosition = item.homeworld.lastIndexOf("/");
          let newString = item.homeworld.substr(0,planetPosition)
          planetPosition = newString.lastIndexOf("/");
          let planetId = newString.substr(planetPosition + 1);
          this.service.getPlanet(planetId).subscribe((dato: any) => {
            item.planet = dato.name;
          }); 
        }
      });
      this.dtTrigger.next();
      this.isloading = false;
    });

  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  GetPeople() {

    const dataService = this.service.getPersonajes('mass');
    dataService.subscribe((response: Results) => {
        this.PeopleList = response.results;
        this.PeopleList.forEach(item => {
            let planetPosition = item.homeworld.lastIndexOf("/");
            let newString = item.homeworld.substr(0,planetPosition)
            planetPosition = newString.lastIndexOf("/");
            let planetId = newString.substr(planetPosition + 1);
            this.service.getPlanet(planetId).subscribe((dato: any) => {
              item.planet = dato.name;
            });    
        });
    });

  }

}