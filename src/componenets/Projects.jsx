import React from 'react'
const projects =[
    {
        id:1,
        name:"QrCode Generator",
        technologies:"javascript",
        github:"Git Hub",
    }
];


const Projects = () => {
  return (
    <div className='bg-black text-white py-20' id='project'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
         {projects.map(project => (
           <>
            <div key={project.id} className='bg-gray-500 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
            
                <h3 className='text-2xl font-bold mb-2'>{project.name}</h3>
                <p className='text-white mb-4'>{project.technologies}</p>
               <a href="https://github.com/ezhumalai-murugavel/qrgenerator" className='bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full px-4 py-2'>{project.github}</a>
            </div>

           </>
         ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
