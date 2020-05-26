import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ObservablesService} from '../../services/observable/observable.service';
import { CrudService } from '../../services/crud/crud.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-article',
  templateUrl: './search-article.component.html',
  styles: [
  ]
})
export class SearchArticleComponent implements OnInit {


  public sources: any;

  constructor(
    // tslint:disable-next-line:no-shadowed-variable
    private CrudService: CrudService,
    // tslint:disable-next-line:no-shadowed-variable
    private ObservablesService: ObservablesService,
    // tslint:disable-next-line:no-shadowed-variable
    private FormBuilder: FormBuilder
  ) {
    this.ObservablesService.getSourceList().subscribe( sourcesDataObserver => {
        if (sourcesDataObserver === null) { this.sources = null; }
        else{ this.sources = sourcesDataObserver[0]; }
    });
  }

  public formData: FormGroup;
  @Output() formSubmit = new EventEmitter();

  readLocalStorageValue() {
    return !!localStorage.token;
  }
  // Method to reset form
  private resetForm = ()  => {
    this.formData = this.FormBuilder.group({
      search: [ null ],
      source: [ null, Validators.required ],
    });
  }

  public addFav(e) {
    e.preventDefault();
    const findSource = this.sources.find(source => source.id === this.formData.value.source);
    findSource.token = localStorage.token;
    this.CrudService.addFav('fav', findSource).then(response => {
      console.log(response);
    }).catch(error => {
      console.log('ERROR request', error);
    });
  }

  ngOnInit(): void {
    this.resetForm();
    this.CrudService.getAllSource('sources')
      .then( response => {
        this.sources = response.data.sources;
        console.log(this.sources);
        console.log('SUCCES request', response);
      })
      .catch( error => {
        console.log('ERROR request', error);
      });
  }
}
