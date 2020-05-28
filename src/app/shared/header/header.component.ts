import { Component, OnInit } from '@angular/core';
import { ObservablesService } from '../../services/observable/observable.service';
import { CrudService } from '../../services/crud/crud.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  /*
  Declaration
  */
  // Properties
  public userData: any;

  constructor(
    // tslint:disable-next-line:no-shadowed-variable
    private CrudService: CrudService,
    // tslint:disable-next-line:no-shadowed-variable
    private ObservablesService: ObservablesService
  ){
    this.ObservablesService.getUserInfo().subscribe( userDataObserver => {
      if (userDataObserver === null) { this.userData = null; }
      else{ this.userData = userDataObserver; }
    });
  }

  readLocalStorageValue() {
    return !!localStorage.token;
  }

  getLocalStorage() {
    return localStorage.firstname + ' ' + localStorage.lastname;
  }

  public logout() {
    this.CrudService.logout('logout')
      .then( response => {
        console.log('SUCCES request', response);
      })
      .catch( error => {
        console.log('ERROR request', error);
      });
  }
  //

  ngOnInit(){}
}
