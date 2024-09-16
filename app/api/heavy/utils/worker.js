const path = require('path')
const { parentPort } = require('worker_threads')
// const heavyFunctionPath = path.resolve(__dirname, 'heavyFunction.js')
// const { heavyFunction } = require(heavyFunctionPath)
// const { heavyFunction } = require(path.resolve('./heavyFunction'))
const { heavyFunction } = require(path.resolve('public/heavyFunction'))

parentPort.on('message', async (data) => {
  try {
    const result = heavyFunction(data)
    const base64 = Buffer.from(result).toString('base64')
    parentPort.postMessage({ base64 })
  } catch (error) {
    console.error('Error in worker:', error)
    parentPort.postMessage({ error: 'Error processing data' })
  }
})

// function heavyFunction(multiplier) {
//   for (let i = 0; i < 1000000000 * multiplier; i++) {}
//   return 'Heavy process done!'
// }
