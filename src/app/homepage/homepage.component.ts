import { Component, OnInit } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
data:any;
current:any;
location:any;
  constructor(public http: HttpClient) { }

  ngOnInit(): void {

    let url = 'http://api.weatherapi.com/v1/current.json?key=b75cb33f5ae24f89925133554222901&q=London&aqi=no';
     this.http.get(url).subscribe((res:any) => {
      //  console.log(res);       
       this.current = res.current;
       this.location = res.location;
       console.log(this.current);
       console.log(this.location);

       
     });
   
    
  }

}
