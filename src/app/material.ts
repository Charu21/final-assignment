import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgModule } from '@angular/core';

@NgModule({
   imports: [MatButtonModule, MatToolbarModule, MatIconModule, MatDividerModule, MatProgressSpinnerModule, MatPaginatorModule, MatCardModule, MatGridListModule, MatListModule, MatExpansionModule],
   exports: [MatButtonModule, MatToolbarModule, MatIconModule, MatDividerModule, MatProgressSpinnerModule, MatPaginatorModule, MatCardModule, MatGridListModule, MatListModule, MatExpansionModule]
})
export class MaterialModule { }