import Link from 'next/link'

export default async function Home() {
  async function heavyProcess() {
    'use server'

    const response = await fetch('http://localhost:3000/api/heavy', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: 5,
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.message)
    }

    const data = await response.json()
  }

  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
        <form action={heavyProcess} className='grid gap-4'>
          <button type='submit'>Start Heavy Process</button>
          <Link href='/other-page'>Other Page</Link>
        </form>
      </main>
    </div>
  )
}
