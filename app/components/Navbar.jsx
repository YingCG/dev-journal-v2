import Link from 'next/link'
import React from 'react'
import Logo from './YingCG.svg'
import Image from 'next/image'
export default function Navbar() {
  return (
    <nav>
          <Link href='/'> <Image src={Logo} alt='Ying Workdesk Logo' width={60} quality={100} /></Link>

     
    <h1>Ying&lsquo;s Dashboard</h1>
    <Link href='/'>Home</Link>
    <Link href='/projects'>Tickets</Link>
  </nav>
  )
}
