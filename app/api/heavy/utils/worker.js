const path = require('path')
const fs = require('fs')
const { parentPort } = require('worker_threads')
// const heavyFunctionPath = path.join(process.cwd(), 'app/api/heavy/utils/heavyFunction.js')
// const { heavyFunction } = require(heavyFunctionPath)
// const { heavyFunction } = require(path.resolve('./heavyFunction'))
// const { heavyFunction } = require(path.join(process.cwd(), 'app/api/heavy/utils/heavyFunction'))
// const { heavyFunction } = require(path.resolve('app/api/heavy/utils/heavyFunction'))
// const heavyFunctionCode = fs.readFileSync(heavyFunctionPath, 'utf-8')
// const heavyFunction = new Function('return ' + heavyFunctionCode)()

// const { heavyFunction } = require('./heavyFunction.js')
// const { heavyFunction } = require(path.resolve('./heavyFunction.js'))
// const { heavyFunction } = require(path.join(process.cwd(), '../../app/api/heavy/utils/heavyFunction.js'))
// const { heavyFunction } = require(path.resolve('app/api/heavy/utils/heavyFunction.js'))
// const heavyFunction = require(path.join(process.cwd(), 'app/api/heavy/utils/heavyFunction.js'))

// const heavyFunction = require('heavyFunction.js')
const heavyFunction = require(path.join(process.cwd(), './heavyFunction.js'))

parentPort.on('message', async (data) => {
  try {
    // console.log('heavyFunction', path.join(process.cwd(), 'app/api/heavy/utils/heavyFunction.js'))
    // const heavyFunction = await require(path.join(process.cwd(), 'app/api/heavy/utils/heavyFunction.js'))

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
