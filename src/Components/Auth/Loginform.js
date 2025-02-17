// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { useAuth } from '../../Hooks/UseAuth';

// // import { login as loginService } from '../../Services/Auth.service';


// // import { login } from '../../Services/Auth.service';
// // import InputField from '../common/InputFeild';
// // import Button from '../common/Button';

// // const LoginForm = () => {
// //   const [identifier, setIdentifier] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [error, setError] = useState('');
// //   const navigate = useNavigate();
// //   const { setUser } = useAuth();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const data = await login(identifier, password);
// //       setUser(data.user);
// //       if (!data.user.name || !data.user.isEmailVerified) {
// //         navigate('/account/complete-profile');
// //       } else {
// //         navigate('/');
// //       }
// //     } catch (error) {
// //       setError(error.response?.data?.message || 'An error occurred');
// //     }
// //   };

// //   return (
// //     <div className="auth-form-container">
// //       <h2 className="auth-title">Sign In</h2>
// //       {error && <div className="error-message">{error}</div>}
// //       <form onSubmit={handleSubmit} className="auth-form">
// //         <InputField
// //           label="Email or Phone Number"
// //           type="text"
// //           value={identifier}
// //           onChange={(e) => setIdentifier(e.target.value)}
// //           required
// //         />
// //         <InputField
// //           label="Password"
// //           type="password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //           required
// //         />
// //         <Button type="submit" className="submit-button">
// //           Sign In
// //         </Button>
// //       </form>
// //       <div className="auth-links">
// //         <a href="/forgot-password" className="forgot-password-link">
// //           Forgot Password?
// //         </a>
// //       </div>
// //     </div>
// //   );
// // };

// // export default LoginForm;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../../Context/AuthContext'; // Updated path
// import { login } from '../../Services/Auth.service';
// import InputField from '../common/InputFeild'; // Updated import
// import Button from '../common/Button';

// const LoginForm = () => {
//   const [identifier, setIdentifier] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();
//   const { setUser } = useAuth();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);

//     try {
//       const data = await login(identifier, password);
//       setUser(data.user);
      
//       if (!data.user.name || !data.user.isEmailVerified) {
//         navigate('/complete-profile'); // Updated path
//       } else {
//         navigate('/checkout/shipping');
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//       setError(error.response?.data?.message || 'Invalid credentials');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="auth-form-container">
//       <h2 className="auth-title">Sign In</h2>
//       {error && <div className="error-message">{error}</div>}
      
//       <form onSubmit={handleSubmit} className="auth-form">
//         <InputField
//           label="Email or Phone Number"
//           type="text"
//           value={identifier}
//           onChange={(e) => setIdentifier(e.target.value)}
//           required
//         />
//         <InputField
//           label="Password"
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <Button
//           type="submit"
//           className="submit-button"
//           disabled={loading}
//         >
//           {loading ? 'Signing in...' : 'Sign In'}
//         </Button>
//       </form>
      
//       <div className="auth-links">
//         <a href="/forgot-password" className="forgot-password-link">
//           Forgot Password?
//         </a>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;


import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Added useLocation
import { useAuth } from '../../Context/AuthContext';
import { login } from '../../Services/Auth.service';
import InputField from '../common/InputFeild';
import Button from '../common/Button';

const LoginForm = () => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Add this to handle redirects
  const { setUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const data = await login(identifier, password);
      
      // Store token first
      if (data.token) {
        localStorage.setItem('token', data.token);
      }

      // Store user data with proper structure
      const userData = {
        _id: data.user._id || data.user.id,
        name: data.user.name,
        email: data.user.email,
        phoneNumber: data.user.phoneNumber,
        isEmailVerified: data.user.isEmailVerified
      };

      // Update context and localStorage
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));

      console.log('Login successful:', {
        userData,
        token: data.token ? 'Token present' : 'No token'
      });
      
      if (!data.user.name || !data.user.isEmailVerified) {
        navigate('/complete-profile');
      } else {
        // Check for returnTo path from shipping page
        const returnTo = location.state?.returnTo;
        if (returnTo) {
          navigate(returnTo, { state: location.state?.orderData });
        } else {
          navigate('/checkout/shipping');
        }
      }
    } catch (error) {
      console.error('Login error:', error);
      setError(error.response?.data?.message || 'Invalid credentials');
      // Clear any partial data on error
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-form-container">
      <h2 className="auth-title">Sign In</h2>
      {error && <div className="error-message">{error}</div>}
      
      <form onSubmit={handleSubmit} className="auth-form">
        <InputField
          label="Email or Phone Number"
          type="text"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          required
        />
        <InputField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button
          type="submit"
          className="submit-button"
          disabled={loading}
        >
          {loading ? 'Signing in...' : 'Sign In'}
        </Button>
      </form>
      
      <div className="auth-links">
        <a href="/forgot-password" className="forgot-password-link">
          Forgot Password?
        </a>
      </div>
    </div>
  );
};

export default LoginForm;