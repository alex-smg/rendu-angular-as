/*
Imports
*/
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
//

/*
Definition and export
*/
@Injectable({
  providedIn: 'root'
})
export class ObservablesService {

  constructor() {}

  protected userInfo: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  protected sourceList: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  protected resultArticle: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  protected session: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  public getUserInfo(): Observable<any> { return this.userInfo; }
  public getSourceList(): Observable<any> { return this.sourceList; }
  public getResultArticle(): Observable<any> { return this.resultArticle; }
  public getSession(): Observable<any> { return this.session; }

  public setObservableData = (type: string, data: any) => {
    switch (type) {
      case 'user':
        this.userInfo.next(data.data);
        this.session.next(true);
        localStorage.setItem('token', data.data.token );
        localStorage.setItem('email', data.data.user.email);
        localStorage.setItem('firstname', data.data.user.firstname);
        localStorage.setItem('lastname', data.data.user.lastname);
        break;
      case 'logout':
        console.log('logout');
        this.userInfo.next('');
        this.session.next(null);
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        localStorage.removeItem('firstname');
        localStorage.removeItem('lastname');
        break;
      case 'source':
        this.sourceList.next(data);
        break;
      case 'articles':
        console.log('test');
        console.log(data);
        this.resultArticle.next(data.data.articles);
        break;

      default:
        break;
    }
  }

}
