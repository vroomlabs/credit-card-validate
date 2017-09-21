# Credit Card Validations

## Installation and Use

To install:

`npm install pay-me`

Include in file:

`const payMe = require('pay-me')`

Available methods:

`isValidAmericanExpress(ccNumber)`

`isValidMasterCard(ccNumber)`

`isValidDiscover(ccNumber)`

`isValidVisa(ccNumber)`

`isValidDiscover(ccNumber)`

`isLuhnValid(ccNumber) // validates checksum`

`isValidCreditCard(ccNumber) // is amex/mastercard/visa/discover

`isValidCCExpiration(month, year) // month and year are both two character strings`

`isValidSecurityCode(cvc, ccNumber)` // checks length

All return a boolean.
