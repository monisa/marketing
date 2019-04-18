import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule } from '@angular/material';
// used to create fake backend
import { fakeBackendProvider } from './_helpers';
import { AppComponent }  from './app.component';
import { routing }        from './app.routing';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { RecallComponent } from './recall';
import { SliderComponent } from './slider/slider.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { FbPostComponent } from './fb-post/fb-post.component';
import { TwPostComponent } from './tw-post/tw-post.component';
import { AlertModule } from 'ngx-bootstrap';
import { RecaptchaModule } from 'ng-recaptcha';
import { HttpModule } from '@angular/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopmenuComponent } from './topmenu/topmenu.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { HeadermenuComponent } from './headermenu/headermenu.component';
import { CampaignComponent } from './campaign/campaign.component';
@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpModule,
        routing,
        AlertModule.forRoot(),
        BrowserAnimationsModule,
        MatInputModule, 
        MatButtonModule,
        MatSelectModule,
        MatIconModule,
        RecaptchaModule.forRoot()
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        SliderComponent ,
        TestimonialComponent,
        FbPostComponent,
        TwPostComponent ,
        RecallComponent ,
        DashboardComponent ,
        TopmenuComponent ,
        MainmenuComponent,
        CampaignComponent,
        HeadermenuComponent],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
