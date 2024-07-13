import React from 'react';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { CompMain } from './App';
import { Menu } from './Menu';
import { Proveedores } from './Proveedores';
import { Envios } from './Envios';
import {Admin} from './AdminIndex'

export const AppRouter =() => {
    return (
    <BrowserRouter>
        
            <Routes>
                <Route path="/" element={ <CompMain/> } />
                <Route path="/menu/" element={ <Menu/> } />
                <Route path="/proveedores/" element={ <Proveedores/> } />
                <Route path="/envios/" element={ <Envios/> } />
                <Route path="/admin/" element={ <Admin/> } />
            </Routes>
        
    </BrowserRouter>
    )
};
   