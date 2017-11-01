import { Injectable } from '@angular/core';

import { Emitent } from '../shared/emitent';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable()
export class EmitentService {
	constructor(			
		private localStorageService: LocalStorageService			
	) { }	

	getEmitents(): Emitent[] {
		return this.localStorageService.get<Emitent[]>('emitents');
	}

	addEmitent(emitent: Emitent): void {
		return this.localStorageService.pushElToArrayField('emitents', emitent);
	}

	generateKey(name: string): void {
		console.log("Generating key with name " + name);
		// generate...
		// addEmitent(...);
	}
}