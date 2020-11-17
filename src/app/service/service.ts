import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError, forkJoin } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { People, Results } from '../models/personaje.model';


@Injectable()
export class StarWarsService {

  apiPersonaje = 'https://swapi.dev/api/people/';
  apiPlanets = 'https://swapi.dev/api/planets/';

  constructor(private httpClient: HttpClient) {
  }

  /**
   * Personajes Ordenados
   * @param orderColumn : Columna a ordenar
   */
  getPersonajes(orderColumn: string): Observable<Results> {

    const params = new HttpParams().set('page', '3');
    // const params = new HttpParams();
    // params.set('ordering', '"$name"');
    // params.set('page', '3');

    return this.httpClient.get<Results>(this.apiPersonaje, { params }).pipe(catchError(this.handleError));

  }

  /**
   * Obtener nombre de Planeta
   * @param id : Identificador de Planeta
   */
  getPlanet(id: any): Observable<any> {
    const urlAPI = `${this.apiPlanets}${id}`;
    let residencia = this.httpClient.get(urlAPI);
    return residencia;
  }

  /**
   * Obteniendo los Planetas
   */
  getPlanets(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiPlanets}`);
  }

  /**
   * Obteniendo un personaje.
   */
  getPeople(name: any): Observable<Results> {
    const url = `${this.apiPersonaje}?search=${name}`;
    return this.httpClient.get<Results>(url);
  }

  /**
   * Múltiple results
   */
  requestDataFromMultipleSources(): Observable<Results[]> {

    const params = new HttpParams().set('page', '1');

    let resPeoples = this.httpClient.get<Results>(this.apiPersonaje, { params }).pipe(catchError(this.handleError));
    let resPlanets = this.httpClient.get<Results>(this.apiPlanets, { params }).pipe(catchError(this.handleError));

    // Observable.forkJoin (RxJS 5) changes to just forkJoin() in RxJS 6
    return forkJoin([resPeoples, resPlanets]);
  }

  /**
   * Manejo de Errores
   * @param error
   */
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}