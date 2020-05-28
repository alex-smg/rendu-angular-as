import { Component, OnInit } from '@angular/core';
import {ObservablesService} from '../../services/observable/observable.service';

@Component({
  selector: 'app-result-articles',
  templateUrl: './result-articles.component.html',
  styles: [
  ]
})
export class ResultArticlesComponent implements OnInit {

  public resultSearch: any;

  constructor(
    // tslint:disable-next-line:no-shadowed-variable
    private ObservablesService: ObservablesService
  ){
    this.ObservablesService.getResultArticle().subscribe( articlesObserver => {
      if (articlesObserver === null) { this.resultSearch = null; }
      else{ this.resultSearch = articlesObserver; }
      console.log(this.resultSearch);
    });
  }

  ngOnInit(): void {
  }

}
