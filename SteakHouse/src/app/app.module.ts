import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { NavigationSectionComponent } from './navigation-section/navigation-section.component';
import { FeatureSectionComponent } from './feature-section/feature-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { VideoSectionComponent } from './video-section/video-section.component';
import { MenuSectionComponent } from './menu-section/menu-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';
import { CopyrightSectionComponent } from './copyright-section/copyright-section.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppService } from './AppService';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationSectionComponent,
    FeatureSectionComponent,
    AboutSectionComponent,
    VideoSectionComponent,
    MenuSectionComponent,
    ContactSectionComponent,
    FooterSectionComponent,
    CopyrightSectionComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
