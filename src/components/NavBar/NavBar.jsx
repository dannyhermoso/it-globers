import React from 'react'
import s from './Navbar.module.scss'
import { MdChair } from 'react-icons/md'
import { FiUmbrella } from 'react-icons/fi'
import { BsHandbag } from 'react-icons/bs'
import { AiOutlineInbox } from 'react-icons/ai'
import { IoIosArrowDropdownCircle } from 'react-icons/io'

const NavBar = () => {


    return(
        <div className={s.container}>
            <div className={s.logo}>
                <h1>Pufi</h1>
            </div>
            <div className={s.center}>
                <h2 href='#puff'>
                    <MdChair className={s.icon}/>
                    PUFI PUFF
                </h2>
                <h2>
                    <FiUmbrella className={s.icon}/>
                    PUFI RAIN
                </h2>
                <h2>
                    <BsHandbag className={s.icon}/>
                    PUFI CART
                </h2>
                <h2>
                    <AiOutlineInbox className={s.icon}/>
                    PUFI NAP
                </h2>
            </div>
            <div className={s.account}>
                <h4>
                    MI CUENTA 
                    <IoIosArrowDropdownCircle  className={s.icono}/>
                </h4>
                <h4>
                    MI COMPRA
                </h4>
            </div>
        </div>
    )
}

export default NavBar