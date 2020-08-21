import React from "react";

const AuthContext = React.createContext()

const AuthProvider = props =>{
    return(
        <AuthContext.Provider value ={{data, login, logout, register}} {...props} />
    )
}

const useAuth = () =>{
    React.useContext(AuthContext)
}

export {AuthProvider, useAuth};