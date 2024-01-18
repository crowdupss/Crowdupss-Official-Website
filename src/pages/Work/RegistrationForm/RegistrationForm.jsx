// RegistrationForm.js
import React, { useState } from 'react';

const RegistrationForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const [registrationStatus, setRegistrationStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simulated API call to register the user
    try {
      const response = await simulateApiCall(formData);

      if (response.success) {
        setRegistrationStatus('success');
      } else {
        setRegistrationStatus('error');
      }
    } catch (error) {
      console.error('Error submitting registration:', error);
      setRegistrationStatus('error');
    }
  };

  const simulateApiCall = (data) => {
    // Simulated API call. Replace this with actual API call.
    return new Promise((resolve, reject) => {
      // Simulating a successful response after 1 second
      setTimeout(() => {
        const success = Math.random() > 0.5; // Simulate success/error randomly
        if (success) {
          resolve({ success: true });
        } else {
          reject(new Error('Registration failed'));
        }
      }, 1000);
    });
  };

  return (
    <div className="bg-white p-4 rounded shadow-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <h2 className="text-xl font-bold mb-4">Event Registration</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mb-2 p-2 border border-gray-300 rounded-md w-full"
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mb-2 p-2 border border-gray-300 rounded-md w-full"
        />

        {/* Add more form fields as needed */}

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Register
        </button>
        <button type="button" onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded ml-2">
          Cancel
        </button>
      </form>

      {/* Display success or error message */}
      {registrationStatus === 'success' && (
        <p className="text-green-500 mt-2">Registration successful! You can close this form.</p>
      )}
      {registrationStatus === 'error' && <p className="text-red-500 mt-2">Registration failed. Please try again.</p>}
    </div>
  );
};

export default RegistrationForm;
