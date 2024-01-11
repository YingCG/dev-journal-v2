import React, { Suspense } from 'react'
import ProjectList from './ProjectList'
import Loading from '../loading'

export default function Projects() {
  return (
    <main>
      <nav>
        <div>
          <h2>Projects Roadmap</h2>
          <p>As a developer, I am constantly learning and exploring the possibilities to approach problems. As a start, I will first using this Projects Roadmap to create and show the projects I have developed... Eventually I will tell you the full stories. Write down how and why I solved coding problems, and reveal hurdles in my workflow.</p>
          <Suspense fallback={<Loading/>}>
            <ProjectList/>
          </Suspense>
        </div>
      </nav>
    </main>
  )
}
