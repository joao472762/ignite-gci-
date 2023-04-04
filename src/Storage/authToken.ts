import { STORAGE_BASE_KEY } from "./config";
const STORAGE_AUTH_TOKEN_KEY = `${STORAGE_BASE_KEY}:token`

export function getAuthTokenInLocalStorage(){
    const token = localStorage.getItem(STORAGE_AUTH_TOKEN_KEY)
    return token
}

export function saveAuthTokenInLocalStorage(token:string){
    localStorage.setItem(STORAGE_AUTH_TOKEN_KEY, token)
}

export function removeAuthTokenInLocalStorage(){
  localStorage.removeItem(STORAGE_AUTH_TOKEN_KEY)
    
}


