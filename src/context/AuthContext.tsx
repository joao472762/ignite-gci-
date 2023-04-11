import { ReactNode, createContext,useEffect,useState } from "react";
import { ORG_DTO } from "../DTOS/orgDTO";
import { api } from "../libs/axios";
import { getOrgInLocalStorage, removeOrgInLocalStorage, saveOrgInLocalStorage } from "../Storage/org";
import { getAuthTokenInLocalStorage, removeAuthTokenInLocalStorage, saveAuthTokenInLocalStorage } from "../Storage/authToken";
import { useNavigate } from "react-router-dom";

interface  AuthContextType {
    org: ORG_DTO,
    sign: (email: string, password: string) => Promise<void>
    singOut: () => void
}

export const AuthContext =  createContext({} as AuthContextType)

interface AuthContextProviderProps {
    children: ReactNode
}

interface SignResponseProps {
    token: string,
    org: ORG_DTO
}



export function AuthContextProvider({ children}: AuthContextProviderProps){
    const [org, setOrg] = useState<ORG_DTO>({} as ORG_DTO)


    function saveOrgAndTokenInLocalStorage(org: ORG_DTO, token: string){
        saveOrgInLocalStorage(org)
        saveAuthTokenInLocalStorage(token)
    }

    function updateOrgAndToken(org: ORG_DTO, token: string){
        setOrg(org)
        api.defaults.headers.common.Authorization = `Bearer ${token}`
    }
    function removeOrtAndToken(){
        removeOrgInLocalStorage()
        removeAuthTokenInLocalStorage()
        setOrg({} as ORG_DTO)
        
    }

    async function singOut() {
        removeOrtAndToken()
    }

    async function sign(email: string, password: string){
        try {
            const response = await api.post<SignResponseProps>('/auth/sessions',{
                email,
                password
            })
            console.log(response.data)
            const { org, token}  = response.data

            if(!token || !org) return ;
            
            updateOrgAndToken(org,token)
            saveOrgAndTokenInLocalStorage(org,token)

        } catch (error) {
            throw error
        }
    }

    function fetchOrgData(){
        const orgLogged = getOrgInLocalStorage()
        const tokenSaved = getAuthTokenInLocalStorage()

        if (!orgLogged  || !tokenSaved ) return ;

        updateOrgAndToken(orgLogged,tokenSaved)
    }
    
    useEffect(() => {
        fetchOrgData()
    }, [])

    return  (
       <AuthContext.Provider value={{
            org, 
            sign,
            singOut
       }}>
            {children}
       </AuthContext.Provider>
    )
}