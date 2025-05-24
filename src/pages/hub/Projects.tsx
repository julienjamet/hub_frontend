/************************************************************[ IMPORTS ]*/
/************************************[ NPM MODULES ]*/
import { FC, ReactElement } from 'react';
import { useLocation } from 'react-router-dom';
/****************************************************/

/*************************************[ COMPONENTS ]*/
import { Header } from '@/components/hub/header/Header.tsx';
import { Main } from '@/components/hub/main/Main.tsx';
/****************************************************/
/************************************************************************/


/***********************************************************[ PROJECTS ]*/
export const Projects: FC = (): ReactElement => {
    /*************************[ STATES & VARIABLES ]*/
    const location: string = useLocation().pathname.split('/')[1];
    /************************************************/

    /*************************************[ RETURN ]*/
    return (
        <div className='background'>
            <div className='projects'>
                <Header location={location} />

                <Main location={location} />
            </div>
        </div>
    );
    /************************************************/
};
/************************************************************************/