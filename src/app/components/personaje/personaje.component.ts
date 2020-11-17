import { Component } from '@angular/core';
import { People, Results } from 'src/app/models/personaje.model';
import { StarWarsService } from 'src/app/service/service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.scss'],
  providers: [ StarWarsService ]
})

export class PersonajeComponent {

  title = 'Información de Personaje';
  PeopleList = [];
  PeopleData: People = new People();
  valueToSearch: string;

  constructor(private service: StarWarsService) { 
    this.PeopleData = new People();
    this.valueToSearch = null;
  }

  GetPeople() {

    this.PeopleData = new People();
    if (this.valueToSearch) {
      this.service.getPeople(this.valueToSearch).subscribe((data: Results) => {    

        this.PeopleList = data.results;
        this.PeopleData = this.PeopleList[0];
        let planetPosition = this.PeopleData.homeworld.lastIndexOf("/");
        let newString = this.PeopleData.homeworld.substr(0,planetPosition)
        planetPosition = newString.lastIndexOf("/");
        let planetId = newString.substr(planetPosition + 1);
        this.service.getPlanet(planetId).subscribe((planet: any) => {
          this.PeopleData.homeworld = planet.name;        
        });
  
      });
      this.valueToSearch = null;
    }
    else {
      alert('Ingrese un nombre para buscar');
    }

  }
  
}