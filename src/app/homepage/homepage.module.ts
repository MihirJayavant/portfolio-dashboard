import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { HomepageComponent } from './homepage.component'
import { ButtonModule } from 'primeng/button'

@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    ButtonModule,
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: HomepageComponent }]),
  ],
})
export class HomepageModule {}
