import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

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
		private emitentService: EmitentService
		, public dialog: MatDialog
	) { }

	ngOnInit() {
		this.getEmitents();
	}

	getEmitents(): void {
		this.emitents = this.emitentService.getEmitents();
	}

	askKeyName(): void {
	    let dialogRef = this.dialog.open(KeyNameDialog, {
			width: '250px'
			//, data: { name: this.name, animal: this.animal }
	    });

	    dialogRef.afterClosed().subscribe(keyName => {
			this.emitentService.generateKey(keyName);
	    });
	}

}

@Component({
	selector: 'key-name-dialog',
	templateUrl: 'key-name-dialog.html',
})
export class KeyNameDialog {

	name: string;

	constructor(
		public dialogRef: MatDialogRef<KeyNameDialog>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) { }

	onNoClick(): void {
		this.dialogRef.close();
	}

}