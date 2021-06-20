import { Component, OnInit } from '@angular/core'
import { ICalculator, SIPCalculator } from 'src/core/calculators'

@Component({
  selector: 'app-sipcalculator',
  templateUrl: './sipcalculator.component.html',
  styleUrls: ['./sipcalculator.component.scss'],
})
export class SIPCalculatorComponent {
  principal = 1000
  time = 10
  rate = 12
  frequency = 'monthly'
  compoundingData = {
    labels: [2020],
    datasets: [
      {
        label: 'Amount',
        borderColor: '#42A5F5',
        data: [100],
        fill: false,
      },
    ],
  }

  onClick() {
    const calculator: ICalculator = new SIPCalculator({
      principal: this.principal,
      rate: this.rate,
      time: this.time,
      frequency: 'monthly',
    })

    const result = calculator.calculate()

    this.compoundingData = {
      labels: result.stats.map(p => p.year),
      datasets: [
        {
          label: 'Amount',
          borderColor: '#42A5F5',
          data: result.stats.map(p => p.amount),
          fill: false,
        },
      ],
    }
  }
}
