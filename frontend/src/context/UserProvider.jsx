import {createContext, useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const UserContext = createContext({});
const getToken = () => window.localStorage.getItem("token")
const setToken = (token) => window.localStorage.setItem("token", token)
const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const getMe = (token) => {
        fetch('/api/get-me', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => (res.json()))
            .then((res) => {
                setUser(res);
            })
            .finally(() => {
                setLoading(false)
            })
    }

    useEffect(() => {
        const token = getToken();
        if (!token) {
            setLoading(false)
            return;
        }
        getMe(token);
    },[])

    const login = (creds) => {
        fetch('/login', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(creds)
        })
            .then((res) => (res.json()))
            .then((res) => {
                const {token} = res
                setToken(token)
                getMe(token)

            })
    }

    const logout = () => {
        setToken(null);
        setUser(null);
    }
    return (
        <UserContext.Provider value={{user, login, logout}}>
            {!loading && children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext)
export default UserProvider
