import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = React.createContext();

export const AuthContextProvider = (props) => {
    const navigate = useNavigate()
    const [credentials, setCredentials] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });
    const [login, setLogin] = useState(false)

    const handleCredentials = (firstName, lastName, email, password) => {
        setCredentials({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        });
        // console.log('a');
    };

    const handleLogin = (email, password) => {
        if (credentials.email == email && credentials.password == password) {
            setLogin(true)
            navigate('/')
        }
    }

    const handleLogOut = () => {
        setCredentials({
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        })
        setLogin(false)
    }

    return (
        <AuthContext.Provider value={{
            credentials: credentials,
            handleCredentials: handleCredentials,
            handleLogin: handleLogin,
            login: login,
            handleLogOut: handleLogOut
        }}>
            {props.children}
        </AuthContext.Provider >
    )

}
export default AuthContext;