import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AppState = createContext(null);
export const GlobalState = ({ children }) => {
    const [ user, setUser ] = useState();
    
    const user_token = JSON.parse(localStorage.getItem("authToken"))
    const getUser = async () => {
        const config = {
            authorization: `Bearer ${user_token.logInUserToken}`,
        };
        await axios.get("https://recycle-back-end.onrender.com/api/users/profile", { headers: config }).then((res) => {
            setUser(res.data.data)
        }).catch((error) => {
            // alert("User Token as Expire")
            console.log(error);
        })
    }

    useEffect(() => {
        getUser()
    })
    return (
        <AppState.Provider value={ { user } }>
            { children }
        </AppState.Provider>
    );
};