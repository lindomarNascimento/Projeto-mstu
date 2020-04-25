import React from 'react'

import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHome, faKey,faMarker, faUserCheck } from '@fortawesome/free-solid-svg-icons'
const Main = () => {
    function animationMenu() {
        const btnMenu = document.querySelector('.menu-btn')
        const menuMobile = document.querySelector('.menu-mobile')

        btnMenu.classList.toggle('open')
        menuMobile.classList.toggle('click')
    }


    return (
        <>
            <section className="container">
                <div className="menu">
                <div className="menu-btn" onClick={animationMenu}>
                    <div className="menu-btn-burguer"></div>
                   
                </div>
                <h1>MSTU</h1>

                </div>
            </section>
            <section className="menu-mobile">
            <div className="menu-mobile-div">
                        <ul className="menu-nave-bar">
                            <a href="/main"><li><FontAwesomeIcon icon={faHome} fixedWidth/> HOME</li></a>
                            <a href="/keys"><li ><FontAwesomeIcon icon={faKey} fixedWidth/> GERAR CHAVES</li></a>
                            <a href="/present"><li><FontAwesomeIcon icon={faMarker}/> MARCAR CHAMADA</li></a>
                            <a href="/person"><li><FontAwesomeIcon icon={faUserCheck}/> CADASTRAR PESSOAS</li></a>        
                        </ul>
                    </div>
            </section>

            <section className="content">
                <span>Olá Lindomar</span>
            </section>
            
        </>    


    )
}

export default Main;