import { Component, OnInit } from '@angular/core';
import { CommonService } from '@app/_services/common.service';

@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.css']
})
export class TopmenuComponent implements OnInit {

  constructor(public commonService:CommonService) { }

  ngOnInit() {
  }

}
