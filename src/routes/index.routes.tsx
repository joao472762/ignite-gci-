import {  Route, BrowserRouter, Routes,  } from "react-router-dom";

 import { Map } from "../screens/Map";
import { Home } from "../screens/Home";
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";
import { PetProfile } from "../screens/PetProfile";
import { useAuth } from "../hook/useAtuh";
import { PetCreate } from "../screens/PetCreate";


export function Router(){
    const {org } = useAuth()
    return (
        <BrowserRouter>
          
                <Routes>
                    <Route path="/" Component={Home}/>
                    <Route path="map/:city" Component={Map}/>
                    <Route path='petProfile/:id' Component={PetProfile}/>
                    {!org.id && (
                        <>
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                        </>

                    )}
                    {
                       org.id && (
                            <Route path="/petCreate" element={<PetCreate />} />
                       ) 
                    }
                </Routes>

            
        </BrowserRouter>

    )
}