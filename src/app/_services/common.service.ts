import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })

export class CommonService {
    constructor(private http: HttpClient) { }

    public topMenu = 'center';//left,center,right
    public mainMenu= 'center';//left,center,right
    public headerMenu = 'center';//left,center,right
    public contentArea = 'center';//left,center,right
}