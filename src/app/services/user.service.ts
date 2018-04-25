import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { User } from '../models/index';
import { ApiService } from './api.service';

@Injectable()
export class UserService {

  private currentUserSubject = new BehaviorSubject<User>(new User());
  public currentUser = this.currentUserSubject.asObservable().distinctUntilChanged();

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  private isAuthenticated = this.isAuthenticatedSubject.asObservable();

    constructor(private apiService: ApiService, private http: HttpClient) { }

    setAuth(user: User){
        this.currentUserSubject.next(user);
        this.isAuthenticatedSubject.next(true);
    }

    attemptAuth(type, credentials) : Observable<User> {
        let route = (type == 'login') ? '/login' : '';
        return this.apiService.post('/users' + route, { user: credentials})
            .map( data => {
                this.setAuth(data.user);
                return data;
            });
    }

    getCurrentUser(){
        return this.currentUserSubject.value;
    }

    getAll() {
        return this.http.get<User[]>('/api/users');
    }

    getById(id: number) {
        return this.http.get('/api/users/' + id);
    }

    create(user: User) {
        return this.http.post('/api/users', user);
    }

    update(user: User) {
        return this.http.put('/api/user/' + user.id, user);
    }

    delete(id: number) {
        return this.http.delete('/api/users/' + id);
    }

}
