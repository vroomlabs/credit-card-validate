function isValidAmericanExpress(ccNumber) {
  if (typeof ccNumber !== 'string') {
    return false
  }
  const firstNum = parseInt(ccNumber[0])
  const secondNum = parseInt(ccNumber[1])
  return (ccNumber.length === 15) && (firstNum === 3) && (secondNum === 4 || secondNum === 7) && isLuhnValid(ccNumber)
}

function isValidMasterCard(ccNumber) {
   if (typeof ccNumber !== 'string') {
     return false
   }
  const firstSixDigits = getFirstSixDigits(ccNumber)
  return (ccNumber.length === 16) && (firstSixDigits.inRange(510000, 559999) || firstSixDigits.inRange(222100, 272099)) && isLuhnValid(ccNumber)
}

function isValidDiscover(ccNumber) {
  if (typeof ccNumber !== 'string') {
    return false
  }
  const firstSixDigits = getFirstSixDigits(ccNumber)
  return (
    ccNumber.length === 16 &&
    (firstSixDigits.inRange(601100, 601109) ||
    firstSixDigits.inRange(601120, 601149) ||
    firstSixDigits === 601174 ||
    firstSixDigits.inRange(601177, 601179) ||
    firstSixDigits.inRange(601186, 601199) ||
    firstSixDigits.inRange(644000, 659999)) &&
    isLuhnValid(ccNumber)
  )
}

function isValidVisa(ccNumber) {
   if (typeof ccNumber !== 'string') {
     return false
   }
  return ccNumber.length.inRange(13, 19) && parseInt(ccNumber[0]) === 4 && isLuhnValid(ccNumber)
}

function isValidCreditCard(ccNumber) {
  return (
    isLuhnValid(ccNumber) &&
    (isValidAmericanExpress(ccNumber) ||
    isValidVisa(ccNumber) ||
    isValidMasterCard(ccNumber) ||
    isValidDiscover(ccNumber))
  )
}

// tests for valid credit cards https://en.wikipedia.org/wiki/Luhn_algorithm
function isLuhnValid(ccNumber) {
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

function isValidCCExpiration(month, year) {
  year = parseInt("20" + year)
  month = parseInt(month)
  return isValidMonth(month) && isFutureDate(month, year)
}

function isValidSecurityCode(securityCode, creditCard) {
  if (securityCode != null && isValidAmericanExpress(creditCard)) {
    return securityCode.length === 4
  }
  return securityCode.length === 3
}

// helper methods

function getFirstSixDigits(ccNumber) {
  return parseInt(ccNumber.slice(0, 6))
}

function sumDigits(num) {
  return sumArrayofNums(num.toString().split("").map(Number))
}

// monkey-patch Number class to add inclusive range function
Number.prototype.inRange = function(low, high) {
  return this >= low && this <= high
}

function isValidMonth(month) {
  return month >= 1 && month <= 12
}

function isFutureDate(month, year) {
  const today = new Date()
  const currentYear = today.getFullYear()
  const currentMonth = today.getMonth()
  return (year > currentYear) || (year === currentYear && month >= currentMonth)
}

module.exports = {
  isValidAmericanExpress,
  isValidMasterCard,
  isValidDiscover,
  isValidVisa,
  isValidDiscover,
  isLuhnValid,
  isValidCreditCard,
  isValidCCExpiration,
  isValidSecurityCode
}
