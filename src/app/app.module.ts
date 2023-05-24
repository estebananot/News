import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ArticleComponent } from './components/article/article.component';
import { TopheadlinesComponent } from './components/topheadlines/topheadlines.component';
import {NewsApiService} from './services/news-api.service';
import { TextComponent } from './components/text/text.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArticleComponent,
    TopheadlinesComponent,
    TextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    NewsApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
