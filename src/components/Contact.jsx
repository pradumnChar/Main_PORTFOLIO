import React from 'react'

function Contact() {
  return (
    
    <div name="contact" 
    
    className='w-full h-screen  flex justify-center items-center p-4'>
    <form method='POST' action="https://getform.io/f/jbwlxoma" className='flex flex-col max-w-[670px] w-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-[#444cf7] '>Contact</p>
         <br />
         <br />
        </div>
       
        <input className="p-2  w-[350px] " 
       
        type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2  w-[350px] ' type="email" placeholder='Email' name='email' />
        <textarea className='p-2  w-[360px]' name="message" rows="7" placeholder='Message'></textarea>
     
        <button className= 'bg-[#e5e5f7] text-[#444cf7] border-2  border-black rounded-xl  hover:bg-white px-4 my-1 ml-[1px] py-3 mx-auto flex items-center'>Connect With Me</button>
    </form>
</div>

  )
}



export default Contact
