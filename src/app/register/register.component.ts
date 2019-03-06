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
    otpSubmit = false;
    register = this.registerForm;
    otpverify = false;
    otpNumber = '';

    

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

    public onOtpVerify() {

        if (this.registerVerifyForm.invalid) {
            return;
        }
        this.loading = true;
        this.otpSubmit = true;
        if(this.registerVerifyForm.value.otp === this.otpNumber){
            this.loading = false;
            this.alertService.success('Registration successful', true);
            //this.router.navigate(['/home']);
        }
    }

    public resendOpt() {
        
    }
   

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
    get otpForm() { return this.registerVerifyForm.controls; }

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
                    console.log('data',data);
                    this.loading = false;
                    this.otpverify = true;
                    this.otpNumber = '9876';
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
    
}
