import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { LoadingService } from '../service/loading/loading.service';
import {startWith} from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  p: number = 1;
  searchid:any;
  loading$=this.loader.loading$

  public dataItems:any=[]
  constructor( private api:ApiService,private route:Router,public loader:LoadingService,private http:HttpClient) {
    
   }
  ngOnInit(): void {
    this.api.getitems().subscribe((res)=>this.dataItems=res.data)
    this.api.getitems().subscribe(next=>{localStorage['httpRepoCash']=JSON.stringify(next)})
    
  }
singleuser(id:any){
this.route.navigate(['userdetails/'+id])
}

search(searchid:{ target: HTMLInputElement; }){

  
  if(searchid){
    this.loader.show()
    setTimeout(() => {
      this.loader.hide()
      this.route.navigate(['userdetails/'+searchid]) 
    }, 1000);
  } else{
    this.ngOnInit()

  }
}
}
