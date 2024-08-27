import { createContext, useState, useContext, useEffect } from 'react';

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
    const [IsLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    const userData = JSON.parse(localStorage.getItem('user'));
    if (accessToken && userData) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);
    
    return (
        <LoginContext.Provider value={{ IsLogin, setIsLogin }}>
            {children}
        </LoginContext.Provider>
    );
};

export const useLogin = () => useContext(LoginContext)