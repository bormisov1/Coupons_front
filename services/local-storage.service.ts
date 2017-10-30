import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { GlobalEventsManager } from "../services/global-events-manager.service";

@Injectable()
export class LocalStorageService {

    constructor(
        private globalEventsManager: GlobalEventsManager) { }

    get<T>(key: string): T {
        return JSON.parse(localStorage.getItem(key));
    }

    set(key: string, value: any): void {
        return localStorage.setItem(key, JSON.stringify(value));
    }

    pushElToArrayField<T>(arrayKey: string, element: any): void {
        let modifiedArray = this.get<T[]>(arrayKey);
        modifiedArray.push(element);
        return this.set(arrayKey, modifiedArray);
    }

}