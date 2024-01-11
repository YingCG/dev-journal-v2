import React from 'react'
import CreateForm from './CreateForm'

export default async function CreateJournal() {
  return (
    <main>
        <h2 className='text-primary text-center'>Add a new Journal</h2>
        <CreateForm/>
    </main>
  )
}
