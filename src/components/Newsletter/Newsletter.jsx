import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { newEmail } from '../../Redux/slices/emailSlice'
import s from './Newsletter.module.scss'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import swal from 'sweetalert'
import { AiOutlineArrowRight } from 'react-icons/ai'

const Newsletter = () => {

    const correo = useSelector((state) => state.email)

    const dispatch = useDispatch()

    const handleAdd = () => {
        dispatch(newEmail())
    }

    const [mail, setMail] = useState(['danny@gmail.com', 'hermoso@gmail.com'])

    useEffect(() => {
        
    }, [mail])


    return(
        <div>
            <div className={s.container}>
                <h4 className={s.newletter}>NEWSLETTER</h4>
                <h2 className={s.suscribete}>SUSCRIBETE</h2>
                <h3 className={s.novedades}>Y enterate de todas las novedades</h3>


                <Formik
                    initialValues={{
                        email: '',
                    }}
                    validate={(values) => {
                        let errors = {};


                        //validacion correo
                        if (!values.email) {
                            errors.email = 'Por  favor ingresa un correo.'
                        } else if (!/[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}/.test(values.email)) {
                            errors.email = 'Escribe una direccion valida de correo.'
                        }

                        return errors;
                    }}
                    onSubmit={(values, { resetForm }) => {
                        let filtrar = mail.find(c  => c === values.email)
                        console.log(filtrar)
                        if(filtrar){
                            swal({
                                title:'Error',
                                text:'Correo ya suscrito',
                                icon:'error',
                                button:'OK'
                              })
                        }else{
                            swal({
                                title:'BIENVENIDO',
                                text:'Suscripcion realizada',
                                icon:'success',
                                button:'OK'
                              })
                              setMail([...mail, values.email])
                             resetForm() 
                        }
                
                    }}
                >
                    {({ errors }) => (
                        <Form >
                                <div>
                                    <Field
                                        type='email'
                                        id="email"
                                        placeholder="Ingresa tu email"
                                        name="email"
                                        className={s.input}
                                    />
                                    <ErrorMessage name="email"  component={() => (
                                        <div className={s.inputError}>{errors.email}</div>
                                    )} />
                                </div>
                                <div>
                                    <button type="submit" className={s.button}>{<AiOutlineArrowRight />}</button>
                                </div>
                        </Form>
                    )}
                </Formik>
        </div>
        </div>
    )
}  

export default Newsletter