/************************************************************[ IMPORTS ]*/
/************************************[ NPM MODULES ]*/
import { FC, ReactElement } from 'react';
import { useLocation } from 'react-router-dom';
/****************************************************/
/************************************************************************/


/***********************************************************[ ABOUT ME ]*/
export const AboutMe: FC = (): ReactElement => {
    /*************************[ STATES & VARIABLES ]*/
    const location: string = useLocation().pathname.split('/')[1];
    /************************************************/

    /*************************************[ RETURN ]*/
    return (
        <div className={`presentation ${location !== '' ? 'hide' : ''}`}>
            <div>
                <p>Hi, I'm Julien 👋</p>

                <p>I'm a full-stack developer specialized in the <strong>MERN</strong> stack with <strong>TypeScript</strong>.</p>

                <p>Have a look at my work and feel free to reach out !</p>
                
                <p>
                    <span>Click </span>

                    <a
                        href='https://github.com/julienjamet'
                        target='_blank'
                    >
                        here
                    </a>

                    <span> to visit my GitHub profile.</span>
                </p>
            </div>
        </div>
    );
    /************************************************/
};
/************************************************************************/