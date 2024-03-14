import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  readonly APIUrl="http://localhost:5000/";
  constructor(private _http:HttpClient) {
  }

  addedTask(data: any): Observable<any>{
   return this._http.post(this.APIUrl+'notes', data);
  };

  getAllTasks(): Observable<any>{
    return this._http.get(this.APIUrl+'notes');
   };
}
