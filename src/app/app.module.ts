import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

//Routes
import {app_routing} from './app.routes'

//Services
import {InformationService} from "./services/information.service";

//Database Firestore
// import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
// import { getAnalytics, provideAnalytics } from '@angular/fire/analytics';
//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { AboutComponent } from './components/about/about.component';
import { ItemdetailComponent } from './components/itemdetail/itemdetail.component';



// Replace the following with your actual Firebase configuration
// const firebaseConfig = {
//   apiKey: '...',
//   authDomain: '...',
//   projectId: '...',
//   storageBucket: '...',
//   messagingSenderId: '...',
//   appId: '...',
// };

// @NgModule({
//   imports: [

//     provideFirebaseApp(() => initializeApp(firebaseConfig)),
//     provideAnalytics(() => getAnalytics()),
//   ],
//   // ... other NgModule configurations
// })

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AboutComponent,
    ItemdetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    app_routing
  ],
  providers: [
    InformationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
