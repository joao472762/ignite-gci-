import { ORG_DTO } from "../DTOS/orgDTO";
import { STORAGE_BASE_KEY } from "./config";

export const STORAGE_ORG_KEY = `${STORAGE_BASE_KEY}`

export function getOrgInLocalStorage(){
    const orgResponse = localStorage.getItem(STORAGE_ORG_KEY)
    const org: ORG_DTO | undefined = orgResponse ? JSON.parse(orgResponse) : undefined

    return org

}

export function saveOrgInLocalStorage(org: ORG_DTO){
    const orgToSaveInLocalStorage = JSON.stringify(org)
    localStorage.setItem(STORAGE_ORG_KEY, orgToSaveInLocalStorage )
}

export function removeOrgInLocalStorage(){
    localStorage.removeItem(STORAGE_ORG_KEY)
}