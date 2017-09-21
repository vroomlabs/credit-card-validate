export function isValidAmericanExpress(ccNumber) {
  if (typeof ccNumber !== 'string') {
    return false
  }
  const firstNum = parseInt(ccNumber[0])
  const secondNum = parseInt(ccNumber[1])
  return (ccNumber.length === 15) && (firstNum === 3) && (secondNum === 4 || secondNum === 7)
}

export function isValidMasterCard(ccNumber) {
  const firstSixDigits = getFirstSixDigits(ccNumber)
  return (ccNumber.length === 16) && (firstSixDigits.inRange(510000, 559999) || firstSixDigits.inRange(222100, 272099))
}

export function isValidDiscover(ccNumber) {
  const firstSixDigits = getFirstSixDigits(ccNumber)
  return (
    ccNumber.length === 16 &&
    (firstSixDigits.inRange(601100, 601109) ||
    firstSixDigits.inRange(601120, 601149) ||
    firstSixDigits === 601174 ||
    firstSixDigits.inRange(601177, 601179) ||
    firstSixDigits.inRange(601186, 601199) ||
    firstSixDigits.inRange(644000, 659999))
  )
}

export function isValidVisa(ccNumber) {
  return ccNumber.length.inRange(13, 19) && parseInt(ccNumber[0]) === 4
}

export function isValidCreditCard(ccNumber) {
  return (
    isLuhnValid(ccNumber) &&
    (isValidAmericanExpress(ccNumber) ||
    isValidVisa(ccNumber) ||
    isValidMasterCard(ccNumber) ||
    isValidDiscover(ccNumber))
  )
}

// tests for valid credit cards https://en.wikipedia.org/wiki/Luhn_algorithm
export function isLuhnValid(ccNumber) {
  if (typeof ccNumber !== 'string') {
    return false
  }
  const doubledFromLastArr = ccNumber.split("").reverse().map((char, idx) => {
    let newEl = parseInt(char)
    if (idx % 2 !== 0) {
      newEl = newEl * 2
    }
    if (newEl >= 10) {
      newEl = sumDigits(newEl)
    }
    return newEl
  })
  const luhnNumber = sumArrayofNums(doubledFromLastArr)
  return luhnNumber % 10 === 0
}

export function isValidCCExpiration(month, year) {
  year = parseInt("20" + year)
  month = parseInt(month)
  return isValidMonth(month) && isFutureDate(month, year)
}

export function isValidSecurityCode(securityCode, creditCard) {
  if (securityCode != null && isValidAmericanExpress(creditCard)) {
    return securityCode.length === 4
  }
  return securityCode.length === 3
}
