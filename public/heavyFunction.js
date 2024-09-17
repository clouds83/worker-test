function heavyFunction(multiplier) {
  for (let i = 0; i < 1000000000 * multiplier; i++) {}
  return 'Heavy process done!'
}

module.exports = heavyFunction
