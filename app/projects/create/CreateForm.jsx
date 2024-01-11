"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import projectsDefault from '../../../data/db.json'


export default function CreateForm() {
    const router = useRouter()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [ priority, setPriority] = useState('low')
    const [isLoading, setIsLoading] = useState(false)
    const [projects, setProjects] = useState(projectsDefault)

    if (typeof sessionStorage !== 'undefined' && !sessionStorage.getItem("projects")){
        let projectsDefault = []
        projectsDefault = JSON.parse(localStorage.getItem('session')) || []

        setProjects(projectsDefault);
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        setIsLoading(true)

        const maxId = projects.data.reduce((acc, value) => {
            if (value.id > acc) {
                return value.id;
            } else {
                return acc;
            }
        }, 0);

        const journal = {
            id: maxId + 1,
            title, description, priority, user_email: 'yingg@whitecliffe.ac.nz'
        }

        const newProjects = {
            data: [
                ...projects.data,
                journal
            ]
        };

        //usual post to server
        // const res = await fetch('http://localhost:4000/tickets', {
        //     method: 'POST',
        //     headers: {"Content-Type": "application/json"},
        //     body: JSON.stringify()
        // })
        // if (projects.status === 201) {
        //     router.refresh()
        //     router.push('/tickets')
        // }
        if (typeof sessionStorage !== 'undefined') {
            console.log(newProjects)
            sessionStorage.setItem('projects', JSON.stringify(newProjects));
          }

        setTitle('');
        setDescription('');
        setPriority('low');
        setIsLoading(false);
    }

  return (
    <form className="w-1/2" onSubmit={handleSubmit}>
    <label>
      <span>Title:</span>
      <input
        required 
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
    </label>
    <label>
      <span>Description:</span>
      <textarea
        required
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
    </label>
    <label>
      <span>Priority:</span>
      <select  onChange={(e) => setPriority(e.target.value)} value={priority}>
        <option value="low">Low Priority</option>
        <option value="medium">Medium Priority</option>
        <option value="high">High Priority</option>
      </select>
    </label>
    <button  className="btn-primary" disabled={isLoading}>
    {isLoading ? <span>Adding...</span> : <span>Add Ticket</span>}

  </button>
  </form>
  )
}
