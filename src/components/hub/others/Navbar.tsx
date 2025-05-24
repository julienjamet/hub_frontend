/************************************************************[ IMPORTS ]*/
/************************************[ NPM MODULES ]*/
import { FC, ReactElement } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
/****************************************************/
/************************************************************************/


/*************************************************************[ NAVBAR ]*/
export const Navbar: FC = (): ReactElement => {
    /*************************[ STATES & VARIABLES ]*/
    const location: string = useLocation().pathname.split('/')[1];
    /************************************************/

    /*************************************[ RETURN ]*/
    return (
        <div className={`navbar ${location !== '' ? 'hide' : ''}`}>
            <NavLink to='/training'>
                My training
            </NavLink>

            <NavLink to='/projects'>
                My projects
            </NavLink>
        </div>
    );
    /************************************************/
};
/************************************************************************/