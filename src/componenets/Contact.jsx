import React from 'react'



const Contact = () => {
  return (
    <div className='bg-black text-white py-6' id="contact">
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>Contact </h2>
        <div className='flex flex-col md:flex-row items-center md:space-x-10'>
             <div className='flex-1'>
                <h3>Let's talk</h3>
                <p>I am open to discussing about web development Project...</p>
                 <div className='mb-4 mt-8'>
                    <div className='inline-block text-green-500 mr-2'></div>
                    <a href="mailto:ezhumalaimurugavel@gmail.com" className='hover:underline'><span className='text-green-400'>Mail-to---</span>  ezhumalaimurugavel@gmail.com</a>
                </div>
                 <div className='mb-4 mt-8'>
                    <div className='inline-block text-green-500 mr-2'></div>
                    <span> <span className='text-green-400'>Phone to---</span>+9025336409</span>
                   
                </div>
                <div className='mb-4 mt-8'>
                    <div className='inline-block text-green-500 mr-2'></div>
                    <span><span className='text-green-400'>Adress---</span>Thirupeyar,Kallakurichi Districts</span>
                </div>  
            </div> 
            <div className='flex-1 w-full'></div>
        </div>
     </div>
    </div>
  )
}

export default Contact

