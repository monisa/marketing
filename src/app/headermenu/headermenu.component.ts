import { Component, OnInit } from '@angular/core';
import { CommonService } from '@app/_services/common.service';

@Component({
  selector: 'app-headermenu',
  templateUrl: './headermenu.component.html',
  styleUrls: ['./headermenu.component.css']
})
export class HeadermenuComponent implements OnInit {

  constructor(public commonService:CommonService) { }

  ngOnInit() {
  }

}
