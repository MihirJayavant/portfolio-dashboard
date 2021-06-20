import { ICalculator, ICalculatorResult } from './ICalculator'

export interface LumSumCalculatorInput {
  principal: number
  rate: number
  time: number
  startYear?: number
}

export class LumSumCalculator implements ICalculator {
  constructor(private input: LumSumCalculatorInput) {}

  calculate(): ICalculatorResult {
    const { principal, rate, time } = this.input
    const startYear = this.input.startYear ?? new Date().getFullYear()

    const stats = [{ amount: principal, year: startYear }]

    for (let i = 0; i < time; i++) {
      const ans = stats[i].amount * rate * 0.01 + stats[i].amount
      stats.push({ amount: Number(ans.toFixed(2)), year: stats[i].year + 1 })
    }

    const len = stats.length
    const amount = stats[len - 1].amount
    const interest = amount - principal
    const invested = principal

    return {
      amount,
      interest,
      invested,
      stats,
    }
  }
}
