'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { sendEmail } from './_actions/actions'

export default function Home() {
  const [error, action] = useFormState(sendEmail, null)

  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24'>
      <form
        action={action}
        className="relative flex flex-col place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]"
      >
        <label className='z-[1] flex flex-col mb-4'>
          To:
          <input
            className='border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-200 w-96 text-blue-950'
            type='email'
            name='to'
          />
        </label>
        <label className='z-[1] flex flex-col mb-4'>
          Subject:
          <input
            className='border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-200 w-96 text-blue-950'
            type='text'
            name='subject'
          />
        </label>
        <label className='z-[1] flex flex-col mb-4'>
          Message:
          <textarea
            className='border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-200 w-96 text-blue-950'
            rows={4}
            placeholder='Enter your message here...'
            name='body'
          />
        </label>
        <SubmitButton />
      </form>
    </main>
  )
}

const SubmitButton = () => {
  const { pending } = useFormStatus()

  return (
    <button
      disabled={pending}
      className='bg-blue-900 hover:bg-blue-600 transition-all text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-200'
      type='submit'
    >
      {pending ? 'Sending...' : 'Send'}
    </button>
  )
}
