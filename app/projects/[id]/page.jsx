import React from 'react'
import projects from '../../../data/db.json';
import { notFound } from 'next/navigation';

export const dynamicParams = true

// export async function getStaticParams(){
//     // const res = await fetch('http://localhost:4000/tickets')
//     const tickets = projects.data;
//     // const tickets = sessionStorage.getItem('projects');
//     return tickets.map((ticket) => ({id: ticket.id}))
// }
async function getTicket(id){
    await new Promise(resolve => setTimeout(resolve, 1500))
    const ticket = projects.data.find((ticket) => ticket.id === parseInt(id));
    
    if (!ticket){
        notFound()
    }
    return ticket
}

export default async function ProjectDetails({params}) {
    const ticket = await getTicket(params.id)
  return (
    <main>
        <nav>
            <h2>Project Details {params.id}</h2>
            {ticket ? (
                <div className='card'>
                    <h3>{ticket.title}</h3>
                    <small>Created by {ticket.user_email}</small>
                    <p>{ticket.description}</p>
                    <div className={`pill ${ticket.priority}`}>{ticket.priority}</div>
                </div>
             ) : (
                <p className='text-center'>Ticket not found</p>
             )}
        </nav>
      
    </main>
  )
}
