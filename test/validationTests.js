describe('isValidLuhn', () => {
  test('passes Luhn Algorithm', () => {
    expect(isLuhnValid("4600555190928423")).toBe(true)
    expect(isLuhnValid("375707820344890")).toBe(true)
    expect(isLuhnValid("5461195049578072")).toBe(true)
    expect(isLuhnValid("5349537429907603")).toBe(true)
  })
  test('fails Luhn Algorithm', () => {
    expect(isLuhnValid("8273123273510569")).toBe(false)
  })
})

describe('isValidAmericanExpress', () => {
  test('passes when valid', () => {
    expect(isValidAmericanExpress("379333320073511")).toBe(true)
    expect(isValidAmericanExpress("370178966972719")).toBe(true)
    expect(isValidAmericanExpress("344646316364731")).toBe(true)
    expect(isValidAmericanExpress("379337858102659")).toBe(true)
  })
  test('fails when invalid', () => {
    expect(isValidAmericanExpress("389337858102659")).toBe(false)
    expect(isValidAmericanExpress("479337858102659")).toBe(false)
  })
})

describe('isValidMasterCard', () => {
  test('passes when valid', () => {
    expect(isValidMasterCard("5367523834489004")).toBe(true)
    expect(isValidMasterCard("5288673058769700")).toBe(true)
    expect(isValidMasterCard("5445987858624091")).toBe(true)
    expect(isValidMasterCard("5308785046077073")).toBe(true)
    expect(isValidMasterCard("2308785046077073")).toBe(true)
  })
  test('fails when invalid', () => {
    expect(isValidMasterCard("4308785046077073")).toBe(false)
    expect(isValidMasterCard("5608785046077073")).toBe(false)
    expect(isValidMasterCard("2808785046077073")).toBe(false)
  })
})

describe('isValidDiscover', () => {
  test('passes when valid', () => {
    expect(isValidDiscover("6011052830172156")).toBe(true)
    expect(isValidDiscover("6011772830172156")).toBe(true)
    expect(isValidDiscover("6440173058769700")).toBe(true)
  })
  test('fails when invalid', () => {
    expect(isValidDiscover("6011153058769700")).toBe(false)
    expect(isValidDiscover("6111153058769700")).toBe(false)
  })
})

describe('isValidVisa', () => {
  test('passes when valid', () => {
    expect(isValidVisa("4539843658349795")).toBe(true)
    expect(isValidVisa("4686555463101531")).toBe(true)
  })
  test('fails when invalid', () => {
    expect(isValidVisa("5686555463101531")).toBe(false)
  })
})
