import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './routes/home-page/home-page.component';
import { ConnectedPageComponent } from './routes/connected-page/connected-page.component';
// Router
import { RouterModule } from '@angular/router';
import { AppRouterModule } from './app.router';
import { HeaderComponent } from './shared/header/header.component';
// service
import { CrudService } from './services/crud/crud.service';

import { HttpClientModule } from '@angular/common/http';
import { FormLoginComponent } from './shared/form-login/form-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormRegisterComponent } from './shared/form-register/form-register.component';
import { SearchArticleComponent } from './shared/search-article/search-article.component';
import { ResultArticlesComponent } from './shared/result-articles/result-articles.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ConnectedPageComponent,
    HeaderComponent,
    FormLoginComponent,
    FormRegisterComponent,
    SearchArticleComponent,
    ResultArticlesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(AppRouterModule, {onSameUrlNavigation: 'reload'}),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
