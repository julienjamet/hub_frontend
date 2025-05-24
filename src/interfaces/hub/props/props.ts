/************************************************************[ IMPORTS ]*/
/*************************************[ INTERFACES ]*/
import { HubProject } from '@/interfaces/hub/objects/objects.ts';
/****************************************************/
/************************************************************************/


/***********************************************[ HUB PROPS INTERFACES ]*/
/*************************************[ HUB HEADER ]*/
interface GetsLocation {
    location: string;
};

export type IHeader = GetsLocation;
export type IPagePresentation = GetsLocation;

export interface IFormattedParagraph {
    paragraph: string;
};
/****************************************************/


/***************************************[ HUB MAIN ]*/
export type IMain = GetsLocation;

export interface IProjectCard {
    project: HubProject;
};
/****************************************************/
/************************************************************************/