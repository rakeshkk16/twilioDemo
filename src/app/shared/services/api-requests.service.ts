import { DataService } from './data.service';
import {throwError as observableThrowError} from 'rxjs';

import {catchError, map, mergeMap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpParams} from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { HttpRequests } from './http-requests.service';

/**
 * Created by Rakesh on 24/07/20.
 */
@Injectable()
export class ApiRequests {
  constructor(public httpRequest: HttpRequests, public dataService: DataService) {

  }

  public fetchToken() {
    const API = 'https://20cd09b5197d.ngrok.io/token/generate';
    return this.httpRequest.post(API, this.dataService.getRequestOptionArgs()).pipe(
      map((data) => {
        return data;
      }), catchError((error: any) => {
        return observableThrowError(error);
      })
    );
  }


}

