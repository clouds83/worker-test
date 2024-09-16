import { NextResponse } from 'next/server'
import { heavyFunction } from './utils/heavyFunction'
const path = require('path')
const { Worker } = require('worker_threads')

export async function POST(req, res) {
  const multiplier = await req.json()

  console.log('start vvvvvvvvvvvvv')

  const result = await workerPromise(multiplier)
  // const result = heavyFunction(multiplier)

  console.log('end ^^^^^^^^^^^^^')

  return NextResponse.json({
    status: 200,
    body: 'Heavy process done!',
  })
}

async function workerPromise(data) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(path.resolve('app/api/heavy/utils/worker.js'))

    worker.postMessage(data)

    worker.on('message', ({ base64, error }) => {
      if (error) {
        console.error('Error from worker:', error)
        reject(new Error('Error generating PDF'))
      } else {
        const pdfBuffer = Buffer.from(base64, 'base64')
        resolve(pdfBuffer)
      }
    })

    worker.on('error', (error) => {
      console.error('Error in worker thread:', error)
      reject(error)
    })

    worker.on('exit', (code) => {
      if (code !== 0) {
        console.error('Worker stopped with exit code', code)
        reject(new Error('Worker stopped with non-zero exit code'))
      }
    })
  })
}
