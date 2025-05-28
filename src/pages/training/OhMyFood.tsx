/************************************************************[ IMPORTS ]*/
/************************************[ NPM MODULES ]*/
import { FC, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
/****************************************************/
/************************************************************************/


/*************************************************[ Oh MY FOOD PROJECT ]*/
export const OhMyFood: FC = (): ReactElement => {
    /*************************************[ RETURN ]*/
    return (
        <div className='projects oh_my_food'>
            <div className='return'>
                <NavLink to='/training'>
                    <i className='fa-solid fa-chevron-left' />

                    <span>Retour au Hub</span>
                </NavLink>

                <i
                    className='fa-solid fa-circle-info'
                    title='coming soon !'
                />
            </div>

            <header>
                <img src="../projects/oh_my_food/images/logo/ohmyfood@2x.svg" alt="logo_ohmyfood" />
            </header>

            <main>
                <section className="intro">
                    <div className="location">
                        <i className="fa-solid fa-location-dot"></i>
                        <p>Paris, Belleville</p>
                    </div>

                    <div className="title">
                        <h2>Réservez le menu qui vous convient</h2>
                        <p>Découvrez des restaurants d'exception, sélectionnés par nos soins.</p>
                        <a href="#resto_title">
                            <button>
                                <span>Explorer nos restaurants</span>
                            </button>
                        </a>
                    </div>
                </section>

                <section className="working">
                    <h2>Fonctionnement</h2>

                    <div className="block__steps">
                        <div className="step">
                            <p className="nbr">1</p>
                            <div className="step__main">
                                <i className="fa-solid fa-mobile-screen-button"></i>
                                <p>Choisissez un restaurant</p>
                            </div>
                        </div>

                        <div className="step">
                            <p className="nbr">2</p>
                            <div className="step__main">
                                <i className="fa-solid fa-list"></i>
                                <p>Composez votre menu</p>
                            </div>
                        </div>

                        <div className="step">
                            <p className="nbr">3</p>
                            <div className="step__main">
                                <i className="fa-solid fa-store"></i>
                                <p>Dégustez au restaurant</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="restaurants">
                    <h2 id="resto_title"> Restaurants</h2>

                    <div className="block__card">
                        <a href="html/palette.html" className="resto__card" id="palette">
                            <img src="../projects/oh_my_food/images/restaurants/palette_small.webp" alt="palette_goût" />
                            <p className="new">Nouveau</p>

                            <div className="card_info">
                                <div>
                                    <h3>La palette du goût</h3>
                                    <p>Ménilmontant</p>
                                </div>
                                <i className="fa-solid fa-heart"></i>
                                <i className="fa-regular fa-heart"></i>
                            </div>
                        </a>

                        <a href="html/note.html" className="resto__card" id="note">
                            <img src="../projects/oh_my_food/images/restaurants/note_small.webp" alt="note_enchantée" />
                            <p className="new">Nouveau</p>

                            <div className="card_info">
                                <div>
                                    <h3>La note enchantée</h3>
                                    <p>Charonne</p>
                                </div>
                                <i className="fa-solid fa-heart"></i>
                                <i className="fa-regular fa-heart"></i>
                            </div>
                        </a>

                        <a href="html/francaise.html" className="resto__card" id="française">
                            <img src="../projects/oh_my_food/images/restaurants/francaise_small.webp" alt="française" />

                            <div className="card_info">
                                <div>
                                    <h3>A la française</h3>
                                    <p>Cité Rouge</p>
                                </div>
                                <i className="fa-solid fa-heart"></i>
                                <i className="fa-regular fa-heart"></i>
                            </div>
                        </a>

                        <a href="html/delice.html" className="resto__card" id="délice">
                            <img src="../projects/oh_my_food/images/restaurants/delice_small.webp" alt="délice_sens" />

                            <div className="card_info">
                                <div>
                                    <h3>Le délice des sens</h3>
                                    <p>Folie-Méricourt</p>
                                </div>
                                <i className="fa-solid fa-heart"></i>
                                <i className="fa-regular fa-heart"></i>
                            </div>
                        </a>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <p className="logo" id="footer__logo">Ohmyfood</p>
                <div className="footer">
                    <div>
                        <i className="fa-solid fa-utensils"></i>
                        <a href="#footer__logo">Proposer un restaurant</a>
                    </div>
                    <div>
                        <i className="fa-solid fa-handshake-angle"></i>
                        <a href="#footer__logo" id="partners">Devenir partenaire</a>
                    </div>
                    <a href="#footer__logo">Mentions légales</a>
                    <a href="mailto:ohmyfood@gmail.com" target="_blank">Contact</a>
                </div>
            </footer>
        </div>
    )
    /************************************************/
};
/************************************************************************/