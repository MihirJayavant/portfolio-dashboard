import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DashboardComponent } from './dashboard.component'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { ChartModule } from 'primeng/chart'
import { ButtonModule } from 'primeng/button'
import { InputTextModule } from 'primeng/inputtext'

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    ChartModule,
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: DashboardComponent }]),
  ],
})
export class DashboardModule {}
