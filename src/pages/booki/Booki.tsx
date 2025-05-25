/************************************************************[ IMPORTS ]*/
/************************************[ NPM MODULES ]*/
import { FC, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
/****************************************************/
/************************************************************************/


/******************************************************[ BOOKI PROJECT ]*/
export const Booki: FC = (): ReactElement => {
    /*************************************[ RETURN ]*/
    return (
        <div className='booki'>
            <div className='return'>
                <NavLink to='/training'>
                    <i className='fa-solid fa-chevron-left' />

                    <span>Retour au Hub</span>
                </NavLink>
            </div>

            <header>
                <a href='#'>
                    <img src='../projects/booki/logo.png' alt='logo_booki' />
                </a>

                <nav>
                    <ul>
                        <li>
                            <a href='#lodging__main_title'>
                                Hébergements
                            </a>
                        </li>

                        <li>
                            <a href='#activities__main_title'>
                                Activités
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>

            <main>
                <section className='title'>
                    <h1>Trouvez votre hébergement pour des vacances de rêve</h1>

                    <p>En plein centre-ville ou en pleine nature</p>
                </section>

                <form>
                    <i className='fa-solid fa-location-dot' />

                    <label
                        htmlFor='form__search'
                        className='label'
                    >
                        Localisation
                    </label>

                    <input
                        id='form__search'
                        type='search'
                        name='form__search'
                        defaultValue='Marseille, France'
                        aria-label='Rechercher une localisation'
                    />

                    <label
                        htmlFor='form__submit'
                        className='label'
                    >
                        Submit
                    </label>

                    <input
                        id='form__submit'
                        type='submit'
                        defaultValue='Rechercher'
                    >
                        {/* <button>
                            <i className='fa-solid fa-magnifying-glass' />
                        </button> */}
                    </input>
                </form>

                <section className='filters'>
                    <h2>Filtres</h2>

                    <a href='#'>
                        <i className='fa-solid fa-money-bill-wave' />

                        <h2>Économique</h2>
                    </a>

                    <a href='#'>
                        <i
                            id='child_icon'
                            className='fa-solid fa-child-reaching'
                        />

                        <h2>Familial</h2>
                    </a>

                    <a href='#'>
                        <i
                            id='heart_icon'
                            className='fa-solid fa-heart'
                        />

                        <h2>Romantique</h2>
                    </a>

                    <a href='#'>
                        <i className='fa-solid fa-dog' />

                        <h2>Animaux autorisés</h2>
                    </a>
                </section>

                <section className='info'>
                    <i className='fa-solid fa-info' />

                    <p>Plus de 500 logements sont disponibles dans cette ville</p>
                </section>

                <section className='lodging'>
                    <div
                        id='lodging__block--main'
                        className='lodging__block'
                    >
                        <h2 id='lodging__main_title'>
                            Hébergements à Marseille
                        </h2>

                        <div className='lodging__line'>
                            <a
                                href='#lodging__main_title'
                                className='lodging__card'
                            >
                                <img
                                    src='../projects/booki/hebergements/cannebiere.webp'
                                    alt='auberge_cannebiere'
                                    height='115'
                                    width='250'
                                />

                                <div className='card_info'>
                                    <h3>Auberge La Cannebière</h3>

                                    <p className='min_price'>
                                        Nuit à partir de <strong>25 €</strong>
                                    </p>

                                    <p className='rating'>
                                        <i className='fa-solid fa-star' />

                                        <i className='fa-solid fa-star' />

                                        <i className='fa-solid fa-star' />

                                        <i className='fa-solid fa-star' />

                                        <i className='fa-solid fa-star grey-star' />
                                    </p>
                                </div>
                            </a>

                            <a
                                href='#lodging__main_title'
                                className='lodging__card'
                            >
                                <img
                                    src='../projects/booki/hebergements/hotel_du_port.webp'
                                    alt='hotel_port'
                                    height='115'
                                    width='250'
                                />

                                <div className='card_info'>
                                    <h3>Hôtel du port</h3>

                                    <div>
                                        <p className='min_price'>
                                            Nuit à partir de 52<strong> €</strong>
                                        </p>

                                        <p className='rating'>
                                            <i className='fa-solid fa-star' />

                                            <i className='fa-solid fa-star' />

                                            <i className='fa-solid fa-star' />

                                            <i className='fa-solid fa-star' />

                                            <i className='fa-solid fa-star' />
                                        </p>
                                    </div>
                                </div>
                            </a>

                            <a
                                href='#lodging__main_title'
                                className='lodging__card'
                            >
                                <img
                                    src='../projects/booki/hebergements/mouettes.webp'
                                    alt='hotel_mouettes'
                                    height='115'
                                    width='250'
                                />

                                <div className='card_info'>
                                    <h3>Hôtel Les mouettes</h3>

                                    <div>
                                        <p className='min_price'>
                                            Nuit à partir de 76<strong> €</strong>
                                        </p>

                                        <p className='rating'>
                                            <i className='fa-solid fa-star' />

                                            <i className='fa-solid fa-star' />

                                            <i className='fa-solid fa-star' />

                                            <i className='fa-solid fa-star' />

                                            <i className='fa-solid fa-star grey-star' />
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className='lodging__line'>
                            <a
                                href='#lodging__main_title'
                                className='lodging__card'
                            >
                                <img
                                    src='../projects/booki/hebergements/hotel_de_la_mer.webp'
                                    alt='hotel_mer'
                                    height='115'
                                    width='250'
                                />

                                <div className='card_info'>
                                    <h3>Hôtel de la mer</h3>

                                    <p className='min_price'>
                                        Nuit à partir de 46<strong> €</strong>
                                    </p>

                                    <p className='rating'>
                                        <i className='fa-solid fa-star' />

                                        <i className='fa-solid fa-star' />

                                        <i className='fa-solid fa-star' />

                                        <i className='fa-solid fa-star grey-star' />

                                        <i className='fa-solid fa-star grey-star' />
                                    </p>
                                </div>
                            </a>

                            <a
                                href='#lodging__main_title'
                                className='lodging__card'
                            >
                                <img
                                    src='../projects/booki/hebergements/panier.webp'
                                    alt='hotel_panier'
                                    height='115'
                                    width='250'
                                />

                                <div className='card_info'>
                                    <h3>Auberge Le Panier</h3>

                                    <p className='min_price'>
                                        Nuit à partir de <strong>23 €</strong>
                                    </p>

                                    <p className='rating'>
                                        <i className='fa-solid fa-star' />

                                        <i className='fa-solid fa-star' />

                                        <i className='fa-solid fa-star' />

                                        <i className='fa-solid fa-star' />

                                        <i className='fa-solid fa-star' />
                                    </p>
                                </div>
                            </a>

                            <a
                                href='#lodging__main_title'
                                className='lodging__card'
                            >
                                <img
                                    src='../projects/booki/hebergements/amina.webp'
                                    alt='hotel_amina'
                                    height='115'
                                    width='250'
                                />

                                <div className='card_info'>
                                    <h3>Hôtel chez Amina</h3>

                                    <p className='min_price'>
                                        Nuit à partir de 96<strong> €</strong>
                                    </p>

                                    <p className='rating'>
                                        <i className='fa-solid fa-star' />

                                        <i className='fa-solid fa-star' />

                                        <i className='fa-solid fa-star' />

                                        <i className='fa-solid fa-star' />

                                        <i className='fa-solid fa-star' />
                                    </p>
                                </div>
                            </a>
                        </div>

                        <a
                            href='#lodging__main_title'
                            id='show_more'
                        >
                            <span>Afficher plus</span>
                        </a>
                    </div>

                    <aside
                        id='lodging__block--starred'
                        className='lodging__block'
                    >
                        <h2 id='starred-title'>
                            <span>Les plus populaires</span>

                            <img
                                src='../projects/booki/chart-line.svg'
                                id='chart-line_icon'
                                alt='chart-line_icon'
                                height='25'
                                width='24'
                            />
                        </h2>

                        <div className='lodging__column'>
                            <a
                                href='#starred-title'
                                className='lodging__card lodging__card--starred'
                            >
                                <img
                                    src='../projects/booki/hebergements/soleil_du_matin.webp'
                                    alt='hotel_soleil'
                                    height='135'
                                    width='135'
                                />

                                <div className='card_info card_info--starred'>
                                    <div>
                                        <h3>Hôtel Le soleil du matin</h3>

                                        <p className='min_price'>
                                            Nuit à partir de 128<strong> €</strong>
                                        </p>
                                    </div>

                                    <p className='rating'>
                                        <i className='fa-solid fa-star' />

                                        <i className='fa-solid fa-star' />

                                        <i className='fa-solid fa-star' />

                                        <i className='fa-solid fa-star' />

                                        <i className='fa-solid fa-star' />
                                    </p>
                                </div>
                            </a>

                            <a
                                href='#starred-title'
                                className='lodging__card lodging__card--starred'
                            >
                                <img
                                    src='../projects/booki/hebergements/coeur_de_l_eau.webp'
                                    alt='chambres_eau'
                                    height='135'
                                    width='135'
                                />

                                <div className='card_info card_info--starred'>
                                    <div>
                                        <h3>Au coeur de l'eau Chambres d'hôtes</h3>

                                        <p className='min_price'>
                                            Nuit à partir de 71<strong> €</strong>
                                        </p>
                                    </div>

                                    <p className='rating'>
                                        <i className='fa-solid fa-star' />
                                        <i className='fa-solid fa-star' />
                                        <i className='fa-solid fa-star' />
                                        <i className='fa-solid fa-star' />
                                        <i className='fa-solid fa-star grey-star' />
                                    </p>
                                </div>
                            </a>

                            <a
                                href='#starred-title'
                                className='lodging__card lodging__card--starred'
                            >
                                <img
                                    src='../projects/booki/hebergements/bleu_et_blanc.webp'
                                    alt='hotel_bleu_blanc'
                                    height='135'
                                    width='135'
                                />

                                <div className='card_info card_info--starred'>
                                    <div>
                                        <h3>Hôtel Tout bleu et Blanc</h3>

                                        <p className='min_price'>
                                            Nuit à partir de 68<strong> €</strong>
                                        </p>
                                    </div>

                                    <p className='rating'>
                                        <i className='fa-solid fa-star' />
                                        <i className='fa-solid fa-star' />
                                        <i className='fa-solid fa-star' />
                                        <i className='fa-solid fa-star' />
                                        <i className='fa-solid fa-star grey-star' />
                                    </p>
                                </div>
                            </a>
                        </div>
                    </aside>
                </section>

                <section className='activities'>
                    <h2 id='activities__main_title'>
                        Activités à Marseille
                    </h2>

                    <div className='activities__line'>
                        <div className='activities__column'>
                            <a href='#activities__main_title'>
                                <div className='activities__card'>
                                    <img
                                        src='../projects/booki/activites/vieux_port.webp'
                                        alt='vieux_port'
                                        width='317'
                                    />

                                    <h3>Vieux Port</h3>
                                </div>
                            </a>
                        </div>

                        <div className='activities__column'>
                            <a href='#activities__main_title'>
                                <div
                                    id='pomergues'
                                    className='activities__card'
                                >
                                    <img
                                        src='../projects/booki/activites/pomergues.webp'
                                        alt='fort_pomergues'
                                        width='317'
                                    />

                                    <h3>Fort de Pomèrgues</h3>
                                </div>
                            </a>

                            <a href='#activities__main_title'>
                                <div
                                    id='frioul'
                                    className='activities__card'
                                >
                                    <img
                                        src='../projects/booki/activites/frioul.webp'
                                        alt='iles_frioul'
                                        width='317'
                                    />

                                    <h3>Îles du Frioul</h3>
                                </div>
                            </a>
                        </div>

                        <div className='activities__column'>
                            <a href='#activities__main_title'>
                                <div className='activities__card'>
                                    <img
                                        src='../projects/booki/activites/calanques.webp'
                                        alt='parc_calanques'
                                    />

                                    <h3 className='long_title'>
                                        Parc National des Calanques
                                    </h3>
                                </div>
                            </a>
                        </div>

                        <div className='activities__column'>
                            <a href='#activities__main_title'>
                                <div
                                    id='garde'
                                    className='activities__card'
                                >
                                    <img
                                        src='../projects/booki/activites/notre_dame.webp'
                                        alt='notre-dame_garde'
                                    />

                                    <h3>Notre-Dame-de-la-Garde</h3>
                                </div>
                            </a>

                            <a href='#activities__main_title'>
                                <div
                                    className='activities__card'
                                    id='longchamp'
                                >
                                    <img
                                        src='../projects/booki/activites/longchamp.webp'
                                        alt='parc_longchamp'
                                    />

                                    <h3>Parc Longchamp</h3>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <footer>
                <section
                    id='footer'
                    className='footer__block'
                >
                    <h3>A propos</h3>

                    <a href='#footer'>
                        Fonctionnement du site
                    </a>

                    <a href='#footer'>
                        Conditions générales de vente
                    </a>

                    <a href='#footer'>
                        Données et confidentialité
                    </a>
                </section>

                <section className='footer__block'>
                    <h3>Nos hébergements</h3>

                    <a href='#footer'>
                        Charte qualité
                    </a>

                    <a href='#footer'>
                        Soumettre votre hôtel
                    </a>
                </section>

                <section className='footer__block'>
                    <h3>Assistance</h3>

                    <a href='#footer'>
                        Centre d'aide
                    </a>

                    <a href='#footer'>
                        Nous contacter
                    </a>
                </section>
            </footer>
        </div>
    )
    /************************************************/
};
/************************************************************************/