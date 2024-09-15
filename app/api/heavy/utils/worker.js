const path = require('path')
const { parentPort } = require('worker_threads')
const heavyFunctionPath = path.resolve(__dirname, 'heavyFunction.js')
const { heavyFunction } = require(heavyFunctionPath)

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
