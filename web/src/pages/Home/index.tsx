import React from 'react';
import {FiLogIn} from 'react-icons/fi'
import './styles.css';
import {Link} from 'react-router-dom';


import logo from '../../assets/logo.svg'

const  Home = ()  => {
    return(
        <div id="page-home">
            <div className="content">
                <header>
                <img src={logo} alt="Ecoleta" />
                </header>
                <main>
                    <h1>Seu marketplace de coleta de resíduos.
                        <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.
                            <Link to = "/create-point">
                                <span>
                                    <FiLogIn/>
                                </span>
                                <strong>Cadastre um ponto de coleta</strong>
                            </Link>
                            </p>
                            </h1>
                </main>



            </div>
        </div>
    )
}

export default Home;