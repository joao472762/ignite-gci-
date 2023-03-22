import {  Route, BrowserRouter, Routes  } from "react-router-dom";
import { Home } from "../screens/Home";
import { Map } from "../screens/Map";
import { AppContainer } from "../styles/app";
export function Router(){
    return (
        <BrowserRouter>
          
                <Routes>
                    <Route path="/" Component={Home}/>
                    <Route path="map/:city" Component={Map}/>

                </Routes>

            
        </BrowserRouter>

    )
}