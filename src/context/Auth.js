import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const CryptoJS = require("crypto-js")
    const [user, setUser] = useState();

    useEffect(() => {

        // Verifica se existe no localStorage as chaves "user_token" e "users_db"
        const userToken = localStorage.getItem("user_token");
        const usersStorage = localStorage.getItem("users_db");

        // Caso exista, executa:
        if ( userToken && usersStorage ) {

            // Recebe o conteúdo da constante "usersStorage" e filtra o usuário
            // pelo email, armazenando-o
            const hasUser = JSON.parse(usersStorage)?.filter((user) => user.email === JSON.parse(userToken).email);

            // Caso exista, executa:
            if ( hasUser ){
                setUser(hasUser[0]);
            }
        }
    }, []);

    const login = ( email, password ) => {

        // Armazena em uma constante as informações existentes dentro da 
        // chave "users_db"
        const usersStorage = JSON.parse(localStorage.getItem("users_db"));

        // Filtra o usuário com base em seu email
        const hasUser = usersStorage?.filter((user) => user.email === email);

        if ( hasUser?.length ){

            // Descriptografando o password do localStorage com a chave 
            const passwordDescrypto = CryptoJS.AES.decrypt(hasUser[0].password, 'njndckjsnfkahernjSWELF');
            const realPassword = passwordDescrypto.toString(CryptoJS.enc.Utf8)

            // Se o usuário filtrado possui as mesmas credenciais armazenadas
            // no localStorage, executa:
            if( hasUser[0].email === email && realPassword === password){
                
                // Cria um token aleatório
                const token = Math.random().toString(36).substring(2);

                // Armazena no localStorage o novo token e o email do usuário
                localStorage.setItem("user_token", JSON.stringify({email, token}));

                setUser({email, password});

                return;
            } else {
                return "O usuário não foi encontrado. Verifique o email e a senha.";
            }
        } else {
            return "Este usuário não está cadastrado.";
        }
    }


    const signOut = () => {
        setUser(null);
        localStorage.removeItem("user_token");
    }

    return <AuthContext.Provider value={{user, login: !!user, login, signOut}}>
        { children }
    </AuthContext.Provider>
}