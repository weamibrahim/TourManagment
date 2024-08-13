import { createContext, useState, useContext } from 'react';

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
    const [IsLogin, setIsLogin] = useState(false);
    
    return (
        <LoginContext.Provider value={{ IsLogin, setIsLogin }}>
            {children}
        </LoginContext.Provider>
    );
};

export const useLogin = () => useContext(LoginContext)