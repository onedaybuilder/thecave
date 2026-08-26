'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append('access_key', 'YOUR_ACCESS_KEY_HERE');

    const response = await fetch('https://web3forms.com', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setStatus('Email sent successfully!');
      e.currentTarget.reset();
    } else {
      setStatus('Something went wrong. Please try again.');
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
      <p className='font-cormorant text-2xl'>Become a member to enjoy exclusive deals.</p>
      <input type="email" name="email" placeholder="Your Email" required className='border-b-1 border-black pl-0 py-2'/>
      <button className="bg-[#14185C] text-white py-2 px-4">Join the heritage</button>
      <p>{status}</p>
    </form>
  );
}
