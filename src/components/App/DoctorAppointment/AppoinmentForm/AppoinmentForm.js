import { Link } from "react-router-dom";;
import { Form, Formik, Field, ErrorMessage } from "formik";

import arrow from '../../../../assets/History/right-arrow-forward-svgrepo-com.svg';

import * as yup from 'yup';

const AppoinmentForm = () => {
    

    return(
        <div className="appointment_content">
            <Link to='/appointment' className="appointment_back"><img src={arrow} alt="Back" /> НАЗАД</Link>
            <Formik
                initialValues={{
                    name : '',
                    phone : '',
                    date : '',
                    text : '',
                }}
                validationSchema = {yup.object({
                    name : yup.string()
                                .required('Обязательное поле!')
                                .min(2,'Не меньше 2 символов'),
                    phone : yup.string()
                                .required('Обязательное поле!'),
                    date : yup.date()
                                .required('Выберите ориентировочную дату'),
                    text : yup.string()
                                .required('Опишите проблему')
                                .min(10,'Минимум 10 символов')
                })}
                onSubmit = {(values, {resetForm}) => {
                    console.log(values)
                    resetForm({values : ''})
                }}
            >
                <Form className="form">
                    <div className="form_name">
                        <Field 
                            name = 'name'
                            id = 'name'
                            type = 'text'
                            placeholder = 'ФИО'
                            className='form_input'
                        />
                        <ErrorMessage 
                            name='name'
                            className="form_error"
                            component='div'
                        />
                    </div>
                    <div className="form_phoneAndDate">
                        <div className="form_phone-number">
                            <Field 
                                name = 'phone'
                                id = 'phone'
                                type = 'tel'
                                placeholder = 'Телефон'
                                className='form_input'
                            />
                            <ErrorMessage 
                                name='phone'
                                className="form_error"
                                component='div'
                            />
                        </div>
                        <div className="form_date">
                            <Field 
                                name = 'date'
                                id = 'date'
                                type = 'datetime-local'
                                placeholder = 'Желаемая дата'
                                className='form_input'
                            />
                            <ErrorMessage 
                                name='date'
                                className="form_error"
                                component='div'
                            />
                        </div>
                    </div>
                    <div className="form_textArea">
                        <Field 
                            as='textarea'
                            name = 'text'
                            id = 'text'
                            type = 'textarea'
                            placeholder = 'Опишите проблему'
                            className='form_input form_textarea'
                        />
                        <ErrorMessage 
                            name='text'
                            className="form_error"
                            component='div'
                        />
                    </div>
                    <button type="submit" className="form_submit-btn slider_item-button">Записаться</button>
                </Form>
            </Formik>  
        </div>
    )
}

export default AppoinmentForm