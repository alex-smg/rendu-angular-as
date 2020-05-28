// Angular
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ObservablesService } from '../observable/observable.service';
import { environment } from '../../../environments/environment';
//


/*
Definition
*/
@Injectable()
export class CrudService {

  // Inject module(s) in the service
  constructor(
    // tslint:disable-next-line:no-shadowed-variable
    private HttpClient: HttpClient,
    // tslint:disable-next-line:no-shadowed-variable
    private ObservablesService: ObservablesService,
    ){}


  /*
  Methods to get API responses
  */
  // Get the API response
  private getData = (endpoint, apiResponse: any) => {
    // Switch endpoint to set observable value
    switch (endpoint){
      case 'users':
        this.ObservablesService.setObservableData('user', apiResponse);

        // Return data
        return apiResponse || {};
        break;
      case 'sources':
        this.ObservablesService.setObservableData('source', apiResponse);

        // Return data
        return apiResponse || {};
        break;
      case 'logout':
        this.ObservablesService.setObservableData('logout', apiResponse);

        // Return data
        return apiResponse || {};
        break;
      case 'articles':
        this.ObservablesService.setObservableData('articles', apiResponse);

        // Return data
        return apiResponse || {};
        break;
      default:
        // Retun data anytime
        return apiResponse || {};
        break;
    }
  }

  // Get the API error
  private handleError = (apiError: any) => Promise.reject(apiError.error);


  // LOGIN
  public login(endpoint: string, credentials: any): Promise<any>{
    const myHeader = new HttpHeaders();
    myHeader.append('Content-Type', 'application/json');
    return this.HttpClient.post(`${environment.apiUrl}/login`, credentials, { headers: myHeader })
      .toPromise()
      .then(data => this.getData(endpoint, data))
      .catch(this.handleError);
  }

  // ME
  public getBookMarks(endpoint: string): Promise<any>{
    const myHeader = new HttpHeaders();
    myHeader.append('Content-Type', 'application/json');
    const token = {
      token: localStorage.token
    };
    if (localStorage.token) {
      return this.HttpClient.post(`${environment.apiUrl}/me`, token , { headers: myHeader })
        .toPromise()
        .then(data => this.getData(endpoint, data))
        .catch(this.handleError);
    } else {
      alert('vous n etes pas connecté');
    }
  }

  // Create USER
  public createUser(endpoint: string, data: any): Promise<any>{
    const myHeader = new HttpHeaders();
    myHeader.append('Content-Type', 'application/json');

    return this.HttpClient.post(`${environment.apiUrl}/register`, data, { headers: myHeader })
      .toPromise()
      .then(this.getData(endpoint, data))
      .catch(this.handleError);
  }

  // Get All sources
  public getAllSource(endpoint: string): Promise<any>{
    const body = {
      news_api_token: environment.token,
    };
    return this.HttpClient.post(`${environment.apiUrl}/news/sources`, body)
      .toPromise()
      .then( data => this.getData(endpoint, data))
      .catch(this.handleError);
  }

  public logout(endpoint: string): Promise<any>{
    console.log(endpoint);
    return this.HttpClient.get(`${environment.apiUrl}/logout`)
      .toPromise()
      .then(this.getData(endpoint, ''))
      .catch(this.handleError);
  }

  // Search width keywords
  public searchWithKeyword(endpoint: string, search: any): Promise<any>{
    const myHeader = new HttpHeaders();
    myHeader.append('Content-Type', 'application/json');
    const body = {
      news_api_token: environment.token,
    };
    return this.HttpClient.post(`${environment.apiUrl}/news/${search.source}/${search.search}`, body, { headers: myHeader })
      .toPromise()
      .then(data => this.getData(endpoint, data))
      .catch(this.handleError);
  }

  // Search without keywords
  public search(endpoint: string, source: any): Promise<any>{
    const myHeader = new HttpHeaders();
    myHeader.append('Content-Type', 'application/json');
    const body = {
      news_api_token: environment.token,
    };
    return this.HttpClient.post(`${environment.apiUrl}/news/${source}/null`, body, { headers: myHeader })
      .toPromise()
      .then(data => this.getData(endpoint, data))
      .catch(this.handleError);
  }


  public addFav(endpoint: string, dataSource: any): Promise<any>{
    const myHeader = new HttpHeaders();
    myHeader.append('Content-Type', 'application/json');
    return this.HttpClient.post(`${environment.apiUrl}/bookmark`, dataSource, { headers: myHeader })
      .toPromise()
      .then(data => this.getData(endpoint, data))
      .catch(this.handleError);
  }

  // DELETE FAV
  public removeFav(id: any): Promise<any>{
    const myHeader = new HttpHeaders();
    myHeader.append('Content-Type', 'application/json');
    const token = {
      token: localStorage.token
    };
    // @ts-ignore
    return this.HttpClient.delete(`${environment.apiUrl}/bookmark/${id}` , { body: token })
      .toPromise()
      .then()
      .catch(this.handleError);
  }
}
//
