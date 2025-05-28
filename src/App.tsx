/************************************************************[ IMPORTS ]*/
/************************************[ NPM MODULES ]*/
import { FC, ReactElement } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
/****************************************************/

/******************************************[ PAGES ]*/
import { Projects } from './pages/hub/Projects.tsx';
import { Booki } from './pages/booki/Booki.tsx';
/****************************************************/

/*************************************[ COMPONENTS ]*/
import { Navbar } from './components/hub/others/Navbar.tsx';
import { OhMyFood } from './pages/training/OhMyFood.tsx';
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
                    path='/training/booki'
                    element={
                        <Booki />
                    }
                />

                <Route
                    path='/training/oh_my_food'
                    element={
                        <OhMyFood />
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