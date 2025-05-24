/************************************************************[ IMPORTS ]*/
/************************************[ NPM MODULES ]*/
import ReactDOM from 'react-dom/client';
import React, { ReactElement } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
/****************************************************/

/*****************************************[ STYLES ]*/
import './styles/index.scss';
/****************************************************/

/*************************************[ COMPONENTS ]*/
import { App } from './App.tsx';
/****************************************************/
/************************************************************************/


/**************************************************************[ INDEX ]*/
const container: HTMLElement = document.getElementById('root') as HTMLElement;
const root: ReactDOM.Root = ReactDOM.createRoot(container);

const index: ReactElement = (
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

root.render(index);
/************************************************************************/