import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })

export class CommonService {


    public topMenu = 'top';//top,left,center,right
    public mainMenu = 'left';//top,left,center,right
    public headerMenu = 'right';//top,left,center,right
    public topCount = 0;
    public leftCount = 0;
    public rightCount = 0;


    constructor(private http: HttpClient) {

        if (this.topMenu === 'top' || this.mainMenu === 'top' || this.headerMenu === 'top') {
            this.topCount++;
        }
        if (this.topMenu === 'left' || this.mainMenu === 'left' || this.headerMenu === 'left') {
            this.leftCount++;
        }
        if (this.topMenu === 'right' || this.mainMenu === 'right' || this.headerMenu === 'right') {
            this.rightCount++;
        }

    }


}