import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { ChartModule } from 'primeng/chart'
import { ButtonModule } from 'primeng/button'
import { InputTextModule } from 'primeng/inputtext'
import { LumSumCalculatorComponent } from './lum-sum-calculator/lum-sum-calculator.component'
import { SIPCalculatorComponent } from './sipcalculator/sipcalculator.component'
import { PolicyCalculatorComponent } from './policy-calculator/policy-calculator.component'
import { SelectButtonModule } from 'primeng/selectbutton'

@NgModule({
  declarations: [LumSumCalculatorComponent, SIPCalculatorComponent, PolicyCalculatorComponent],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    ChartModule,
    SelectButtonModule,
    RouterModule.forChild([
      { path: 'lumsum-calculator', component: LumSumCalculatorComponent },
      { path: 'sip-calculator', component: SIPCalculatorComponent },
      { path: 'policy-calculator', component: PolicyCalculatorComponent },
      { path: '', pathMatch: 'full', redirectTo: 'lumsum-calculator' },
    ]),
  ],
})
export class CalculatorsModule {}
