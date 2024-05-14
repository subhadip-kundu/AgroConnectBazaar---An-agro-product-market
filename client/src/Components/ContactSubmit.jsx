import React from 'react';
import submit from "../assets/ContactSubmitted.png"

function ContactSubmit() {
  return (
    <div className='w-full flex items-center justify-center h-[85vh]'>
      <img className='max-w-screen-lg' src={submit} alt="Submit image" />
    </div>
  )
}

export default ContactSubmit;