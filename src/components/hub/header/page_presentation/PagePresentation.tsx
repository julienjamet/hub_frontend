/************************************************************[ IMPORTS ]*/
/************************************[ NPM MODULES ]*/
import { FC, ReactElement, useState, useEffect, ReactNode } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';
/****************************************************/

/*************************************[ INTERFACES ]*/
import { IPagePresentation } from '@/interfaces/hub/props/props.ts';
import { HubPagePresentation } from '@/interfaces/hub/objects/objects.ts';
/****************************************************/

/****************************************[ METHODS ]*/
import { setBackendUrl } from '@/methods/hub/methods.ts';
/****************************************************/

/*************************************[ COMPONENTS ]*/
import { FormattedParagraph } from './FormattedParagraph.tsx';
/****************************************************/
/************************************************************************/


/**************************************************[ PAGE PRESENTATION ]*/
export const PagePresentation: FC<IPagePresentation> = (props): ReactElement => {
    /*************************[ STATES & VARIABLES ]*/
    const backendURL: string = setBackendUrl();

    const [pagePresentation, setPagePresentation] = useState<HubPagePresentation>();
    /************************************************/

    /**************************[ EFFECTS & METHODS ]*/
    // [ GET PAGE PRESENTATION ] EFFECT
    useEffect((): void => {
        axios.get(`${backendURL}/page_presentation/${props.location}`)

            .then((response: AxiosResponse): void => setPagePresentation(response.data))

            .catch((error: AxiosError): void => console.error(error));
    }, [backendURL, props.location]);
    /************************************************/

    /*************************************[ RETURN ]*/
    return (
        <div className='paragraphs'>
            {
                pagePresentation?.paragraphs.map((paragraph: string, index: number): ReactNode =>
                    <span key={index}>
                        {
                            paragraph.includes('OpenClassrooms') ? <FormattedParagraph paragraph={paragraph} /> : paragraph
                        }
                    </span>
                )
            }
        </div>
    );
    /************************************************/
};
/************************************************************************/