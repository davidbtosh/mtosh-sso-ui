import { NgModule } from '@angular/core';
import { MatButtonModule, MatMenuModule, MatCardModule, MatFormFieldModule, MatProgressBarModule,
         MatInputModule, MatPaginatorModule, MatSortModule, MatSnackBarModule, MatDialogModule, 
         MatTooltipModule } from '@angular/material';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDatepickerModule} from '@angular/material/datepicker';
//import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import {MatCheckboxModule} from '@angular/material/checkbox';



@NgModule({
    imports: [
        MatButtonModule, 
        MatCheckboxModule, 
        MatToolbarModule, 
        MatIconModule,
        MatSidenavModule,
        MatTabsModule,
        MatMenuModule,
        MatListModule,
        MatCardModule,
        MatFormFieldModule, 
        MatInputModule,
        MatPaginatorModule,
        MatTableModule,
        MatDatepickerModule,
        //MatMomentDateModule,
        MatSortModule,
        MatExpansionModule,
        MatGridListModule,
        MatSelectModule,
        MatChipsModule,
        MatProgressBarModule,
        MatSnackBarModule,
        MatDialogModule,
        MatTooltipModule
    ],
    exports: [
        MatButtonModule, 
        MatCheckboxModule, 
        MatToolbarModule, 
        MatIconModule,
        MatSidenavModule,
        MatTabsModule,
        MatMenuModule,
        MatListModule,
        MatCardModule,
        MatFormFieldModule, 
        MatInputModule,
        MatPaginatorModule,
        MatTableModule,
        MatDatepickerModule,
        //MatMomentDateModule,
        MatSortModule,
        MatExpansionModule,
        MatGridListModule,
        MatSelectModule,
        MatChipsModule,
        MatProgressBarModule,
        MatSnackBarModule,
        MatDialogModule,
        MatTooltipModule
    ]
})
export class MaterialModule { }