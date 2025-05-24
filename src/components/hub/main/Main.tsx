/************************************************************[ IMPORTS ]*/
/************************************[ NPM MODULES ]*/
import { FC, ReactElement, useState, useEffect, ReactNode } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';
/****************************************************/

/*************************************[ INTERFACES ]*/
import { IMain } from '@/interfaces/hub/props/props.ts';
import { HubProject } from '@/interfaces/hub/objects/objects.ts';
/****************************************************/

/****************************************[ METHODS ]*/
import { setBackendUrl } from '@/methods/hub/methods.ts';
/****************************************************/

/*************************************[ COMPONENTS ]*/
import { AvailableProject } from './projects/AvailableProject.tsx';
import { LockedProject } from './projects/LockedProject.tsx';
/****************************************************/
/************************************************************************/


/***************************************************************[ MAIN ]*/
export const Main: FC<IMain> = (props): ReactElement => {
    /*************************[ STATES & VARIABLES ]*/
    const backendURL: string = setBackendUrl();

    const [projects, setProjects] = useState<HubProject[]>([]);
    /************************************************/

    /**************************[ EFFECTS & METHODS ]*/
    // [ GET PROJECTS ] EFFECT
    useEffect((): void => {
        axios.get(`${backendURL}/projects/${props.location}`)

            .then((response: AxiosResponse): void => setProjects(response.data))

            .catch((error: AxiosError): void => console.error(error));
    }, [backendURL, props.location]);
    /************************************************/

    /*************************************[ RETURN ]*/
    return (
        <main>
            {
                projects.map((project: HubProject, index: number): ReactNode =>
                    <div
                        key={index}
                        className={`card card--${index} ${!project.available ? 'locked' : ''}`}
                    >
                        {
                            project.available ? <AvailableProject project={project} /> : <LockedProject project={project} />
                        }
                    </div>
                )
            }
        </main>
    );
    /************************************************/
};
/************************************************************************/