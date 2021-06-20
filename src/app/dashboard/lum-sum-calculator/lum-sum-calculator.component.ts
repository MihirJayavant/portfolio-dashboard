import { Component, OnInit } from '@angular/core'
import { ICalculator, LumSumCalculator } from 'src/core/calculators'

@Component({
  selector: 'app-lum-sum-calculator',
  templateUrl: './lum-sum-calculator.component.html',
  styleUrls: ['./lum-sum-calculator.component.scss'],
})
export class LumSumCalculatorComponent {
  principal = 1000
  time = 10
  rate = 12
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
    const calculator: ICalculator = new LumSumCalculator({
      principal: this.principal,
      rate: this.rate,
      time: this.time,
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
