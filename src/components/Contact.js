import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in all fields.');
      return;
    }
    
    setStatus('Sending...');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: 'YOUR_ACCESS_KEY_HERE', // Replace with your Web3Forms access key
          ...formData
        })
      });
      const result = await response.json();
      if (result.success) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('An error occurred. Please try again.');
    }
  };

  return (
    <section id="contact" className="px-6 py-12 md:px-12 max-w-2xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center tracking-tight">
        Get In <span className="text-gray-400">Touch</span>
      </h2>
      <form onSubmit={handleSubmit} className="glass-card p-8 flex flex-col gap-4">
        {status && (
          <p className={`text-center text-sm font-semibold ${status.includes('successfully') ? 'text-green-400' : 'text-red-400'}`}>
            {status}
          </p>
        )}
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-gray-300 text-sm">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="bg-[#1a111d] border border-gray-700 rounded-lg p-2 text-white focus:outline-none focus:border-blue-500 transition-colors" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-gray-300 text-sm">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="bg-[#1a111d] border border-gray-700 rounded-lg p-2 text-white focus:outline-none focus:border-blue-500 transition-colors" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-gray-300 text-sm">Message</label>
          <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} className="bg-[#1a111d] border border-gray-700 rounded-lg p-2 text-white focus:outline-none focus:border-blue-500 transition-colors"></textarea>
        </div>
        <button 
          type="submit" 
          disabled={status === 'Sending...'} 
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'Sending...' ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  );
};

export default Contact;