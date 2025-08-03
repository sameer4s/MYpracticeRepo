import React, { useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
  });

  const validate = () => {
    let valid = true;
    const newErrors = { name: '', email: '', password: '' };

    if (formData.name.length < 5) {
      newErrors.name = 'Name should have at least 5 characters';
      valid = false;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      newErrors.email = 'Invalid email (must include "@" and ".")';
      valid = false;
    }

    if (formData.password.length < 8) {
      newErrors.password = 'Password must have at least 8 characters';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Registration Successful!');
      setFormData({ name: '', email: '', password: '' });
      setErrors({ name: '', email: '', password: '' });
    }
  };

  return (
    <div style={{ margin: '20px' }}>
      <h2>User Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <div style={{ color: 'red' }}>{errors.name}</div>
        </div>
        <br />
        <div>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <div style={{ color: 'red' }}>{errors.email}</div>
        </div>
        <br />
        <div>
          <label>Password:</label><br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <div style={{ color: 'red' }}>{errors.password}</div>
        </div>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
