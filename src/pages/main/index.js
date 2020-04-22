import React from 'react'

import './styles.css'
const Main = () => {
    function animationMenu() {
        const btnMenu = document.querySelector('.menu-btn')
        const open = document.querySelector('.open')

        btnMenu.addEventListener('click', event => {
            if(!open){
                btnMenu.classList.add('open')
            }else {
                btnMenu.classList.remove('open')
            }
        })
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

            <span>Lindomar</span>
        </>    


    )
}

export default Main;