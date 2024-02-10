const { IPA } = require("../constants.js");

function getRandomIPA() {
  // Get the keys (symbol codes) of the IPA object
  const symbolCodes = Object.keys(IPA);

  // Generate a random index within the range of symbol codes
  const randomIndex = Math.floor(Math.random() * symbolCodes.length);

  // Use the random index to pick a random symbol code
  const randomSymbolCode = symbolCodes[randomIndex];

  // Retrieve the corresponding symbol information using the random symbol code
  const randomSymbolInfo = IPA[randomSymbolCode];

  // Return the random symbol information
  return randomSymbolInfo;
}

module.exports = getRandomIPA;
