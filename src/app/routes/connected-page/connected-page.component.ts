import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud/crud.service';

@Component({
  selector: 'app-connected-page',
  templateUrl: './connected-page.component.html',
  styles: [
  ]
})
export class ConnectedPageComponent implements OnInit {

  constructor(
    // tslint:disable-next-line:no-shadowed-variable
    private CrudService: CrudService,
  ) { }

  public listOfBookmark = [];

  public getListFav() {
    this.CrudService.getBookMarks('bookmark').then(response => {
      console.log(response);
      this.listOfBookmark = response.data.bookmark;
    }).catch(error => {
      console.log('ERROR request', error);
    });
  }

  public getArticle(id) {
    this.CrudService.search('articles', id)
      .then( response => {
        console.log('SUCCES request', response);
      })
      .catch( error => {
        console.log('ERROR request', error);
      });
  }

  public removeFav(id) {
    console.log(id);
    this.CrudService.removeFav(id)
      .then( response => {
        console.log('SUCCES request', response);
      })
      .catch( error => {
        console.log('ERROR request', error);
      });
    this.listOfBookmark.find(bookmark => {
      if (bookmark._id === id) {
        const indexBookmark = this.listOfBookmark.indexOf(bookmark);
        this.listOfBookmark.splice(indexBookmark, 1);
      }
    });
  }

  ngOnInit(): void {
    this.getListFav();
  }
}
