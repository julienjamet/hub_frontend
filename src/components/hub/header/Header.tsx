/************************************************************[ IMPORTS ]*/
/************************************[ NPM MODULES ]*/
import { FC, ReactElement } from 'react';
import { NavLink, } from 'react-router-dom';
/****************************************************/

/*************************************[ INTERFACES ]*/
import { IHeader } from '@/interfaces/hub/props/props.ts';
/****************************************************/

/*************************************[ COMPONENTS ]*/
import { PageHeader } from './page_header/PageHeader.tsx';
/****************************************************/
/************************************************************************/


/*************************************************************[ HEADER ]*/
export const Header: FC<IHeader> = (props): ReactElement => {
    /*************************************[ RETURN ]*/
    return (
        <header>
            <h1>
                <NavLink
                    to='/'
                    title='Retour'
                >
                    <i
                        className='fa-solid fa-chevron-left'
                        title='Retour'
                    />
                </NavLink>

                <span>{`My ${props.location}`}</span>
            </h1>

            <PageHeader location={props.location} />
        </header>
    );
    /************************************************/
};
/************************************************************************/