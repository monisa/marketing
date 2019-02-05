import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, UserService, AuthenticationService } from '@app/_services';
import { CaptchaComponent } from 'angular-captcha';

@Component({templateUrl: 'register.component.html'})
export class RegisterComponent implements OnInit {
    protected aFormGroup: FormGroup; 
    errorMessages: Object;
    successMessages: string;

    registerForm: FormGroup;
    registerVerifyForm: FormGroup;
    loading = false;
    submitted = false;
    register = this.registerForm;
    otpverify = false;

    

    resolved(captchaResponse: string) {
        console.log(`Resolved captcha with response ${captchaResponse}:`);
        if( captchaResponse ){
            this.otpverify = true;
        }else{
            this.otpverify = false;
        }
    }

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private alertService: AlertService,
        
    ) { 
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) { 
            this.router.navigate(['/']);
        }
        
        
    }

    
    ngOnInit() {
        
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            //lastName: ['', Validators.required],
            username: ['', Validators.required]
            //password: ['', [Validators.required, Validators.minLength(6)]]
        });
        this.registerVerifyForm = this.formBuilder.group({
            otp: ['', Validators.required]
        });
        
        
       
    }

    public onOtpVerify(event, item) {
        console.log(item.controls.otp.value);
        email.available((avail: boolean) => {
            console.log("Email available? " + avail);
        });
      }
   

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;
        this.userService.register(this.registerForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
    
}
