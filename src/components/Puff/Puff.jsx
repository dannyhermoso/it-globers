import React from 'react'
import s from './Puff.module.scss'
import miniPuff from '../../assets/mini-puff.png'

const Puff = () => {

    return (
        <div className={s.container} id='puff'>
            <div className={s.texto}>
                <img src={miniPuff} className={s.miniImagen} alt='Puff'/>
                <h1>Pufi PUFF</h1>
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

export default Puff