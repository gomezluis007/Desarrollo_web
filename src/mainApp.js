import React from 'react';
import {Header} from './Components/Header';
import {AppRouter} from './Components/router';
import {Footer} from './Components/Footer';

export const MainApp= () =>{
    return (
        <>
            <Header/>
            <AppRouter/>
            <Footer/>
        </>
    )
}