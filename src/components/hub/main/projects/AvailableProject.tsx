/************************************************************[ IMPORTS ]*/
/************************************[ NPM MODULES ]*/
import { FC, ReactElement, useState, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
/****************************************************/

/*************************************[ INTERFACES ]*/
import { IProjectCard } from '@/interfaces/hub/props/props.ts';
import { Skill } from '@/interfaces/hub/objects/objects.ts';
/****************************************************/
/************************************************************************/


/**************************************************[ AVAILABLE PROJECT ]*/
export const AvailableProject: FC<IProjectCard> = (props): ReactElement => {
    /*************************[ STATES & VARIABLES ]*/
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const projectUrl: string = `/${props.project.category}/${props.project.name.toLowerCase().replace(/ /g, '_')}`;
    /************************************************/

    /*************************************[ RETURN ]*/
    return (
        <NavLink
            to={props.project.integrated === true ? projectUrl : props.project.url}
            onMouseEnter={(): void => setIsHovered(true)}
            onMouseLeave={(): void => setIsHovered(false)}
        >
            {
                !isHovered ? (
                    <>
                        <img src={props.project.image} alt={`Project ${props.project.name}`} />

                        <h2>{props.project.name}</h2>

                        <div className='skills'>
                            {
                                props.project.skills.map((skill: Skill, index: number): ReactNode =>
                                    skill.icon.includes('base64') ? (
                                        <img
                                            key={index}
                                            src={skill.icon}
                                            title={skill.name}
                                            alt={`Skill ${skill.name}`}
                                        />
                                    ) : (
                                        <i
                                            key={index}
                                            className={skill.icon}
                                            title={skill.name}
                                        />
                                    )
                                )
                            }
                        </div>
                    </>
                ) : (
                    <ul className='subject'>
                        {
                            props.project.subject.split('. ').map((sentence, index) => (
                                <li key={index}>
                                    {sentence.trim().replace(/\.$/, '')}
                                    
                                    <br />
                                </li>
                            ))
                        }
                    </ul>
                )
            }
        </NavLink>
    );
    /************************************************/
};
/************************************************************************/