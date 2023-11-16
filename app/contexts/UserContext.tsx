'use client';
import { createContext, ReactNode, useContext, useState } from "react";

interface UserContextProps {
    username: string | null; 
    email: string | null ;
    image: string | null ;
    login: (userData: UserData) => void ;
    logout: () => void;
}

interface UserData {
    username: string;
    email: string;
    image: string;
}

const userContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{children: ReactNode}> = ({ children }) => {
    const [user, setUser] = useState<UserContextProps>({
        username: null,
        email: null,
        image: null,
        login: (userData: UserData) => {
            setUser((prevUser) => ({ ...prevUser, ...userData }));
        },
        logout: () => {
            setUser({
                username: null,
                email: null,
                image: null,
                login: () => {},
                logout: () => {},
            })
        }
    })

    return <userContext.Provider value={user}>{children}</userContext.Provider>;

}

export const useUser = () => {
    const context = useContext(userContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
}