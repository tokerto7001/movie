import React from 'react';

const AuthContext = React.createContext();

export const AuthContextProvider = (props) => {



    return (
        <AuthContext.Provider value={{

        }}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthContext;