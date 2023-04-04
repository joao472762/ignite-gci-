import { ReactNode, createContext,useEffect,useState } from "react";
import { ORG_DTO } from "../DTOS/orgDTO";
import { api } from "../libs/axios";
import { getOrgInLocalStorage, saveOrgInLocalStorage } from "../Storage/org";
import { getAuthTokenInLocalStorage, saveAuthTokenInLocalStorage } from "../Storage/authToken";

interface  AuthContextType {
    org: ORG_DTO,
    sign: (email: string, password: string) => Promise<void>
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

    async function sign(email: string, password: string){
        try {
            const response = await api.post<SignResponseProps>('/auth/sessions',{
                email,
                password
            })
            
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
            sign
       }}>
            {children}
       </AuthContext.Provider>
    )
}