'use client'

import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24'>
      <div className="relative flex flex-col place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        Email SENT successfully
      </div>
      <button
        className='mt-4 bg-blue-600 hover:bg-blue-400 transition-all text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-200'
        onClick={() => router.push('/')}
      >
        Return
      </button>
    </main>
  )
}
