import React from 'react'
import './styles.css'

const Login = () => {
    function animationValide(event) {
            event.preventDefault();
            const form = document.querySelector('.form')
            const field = document.querySelector("#login-key")

            if(field.value === "") {
                form.classList.add("validate-error")
                field.classList.add("validate-error-input")
                field.focus()
            }
            
            
            const formError = document.querySelector(".validate-error")
            if (formError) {
            formError.addEventListener("animationend", event =>{
                if (event.animationName === "no"){
                    formError.classList.remove("validate-error")
                }
            })
        }
    }

    function animationSquares() {
        const ulSquares = document.querySelector('.squares')

        for(let i = 0; i < 20; i++) {
            const li = document.createElement('li')
            const random = (min, max) => Math.random() * (max - min) + min
            const size = Math.floor(random(120, 10))
            const position = random(99, 1)
            const delay = random(5, 0.1)
            const duration = random(35, 12)

            li.style.width = `${size}px`
            li.style.height = `${size}px`
            li.style.bottom = `-${size}px`

            li.style.left = `${position}%`
            li.style.animationDelay = `${delay}s`
            li.style.animationDuration = `${duration}s`
            li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`
            ulSquares.appendChild(li)
        }

    }

    // function paginaHome() {
    //     const a = document.createElement('a')

    //     a.setAttribute('href', '/main')

    //     console.log('a', a)
    // }
    return (
        <>
            {window.onload = animationSquares}

            <section className="form">
                <div className="logo">
                <h1>MSTU</h1>
                </div>

                <div className="form">
                    <form>
                        <div className="input">
                            <label for="login-name">Nome</label>
                            <input type="name" id="login-name" />
                        </div>
                        <div className="input">
                            <label for="login-key">Chave</label>
                            <input type="password" id="login-key" />
                        </div>

                        <button type="submit" id="login-btn" className="btnLogin" onClick={animationValide}>Login</button>
                    </form>
                </div>
            </section>
            
            <ul className="squares">
            </ul>
        </>
    )

}

export default Login