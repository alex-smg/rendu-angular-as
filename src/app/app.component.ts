import { Component , OnInit } from '@angular/core';
import { CrudService } from './services/crud/crud.service';

/*
Componant configuration
*/
@Component({
  selector: 'app-root',
  template: `
      <app-header></app-header>
      <router-outlet></router-outlet>
    `
})
//


/*
Componant class definition
*/
export class AppComponent implements OnInit {

  constructor(
    // tslint:disable-next-line:no-shadowed-variable
    private CrudService: CrudService
  ){}

  ngOnInit(){}
}
//
