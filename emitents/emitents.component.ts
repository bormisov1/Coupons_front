import { Component, OnInit } from '@angular/core';

import { Emitent } from '../shared/emitent';
import { EmitentService } from '../services/emitent.service';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
	selector: 'app-emitents',
	templateUrl: './emitents.component.html',
	styleUrls: ['./emitents.component.scss'],
	providers: [EmitentService, LocalStorageService]
})
export class EmitentsComponent implements OnInit {

	emitents: Emitent[];
	emitentForm: Emitent = new Emitent();

	constructor(
		private emitentService: EmitentService) { }

	getEmitents(): void {
		this.emitents = this.emitentService.getEmitents();
	}

	ngOnInit() {
		this.getEmitents();
	}

}
