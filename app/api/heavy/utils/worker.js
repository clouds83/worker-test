const path = require('path')
const fs = require('fs')
const { parentPort } = require('worker_threads')
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL

parentPort.on('message', async (data) => {
  const imageUrl = `${baseUrl}/cse-logo-export-pdf.png`

  const response = await fetch(imageUrl)
  const arrayBuffer = await response.arrayBuffer() // Read image as array buffer
  const base64Image = Buffer.from(arrayBuffer).toString('base64') // Convert to base64

  console.log({ base64Image })

  try {
    const result = heavyFunction(data)
    const base64 = Buffer.from(result).toString('base64')
    parentPort.postMessage({ base64 })
  } catch (error) {
    console.error('Error in worker:', error)
    parentPort.postMessage({ error: 'Error processing data' })
  }
})

function heavyFunction(multiplier) {
  for (let i = 0; i < 1000000000 * multiplier; i++) {}
  return 'Heavy process done!'
}
