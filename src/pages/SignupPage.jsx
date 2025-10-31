import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignupPage.css';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('business');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    // Placeholder for signup logic
    console.log('Signup attempt with:', { name, email, password, userType });
    // TODO: Add Firebase signup logic here
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-header">
          <h1>Create Your Account</h1>
          <p>Join SmartLogix Today</p>
        </div>
        <form onSubmit={handleSignup} className="signup-form">
          {error && <p className="error-message">{error}</p>}
          <div className="input-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>I am a:</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  value="business"
                  checked={userType === 'business'}
                  onChange={(e) => setUserType(e.target.value)}
                />
                Business
              </label>
              <label>
                <input
                  type="radio"
                  value="trucker"
                  checked={userType === 'trucker'}
                  onChange={(e) => setUserType(e.target.value)}
                />
                Trucker
              </label>
            </div>
          </div>
          <button type="submit" className="btn-signup">Create Account</button>
        </form>
        <div className="login-link">
          <p>Already have an account? <Link to="/login">Log In</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
