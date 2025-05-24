/************************************************************[ IMPORTS ]*/
/************************************[ NPM MODULES ]*/
import { FC, ReactElement, useState, useEffect, ReactNode } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';
/****************************************************/

/*************************************[ INTERFACES ]*/
import { IPageHeader } from '@/interfaces/hub/props/props.ts';
import { HubPageHeader } from '@/interfaces/hub/objects/objects.ts';
/****************************************************/

/****************************************[ METHODS ]*/
import { setBackendUrl } from '@/methods/hub/methods.ts';
/****************************************************/

/*************************************[ COMPONENTS ]*/
import { FormattedParagraph } from './FormattedParagraph.tsx';
/****************************************************/
/************************************************************************/


/********************************************************[ PAGE HEADER ]*/
export const PageHeader: FC<IPageHeader> = (props): ReactElement => {
    /*************************[ STATES & VARIABLES ]*/
    const backendURL: string = setBackendUrl();

    const [pageHeader, setPageHeader] = useState<HubPageHeader>();
    /************************************************/

    /**************************[ EFFECTS & METHODS ]*/
    // [ GET PAGE HEADER ] EFFECT
    useEffect((): void => {
        axios.get(`${backendURL}/page_header/${props.location}`)

            .then((response: AxiosResponse): void => setPageHeader(response.data))

            .catch((error: AxiosError): void => console.error(error));
    }, [backendURL, props.location]);
    /************************************************/

    /*************************************[ RETURN ]*/
    return (
        <div className='paragraphs'>
            {
                pageHeader?.paragraphs.map((paragraph: string, index: number): ReactNode =>
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