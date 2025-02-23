import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import api from "../axios";

const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(() => ({
        username: "",
        prefix: "",
        level: 0,
        height: 0,
        weight: 0,
        age: 0,
        sex: "",
        token: localStorage.getItem("token") || null,
    }));

    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem("token");

            if (!token) {
                setIsLoading(false);
                return;
            }

            try {
                const userResponse = await api.get("/user/me");
                let profileData = {
                    prefix: "",
                    level: 0,
                    height: 0,
                    weight: 0,
                    age: 0,
                    sex: "",
                };

                try {
                    const profileResponse = await api.get("/profile/get");
                    profileData = profileResponse.data;
                } catch (profileError) {
                    console.error("Ошибка при получении профиля:", profileError);
                    if (profileError.response?.status === 404) {
                        navigate("/dashboard/create-profile");
                    }
                }

                setUser((prev) => ({
                    ...prev,
                    username: userResponse.data.username,
                    ...profileData,
                    token,
                }));
            } catch (error) {
                console.error("Ошибка при получении данных пользователя:", error);
                if (error.response?.status === 401) {
                    localStorage.removeItem("token");
                    setUser((prev) => ({ ...prev, token: null }));
                }
            } finally {
                setIsLoading(false);
            }
        };

        fetchUserData();
    }, [navigate]); 

    return (
        <UserContext.Provider value={{ ...user, setUser, isLoading }}>
            {children}
        </UserContext.Provider>
    );
};

export default function useUser() {
    return useContext(UserContext);
}
