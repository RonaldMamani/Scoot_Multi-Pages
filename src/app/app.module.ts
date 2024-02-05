import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CareersComponent } from './pages/careers/careers.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { IntroComponent } from './components/intro/intro.component';
import { BenefiesAppComponent } from './components/benefies-app/benefies-app.component';
import { BenefieTopicComponent } from './components/benefie-topic/benefie-topic.component';
import { BenefieDetailComponent } from './components/benefie-detail/benefie-detail.component';
import { PageImageComponent } from './components/page-image/page-image.component';
import { BenefiesAboutComponent } from './components/benefies-about/benefies-about.component';
import { BenenfieNumerationComponent } from './components/benenfie-numeration/benenfie-numeration.component';
import { FAQsComponent } from './components/faqs/faqs.component';
import { ReadMoreComponent } from './components/read-more/read-more.component';
import { JobDetailComponent } from './components/job-detail/job-detail.component';
import { BenefiesCareersComponent } from './components/benefies-careers/benefies-careers.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CareersComponent,
    LocationsComponent,
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    IntroComponent,
    BenefiesAppComponent,
    BenefieTopicComponent,
    BenefieDetailComponent,
    PageImageComponent,
    BenefiesAboutComponent,
    BenenfieNumerationComponent,
    FAQsComponent,
    ReadMoreComponent,
    JobDetailComponent,
    BenefiesCareersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
