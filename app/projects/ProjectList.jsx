import React from 'react'
import projects from '../../data/db.json'
import Link from 'next/link';

async function getProjects(){
  await new Promise(resolve => setTimeout(resolve, 1500))

    // const res = await fetch('http://localhost:4000/projects')
    const info = projects.data;
    return info
}

export default async function ProjectList() {

    // fetch data
    const info = await getProjects()

  return (
    <div>
      {info.map((project) => (
        <div key={project.id} className='card my-5'>
          <Link href={`/projects/${project.id}`}>
            <h3>{project.title}</h3>
            <p>{project.description.slice(0,200)}...</p>
            <div className={`pill ${project.priority}`}>{project.priority}</div>
          </Link>
        </div>
      ))}
      {info.length === 0 && (
        <p className='text-center'>There are no open tickets, yay!</p>
      )}
    </div>
  )
}