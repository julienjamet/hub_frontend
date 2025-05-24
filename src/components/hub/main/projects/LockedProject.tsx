/************************************************************[ IMPORTS ]*/
/************************************[ NPM MODULES ]*/
import { FC, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
/****************************************************/

/*************************************[ INTERFACES ]*/
import { IProjectCard } from '@/interfaces/hub/props/props.ts';
/****************************************************/
/************************************************************************/


/*****************************************************[ LOCKED PROJECT ]*/
export const LockedProject: FC<IProjectCard> = (props): ReactElement => {
    /*************************[ STATES & VARIABLES ]*/
    const projectUrl: string = `/${props.project.category}`;
    /************************************************/

    /*************************************[ RETURN ]*/
    return (
        <NavLink to={projectUrl}>
            <i className='fa-solid fa-lock' />

            <h2>{props.project.name}</h2>

            <span>Coming soon</span>
        </NavLink>
    );
    /************************************************/
};
/************************************************************************/