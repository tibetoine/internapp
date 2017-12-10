import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule,MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule, MatRadioModule, MatSidenavModule,MatToolbarModule} from '@angular/material';


@NgModule({
	imports:[
	MatCheckboxModule,
	MatMenuModule,
	MatIconModule,
	MatRadioModule,
	MatSidenavModule,
	MatToolbarModule,
	MatCardModule
	],
	exports:[
	MatButtonModule,
	MatCheckboxModule,
	MatMenuModule,
	MatIconModule,
	MatRadioModule,
	MatSidenavModule,
	MatToolbarModule,
	MatCardModule
	]
})

export class MaterialModule {}