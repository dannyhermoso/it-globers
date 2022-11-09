import React from 'react'
import s from './Rain.module.scss'
import miniUmbrella from '../../assets/mini-umbrella.png'

const Rain = () => {

    return (
        <div className={s.container}>
            <div className={s.imagen}>
                <h2>SHOP</h2>
            </div>
            <div className={s.texto}>
                <img src={miniUmbrella} className={s.miniImagen} alt='Umbrella'/>
                <h1>Pufi RAIN</h1>
                <hr />
                <h4>Descripción del producto. Este es un texto simulado.</h4>
                <h5>{`> Ver más`}</h5>
            </div>
        </div>
    )
}

export default Rain