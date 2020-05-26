import { Component, OnInit } from '@angular/core';
import {ObservablesService} from '../../services/observable/observable.service';
import { CrudService } from '../../services/crud/crud.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styles: [
  ]
})
export class HomePageComponent implements OnInit {
  constructor(
    // tslint:disable-next-line:no-shadowed-variable
    private ObservablesService: ObservablesService,
    // tslint:disable-next-line:no-shadowed-variable
    private CrudService: CrudService,
  ) {
  }

  readLocalStorageValue() {
     return !!localStorage.token;
  }
  ngOnInit(): void {
    if (localStorage.lastSource) {
      const event = {
        source: localStorage.lastSource,
        search : localStorage.lastSearch ? localStorage.lastSearch : undefined
      }
      this.search(event);
    }
  }

  public getUserInfo = (event) => {
    // Use CrudService to get user infos
    this.CrudService.login('users', event)
      .then( response => {
        console.log('SUCCES request', response);

      })
      .catch( error => {
        console.log('ERROR request', error);
      });
  }
  public registerUser = (event) => {
    console.log(event);
    this.CrudService.createUser('users', event)
      .then( response => {
        console.log('SUCCES request', response);
      })
      .catch( error => {
        console.log('ERROR request', error);
      });
  }
  public search = (event) => {
    if (!event.search || event.search === '') {
      console.log('without search');
      this.CrudService.search('articles', event.source)
        .then( response => {
          console.log('SUCCES request', response);
        })
        .catch( error => {
          console.log('ERROR request', error);
        });
    } else {
      console.log('search');
      this.CrudService.searchWithKeyword('articles', event)
        .then( response => {
          console.log('SUCCES request', response);
        })
        .catch( error => {
          console.log('ERROR request', error);
        });
    }
    localStorage.setItem('lastSource', event.source);
    if (event.search){ localStorage.setItem('lastSearch', event.search); }
  }
}
