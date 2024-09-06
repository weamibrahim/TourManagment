import { createContext,  useContext } from "react";

const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
    const accessToken = JSON.parse(localStorage.getItem('accessToken'));
    return (
        <TokenContext.Provider value={{accessToken}}>
            {children}
        </TokenContext.Provider>
    );
}

export const useToken = () => useContext(TokenContext)