import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, UserService, AuthenticationService } from '@app/_services';
import { CaptchaComponent } from 'angular-captcha';

@Component({  templateUrl: 'recall.component.html'})
export class RecallComponent implements OnInit {

  protected aFormGroup: FormGroup; 
  errorMessages: Object;
  successMessages: string;  
  loading = false;
  submitted = false;
  

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private authenticationService: AuthenticationService,
      private userService: UserService,
      private alertService: AlertService
  ) { 
      // redirect to home if already logged in
      if (this.authenticationService.currentUserValue) { 
          this.router.navigate(['/']);
      }
      
      
  }

  
  ngOnInit() {
      //this.commonService.getPost('test','http://jsonplaceholder.typicode.com/posts');
  }

  
  onSubmit() {
      this.submitted = true;
      // stop here if form is invalid
      this.loading = true;
  }
 

}
