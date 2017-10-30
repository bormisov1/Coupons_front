import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { baseURL } from '../shared/baseurl';

import { GlobalEventsManager } from "../services/global-events-manager.service";

@Injectable()
export class AuthenticationService {
    public token: string;

    constructor(
        private http: Http
        , private globalEventsManager: GlobalEventsManager) {
        // set token if saved in local storage
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(username: string, password: string): Observable<boolean> {
        return this.http.post(baseURL + '/login', { username: username, password: password })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().token;
                if (token) {
                    this.token = token;
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                    this.globalEventsManager.showNavBar(true);
                    return true;
                } else {
                    return false;
                }
            });
    }

    logout(): void {
        this.token = null;
        localStorage.removeItem('currentUser');
        this.globalEventsManager.showNavBar(false);
    }

    isAuthenticated(): boolean {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        } else {
            return false;
        }
    }
}