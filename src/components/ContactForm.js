import React from "react";

const ContactForm = () => {
  return (
    <form
      action=''
      className='relative p-6 py-10 bg-stone-100 rounded-lg shadow-lg form '>
      <h3 className='text-2xl font-semibold text-stone-600 '>
        Let us call you!
      </h3>
      <p className='text-stone-600'> To help you choose your property</p>
      <div className='flex mt-3 space-x-5'>
        <input
          type='text'
          name=''
          id=''
          placeholder='Your Name'
          className='w-1/2 p-2 border rounded-lg '
        />
        <input
          type='tel'
          name=''
          id=''
          placeholder='Your Number'
          className='w-1/2 p-2 border rounded-lg '
        />
      </div>
      <input
        type='email'
        name=''
        id=''
        placeholder='Your Email'
        className='w-full p-2 mt-3 border rounded-lg '
      />
      <textarea
        name=''
        id=''
        cols='10'
        rows='3'
        placeholder='Tell us about desired property'
        className='w-full p-2 mt-3 border rounded-lg '></textarea>

      <input
        type='submit'
        value='Submit'
        className='w-full p-3 mt-6 font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-500'
      />
    </form>
  );
};

export default ContactForm;
