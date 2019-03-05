import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs/internal/observable/interval';
import { Subscription } from 'rxjs/internal/Subscription';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  arrayRange: any;
  public active: any = 0;
  subscribe: any;
  source:any;
  myQuerySub: Subscription;
  constructor() {  }
  ngOnInit() {
    //emit value in sequence every 1 second
    let source = interval(5000);
    this.myQuerySub = source.subscribe(val =>  {
      if(val > this.arrayRange.length-1) {
        val=0;
        this.myQuerySub.unsubscribe();
          }
        this.active = val
    });

    this.arrayRange = [{
        title: 'Northern Lights',
        url: 'https://www.w3schools.com/w3css/img_lights.jpg',
        id:1
      },{
        title: 'Beautiful Mountains',
        url: 'https://www.w3schools.com/w3css/img_mountains.jpg',
        id:2
      },{
        title: 'The Rain Forest',
        url: 'https://www.w3schools.com/w3css/img_forest.jpg',
        id:3
      },{
        title: 'French Alps',
        url: 'https://www.w3schools.com/w3css/img_snowtops.jpg',
        id:4
      }];  
  }
  // myFunction(){
     
  //   if(this.active > this.arrayRange){
  //     this.active = 0;
  //   } else{
  //     this.active+1;     
  //   }
  // }
}
