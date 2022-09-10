import sum from '../src/sum'

describe('sum', () => {
  test('1 + 1', () => {
    expect(sum(1, 1)).toBe(2)
  })
  test('2 - 1', () => {
    expect(sum(2, -1)).toBe(1)
  })
})
