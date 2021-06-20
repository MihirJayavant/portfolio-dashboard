import { ICalculator, ICalculatorResult } from './ICalculator'

export interface SIPCalculatorInput {
  principal: number
  rate: number
  time: number
  startYear?: number
  frequency: 'monthly' | 'yearly'
}

export class SIPCalculator implements ICalculator {
  constructor(private input: SIPCalculatorInput) {}

  calculate(): ICalculatorResult {
    const { principal, rate, time, frequency } = this.input
    const startYear = this.input.startYear ?? new Date().getFullYear()
    const i = frequency === 'monthly' ? rate * 0.01 * 0.12 : rate * 0
    const n = frequency === 'monthly' ? time * 12 : time
    const fv = frequency === 'monthly' ? principal * 12 : principal

    const stats = [{ amount: fv, year: startYear }]

    for (let t = 0; t < time; t++) {
      const ans = principal * ((Math.pow(1 + i, n) - 1) / i) * (i + 1)
      stats.push({ amount: Number(ans.toFixed(2)), year: stats[t].year + 1 })
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
