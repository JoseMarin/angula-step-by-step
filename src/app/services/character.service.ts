import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Character } from '../models/character';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private baseUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) { }

  //retorna todo el json de datos
  retornar(): Observable<Character[]> {
    return this.http.get<Character[]>(this.baseUrl + '/1,2,3,4,5');
  }

  //retorna solo los campos que a mi me interesan
  getFilter(): Observable<Character[]>{
    return this.http.get<Character[]>(this.baseUrl + '/1,2,3,4,5').pipe(
      map((response) => {
        // Transformar la respuesta de la API en instancias del modelo Producto
        return response.map((response) => {
          return {
            id: response.id,
            name: response.name,
            status: response.status,
            species: response.species,
            gender: response.gender,
            origin: response.origin,
            location: response.location,
            image: response.image
          } as Character;
        });
      })
    );
  }

  // getById(id: string) {
  //   return this.http.get(`${this.baseUrl}/${id}`);
  // }

  getById(id: string): Observable<Character>{
    return this.http.get<Character>(`${this.baseUrl}/${id}`).pipe(
      map((response) => {
        // Transformar la respuesta de la API en instancia del modelo Character
          return {
            id: response.id,
            name: response.name,
            status: response.status,
            species: response.species,
            gender: response.gender,
            origin: response.origin,
            location: response.location,
            image: response.image
          } as Character;
        })
    );
  }


}
