import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-lum-sum-calculator',
  templateUrl: './lum-sum-calculator.component.html',
  styleUrls: ['./lum-sum-calculator.component.scss'],
})
export class LumSumCalculatorComponent implements OnInit {
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

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    const amounts = [this.principal]
    const years = [new Date().getFullYear()]

    for (let i = 1; i <= this.time; i++) {
      const ans = amounts[i - 1] * this.rate * 0.01 + amounts[i - 1]
      amounts.push(Number(ans.toFixed(2)))
      years.push(years[i - 1] + 1)
    }
    this.compoundingData = {
      labels: years,
      datasets: [
        {
          label: 'Amount',
          borderColor: '#42A5F5',
          data: amounts,
          fill: false,
        },
      ],
    }
  }
}
