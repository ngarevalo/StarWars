import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})

export class EmpleadosComponent implements OnInit, OnDestroy {

  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  People: any;
  isloading: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.isloading = true;
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      language: {
        url: 'https://cdn.datatables.net/plug-ins/1.10.20/i18n/Spanish.json'
      }
    };

    this.http.get('http://dummy.restapiexample.com/api/v1/employees')
      .subscribe((response: any) => {
        this.People = response.data;
        this.dtTrigger.next();
        this.isloading = false;
      });
      
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
