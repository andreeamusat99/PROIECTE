import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Dog} from "../models/dog";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DogService {

  dogsUrl = 'https://479bb514-4732-4740-8ae0-26f61ab250bd.mock.pstmn.io/dogs';

  constructor(private http: HttpClient) {
  }

  getDogs(): Observable<Dog[]> {
    return this.http.get<Dog[]>(this.dogsUrl);
  }

  addDog(dog: Dog): Observable<string> {
    return this.http.post<string>(this.dogsUrl, dog);
  }

  deleteDog(dogId: number): Observable<string> {
    return this.http.delete<string>(this.dogsUrl+'/'+dogId);
  }

  editDog(dog: Dog): Observable<string> {
    return this.http.put<string>(this.dogsUrl, dog);
  }
}
