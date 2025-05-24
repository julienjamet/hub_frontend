/************************************************************[ IMPORTS ]*/
/************************************[ NPM MODULES ]*/
import { FC, ReactElement } from 'react';
/****************************************************/

/*************************************[ INTERFACES ]*/
import { IFormattedParagraph } from '@/interfaces/hub/props/props.ts';
/****************************************************/
/************************************************************************/


/************************************************[ FORMATTED PARAGRAPH ]*/
export const FormattedParagraph: FC<IFormattedParagraph> = (props): ReactElement => {
    /*************************************[ RETURN ]*/
    return (
        <>
            {props.paragraph.split('OpenClassrooms')[0]}

            <strong>OpenClassrooms</strong>

            {props.paragraph.split('OpenClassrooms')[1]}
        </>
    );
    /************************************************/
};
/************************************************************************/