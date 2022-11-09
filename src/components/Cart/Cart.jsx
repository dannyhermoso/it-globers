import React from 'react'
import s from './Cart.module.scss'
import miniCart from '../../assets/mini-cart.png'

const Cart = () => {

    return (
        <div className={s.container}>
            <div className={s.imagen}>
                <h2>SHOP</h2>
            </div>
            <div className={s.texto}>
                <img src={miniCart} className={s.miniImagen} alt='Cart'/>
                <h1>Pufi CART</h1>
                <hr />
                <h4>Descripción del producto. Este es un texto simulado.</h4>
                <h5>{`> Ver más`}</h5>
            </div>
        </div>
    )
}

export default Cart