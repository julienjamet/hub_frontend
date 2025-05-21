/************************************************************[ IMPORTS ]*/
/************************************[ NPM MODULES ]*/
import { FC, ReactElement } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
/****************************************************/

/******************************************[ PAGES ]*/
import { Projects } from './pages/hub/Projects.tsx';
/****************************************************/

/*************************************[ COMPONENTS ]*/
import { Navbar } from './components/hub/others/Navbar.tsx';
/****************************************************/
/************************************************************************/


/************************************************************[ HUB APP ]*/
export const App: FC = (): ReactElement => {
    /*************************************[ RETURN ]*/
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route
                    path='/training'
                    element={
                        <Projects />
                    }
                />

                <Route
                    path='/projects'
                    element={
                        <Projects />
                    }
                />

                <Route
                    path='*'
                    element={
                        <Navigate replace to='/' />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
    /************************************************/
};
/************************************************************************/