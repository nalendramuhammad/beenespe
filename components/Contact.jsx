import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your form submission logic here
    console.log(formData);
  };

  return (
    <div className='max-w-xl mx-auto p-8 bg-white shadow-md rounded-md'>
      <h2 className='text-xl font-semibold mb-6'>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-6'>
          <label htmlFor='name' className='block mb-1 font-medium'>
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='Enter your name'
            className='w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500'
            required
          />
        </div>
        <div className='mb-6'>
          <label htmlFor='email' className='block mb-1 font-medium'>
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Enter your email'
            className='w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500'
            required
          />
        </div>
        <div className='mb-6'>
          <label htmlFor='message' className='block mb-1 font-medium'>
            Message
          </label>
          <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            placeholder='Enter your message'
            className='w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500'
            rows='6'
            required
          ></textarea>
        </div>
        <button
          type='submit'
          className='w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition duration-300'
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
