import Link from 'next/link'

export default async function Home() {
  async function heavyProcess() {
    'use server'
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL

    fetch(`${baseUrl}/api/heavy`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: 2,
    })
      .then((res) => res.json())
      .then((data) => {
        console.info(data)
      })

    // if (!response.ok) {
    //   const errorData = await response.json()
    //   throw new Error(errorData.message)
    // }

    // const data = await response.json()

    // console.log(data)
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
