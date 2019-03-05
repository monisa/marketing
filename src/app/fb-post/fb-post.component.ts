import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs/internal/observable/interval';
import { Subscription } from 'rxjs/internal/Subscription';
@Component({
  selector: 'app-fb-post',
  templateUrl: './fb-post.component.html',
  styleUrls: ['./fb-post.component.css']
})
export class FbPostComponent implements OnInit {
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
        title: 'Facebook',
        post: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        id:1
      },{
        title: 'Twitter',
        post: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`,
        id:2
      }];  
  }
}


