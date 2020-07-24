import {Injectable} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';

/**
 * Created by Rakesh on 24/07/20.
 */

@Injectable()
export class DataService {

  constructor() {
  }

  public getHeadersForClientDashboard() {
    let headers = new HttpHeaders();
    // if (this.user.pm_dashboard_token) {
    //   headers = headers.append('client-auth-token', this.user.pm_dashboard_token);
    // }
    // if (environment.PM_DASHBOARD_AUTH.secret_key) {
    //   headers = headers.append('secret-key', environment.PM_DASHBOARD_AUTH.secret_key);
    // }
    // headers = headers.append('partner-code', this.homePageData ? this.homePageData.builder_partner ? this.homePageData.builder_partner.code : 'e-ai' : 'a-ai');
    return headers;
  }

  public getHeadersForTracker() {
    let headers = new HttpHeaders();
    // // headers = headers.append('Content-Type', 'application/json');
    // if (environment.TRACKER_AUTH.secret_key) {
    //   headers = headers.append('secret-key', environment.TRACKER_AUTH.secret_key);
    // }
    return headers;
  }

  public getRequestOptionArgs(contentType?: string, isFromUrl?: boolean) {
    let headers = new HttpHeaders();
    if (!contentType) {
      headers = headers.append('Content-Type', 'application/json');
    } else {
      headers = headers.append('Content-Type', contentType);
    }
    // let user;

    // if (this.user) {
    //   user = this.user;
    // } else if (this.signupData) {
    //   user = this.signupData;
    // } else if (this.loginData) {
    //   user = this.loginData;
    // }

    // if (user) {
    //   const token = isFromUrl ? this.urlParameters.authToken ? this.urlParameters.authToken : user.authtoken : user.authtoken;
    //   if (token) {
    //     headers = headers.append('authtoken', token);
    //   }
    // }
    return headers;
  }

}
