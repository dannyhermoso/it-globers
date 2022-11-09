import React from 'react'
import s from './Social.module.scss'
import fotos from '../../assets/fotos.png'
    
const Social = () => {

    return(
        <div className={s.container}>
            <h4 className={s.instagram}>INSTAGRAM</h4>
            <h2 className={s.espufi}>#ESPUFI</h2>
            <img src={fotos} alt='fotos' className={s.fotos}/>
        </div>
    )
 }

 export default Social