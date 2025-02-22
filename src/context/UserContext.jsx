import { createContext, useContext, useEffect, useState } from "react";
import api from "../axios";

const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({
        username: "",
        token: localStorage.getItem("token"),
    });

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await api.get("/auth/user");
                setUser(prev => ({
                    ...prev,
                    username: response.data.username,
                }));
            } catch (error) {
                console.error("Ошибка при получении данных пользователя:", error);
            }
        };

        fetchUser();
    }, []); 

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
};

export default function useUser() {
    return useContext(UserContext);
}