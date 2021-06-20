export interface ICalculatorResult {
  amount: number
  interest: number
  invested: number
  stats: { year: number; amount: number }[]
}

export interface ICalculator {
  calculate: () => ICalculatorResult
}
