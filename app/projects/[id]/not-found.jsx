import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <main className='text-center'>
      <h2 className='text-3xl'>We Hit a Brick Wall!</h2>
      <p>We don&apos;t have this page yet</p>
      <p>Back to the <Link href='/'>Dashboard</Link></p>
    </main>
  )
}
