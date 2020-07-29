import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Routing code here
import { AppRoutingModule } from './app-routing.module';

//for Icon purpose 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//Components of Website
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DevroletimelineComponent } from './devroletimeline/devroletimeline.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DevroletimelineComponent,
    AboutComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
