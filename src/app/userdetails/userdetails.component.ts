import { HttpBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { LoadingService } from '../service/loading/loading.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
id=''
userdata:any
  constructor(private api:ApiService,private router:ActivatedRoute,private route:Router,private loader:LoadingService) {
    this.router.params.subscribe(params=>this.id=params.id)
    this.api.getoneitem(this.id).subscribe((res)=>this.userdata=res)
   }

  ngOnInit(): void {

    }
     goback(){ 
       this.loader.show()
       setTimeout(() => {
         this.loader.hide()
         this.route.navigate(['/'])

       }, 300);

 }

}
