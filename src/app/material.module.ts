import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
    MatButtonModule,
    MatSidenavModule
} from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';



@NgModule({
    imports: [
        MatButtonModule,
        MatSidenavModule
    ],
    exports: [
        MatButtonModule,
        MatSidenavModule,
        MatCheckboxModule
    ]
})

export class MaterialModule {}