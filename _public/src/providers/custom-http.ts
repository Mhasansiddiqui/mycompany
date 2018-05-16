import { Injectable } from '@angular/core';
import { Http, Response, RequestOptionsArgs, ConnectionBackend, RequestOptions, Request } from '@angular/http';
import { Observable } from 'rxjs'

@Injectable()
export class CustomHttp extends Http {

  constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {


    super(backend, defaultOptions);


  }
  /*  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
      console.log('request...');
      return super.request(url, options)
        .map(res => res.json())
        .catch(res => {
          return Observable.throw(res.json());
        });
  
    }*/

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    let cUser = localStorage.getItem('currentUser');
    if (cUser) {
      let pCUser = JSON.parse(cUser);
      if (pCUser['_id'] && pCUser['OwnerId'])
        url = url + "?OwnerId=" + pCUser['OwnerId'] + '&_creator=' + pCUser['_id']
      else if (pCUser['_id']) {
        url = url + "?OwnerId=" + pCUser['_id'] + '&_creator=' + pCUser['_id']
      }
    }
    return super.get(url, options)
      .map(res => res.json())
      .catch(res => {
        return Observable.throw(res.json());
      });
  }
  post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    let cUser = localStorage.getItem('currentUser');
    if (cUser) {
      let pCUser = JSON.parse(cUser);
      if (pCUser['_id'] && pCUser['OwnerId'])
        url = url + "?OwnerId=" + pCUser['OwnerId'] + '&_creator=' + pCUser['_id']
      else if (pCUser['_id']) {
        url = url + "?OwnerId=" + pCUser['_id'] + '&_creator=' + pCUser['_id']
      }
    }
    const request = super.post(url, body);
    return request;
  }

}
