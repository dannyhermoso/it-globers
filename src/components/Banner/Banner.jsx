import React from 'react'
import beachGirl from '../../assets/beach-girl.jpeg'
import s from './Banner.module.scss'
import NavBar from '../NavBar/NavBar'

const Banner = () => {

    return(
        <div className={s.container}>
            <NavBar />
            <h1 className={s.frase}>
                ESTAR CÓMODO NUNCA FUE TAN FÁCIL
            </h1>
            <h3 className={s.shop}>
                SHOP
            </h3>
        </div>
    )
}

export default Banner