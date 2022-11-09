import React from 'react'
import s from './Nap.module.scss'
import miniNap from '../../assets/mini-nap.png'

const Nap = () => {

    return (
        <div className={s.container}>
            <div className={s.texto}>
                <img src={miniNap} className={s.miniImagen} alt='Nap'/>
                <h1>Pufi NAP</h1>
                <hr />
                <h4>Descripción del producto. Este es un texto simulado.</h4>
                <h5>{`> Ver más`}</h5>
            </div>
            <div className={s.imagen}>
                <h2>SHOP</h2>
            </div>
        </div>
    )
}

export default Nap