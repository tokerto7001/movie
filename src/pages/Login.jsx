import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';

export default function Login() {

    const navigate = useNavigate();
    const { handleLogin } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alertClass, setAlertClass] = useState('alert alert-danger d-none')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password) {
            handleLogin(email, password)
        } else {
            setAlertClass('alert alert-danger')
        }
    }
    return (
        <div className='login'>
            <div>
                <img src='https://picsum.photos/800/800' alt='photo' />
            </div>
            <div className='login-form'>
                <div className={alertClass} role="alert">
                    Please fill in the blanks!!!
                </div>
                <h1 className='form-title display-3'>Login</h1>
                <form id='login' onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <label for='email' className='form-label display-4'>
                            Email
                        </label>
                        <input
                            type='email'
                            className='form-control'
                            id='email'
                            placeholder='Enter your email adress...'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>
                    <div className='mt-3'>
                        <label for='password' className='form-label display-4'>
                            Password
                        </label>
                        <input
                            type='password'
                            className='form-control'
                            id='password'
                            placeholder='Enter your password...'
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    </div>
                    <input
                        type='submit'
                        className='btn btn-primary form-control'
                        value='Login'
                    />
                </form>
            </div>
        </div>
    );
}
