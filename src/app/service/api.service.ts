import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
getitems(){
  return this.http.get<any>(" https://reqres.in/api/users/?page:2")
  .pipe(map((res:any)=>{
    return res   
  }))
}
getoneitem(id:any){
  return this.http.get('https://reqres.in/api/users/'+id)
}
}
