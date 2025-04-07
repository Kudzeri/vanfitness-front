import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import api from "../axios";

const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null); // Теперь user начинается с `null`
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem("token");
            

            if (!token) {
                console.log("❌ Нет токена. Выход...");
                setIsLoading(false);
                return;
            }

            try {
                const userResponse = await api.get("/user/me");
                console.log("✅ Получены данные пользователя:", userResponse.data);
                
                let profileData = {};
                try {
                    const profileResponse = await api.get("/profile/get");
                    profileData = profileResponse.data;
                } catch (profileError) {
                    console.error("⚠️ Ошибка при получении профиля:", profileError);
                    if (profileError.response?.status === 404) {
                        navigate("/dashboard/create-profile");
                    }
                }

                const user_id = userResponse.data.id;
                const newUser = {
                    my_id: user_id, // Берем `id` из API
                    username: userResponse.data.username,
                    ...profileData,
                    token,
                };

                setUser(newUser);
                console.log("🔄 UserContext обновлен:", newUser);

            } catch (error) {
                console.error("❌ Ошибка при получении данных пользователя:", error);
                if (error.response?.status === 401) {
                    localStorage.removeItem("token");
                    setUser(null);
                }
            } finally {
                setIsLoading(false);
            }
        };

        fetchUserData();
    }, [navigate]); 

    return (
        <UserContext.Provider value={{ ...user,user, setUser, isLoading }}>
            {children}
        </UserContext.Provider>
    );
};

export default function useUser() {
    return useContext(UserContext);
}
