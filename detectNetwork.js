// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.

  var start = cardNumber.substring(0,2);

  if((start === '38' || start === '39') && cardNumber.length === 14)
  {
  	return 'Diner\'s Club';
  }
  if((start === '34' || start === '37') && cardNumber.length === 15)
  {
  	return 'American Express';
  }
  if((cardNumber.substring(0,4) === '4903' || cardNumber.substring(0,4) === '4905' || cardNumber.substring(0,4) === '4911' || cardNumber.substring(0,4) === '4936' || cardNumber.substring(0,4) === '6333' || cardNumber.substring(0,4) === '6759' || cardNumber.substring(0,6) === '564182' || cardNumber.substring(0,6) === '633110') && (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19))
  {
    return 'Switch';
  }
  if(cardNumber[0] === '4' && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19))
  {
  	return 'Visa';
  }
  if((start === '51' || start === '52' || start === '53' || start === '54' || start === '55') && cardNumber.length === 16)
  {
  	return 'MasterCard';
  }

  start = cardNumber.substring(0,3);
  if((cardNumber.substring(0,4) === '6011' || start === '644' || start === '645' || start === '646' || start === '647' || start === '648' || start === '649' || cardNumber.substring(0,2) == '65') && (cardNumber.length === 16 || cardNumber.length === 19))
  {
  	return 'Discover';
  }

  start = cardNumber.substring(0,4);
  if((start === '5018' || start === '5020' || start === '5038' || start === '6304') && cardNumber.length >= 12 && cardNumber.length <= 19)
  {
  	return 'Maestro';
  }

  start = parseInt(cardNumber.substring(0,6));
  var prefCheck = 622126;
  while(prefCheck < 622926)
  {
    if(start === prefCheck && (cardNumber.length >= 16 && cardNumber.length <= 19))
    {
      return 'China UnionPay';
    }

    prefCheck++;
  }

  start = parseInt(cardNumber.substring(0,3));
  var prefCheck = 624;
  while(prefCheck < 627)
  {
    if(start === prefCheck && (cardNumber.length >= 16 && cardNumber.length <= 19))
    {
      return 'China UnionPay';
    }

    prefCheck++;
  }

  start = parseInt(cardNumber.substring(0,4));
  var prefCheck = 6282;
  while(prefCheck < 6289)
  {
    if(start === prefCheck && (cardNumber.length >= 16 && cardNumber.length <= 19))
    {
      return 'China UnionPay';
    }

    prefCheck++;
  }

  return 'error';
};


