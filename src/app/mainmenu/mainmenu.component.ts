import { Component, OnInit } from '@angular/core';
import { CommonService } from '@app/_services/common.service';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.css']
})
export class MainmenuComponent implements OnInit {

  constructor(public commonService:CommonService) { }

  ngOnInit() {
  }

}
