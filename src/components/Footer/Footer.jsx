import React from 'react'
import s from './Footer.module.scss'
import { FaQrcode, FaFacebookF, FaTwitter } from 'react-icons/fa'
import { ImInstagram } from 'react-icons/im'
import { GiCheckedShield } from 'react-icons/gi'
import { MdStars } from 'react-icons/md'

const Footer = () => {
    return(
        <div className={s.cuerpo}>
            <div className={s.containerColumn}>
                <div className={s.containerRowTop}>
                    <div>
                        <h1>Pufi</h1>
                    </div>
                    <div>
                        <h3>PUFI RAIN</h3>
                        <h3>PUFI PUFF</h3>
                        <h3>PUFI CART</h3>
                        <h3>PUFI NAP</h3>
                    </div>
                    <div>
                        <h3>CONTACTO</h3>
                        <h3>AYUDA</h3>
                        <h3>CÓMO COMPRAR</h3>
                        <h3>TERMINOS & CONDICIONES</h3>
                    </div>
                    <div>
                        <h3>COMPRA 100% SEGURA</h3>
                        <div className={s.flexRow}>

                            <FaQrcode className={s.icono}/> 

                            <GiCheckedShield className={s.icono}/> 
                            
                            <div className={s.flexColumn}>
                                <h5>COMPRA CON<br />
                                LA GARANTÍA<br /> 
                                DE PUFI<br /></h5>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={s.flexRowSocial}>
                            <h3>SIGUENOS </h3>
                            <h3>EN</h3>
                            <FaFacebookF className={s.iconos}/>
                            <FaTwitter className={s.iconos}/>
                            <ImInstagram className={s.iconos}/>
                        </div>
                    </div>
                </div>
                <div className={s.containerRow}>
                    <div className={s.primer}>PUFI COPYRIGTH 2017 Todos los derechos reservados</div>
                    <div className={s.segundo}><MdStars />BRANDLIVE</div>
                    
                </div>
            </div>
        </div>
    )
}

export default Footer