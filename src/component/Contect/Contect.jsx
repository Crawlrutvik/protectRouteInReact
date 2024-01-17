import React, { lazy } from 'react'
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';


const Contect = () => {
    const SignupSchema = Yup.object().shape({
        name: Yup.string().trim().min(2, 'Too Short!').max(50, 'Too Long!').required('name is required'),
        email: Yup.string().required('emial is required'),
        message: Yup.string().trim().min(5, 'Too Short!').max(50, 'Too Long!')

    })
    const onSubmitForm = (value, { resetForm },) => {
        console.log('value: ', value);
        resetForm({ values: '' });
    }
    const SomeComponent = lazy()
    console.log('SomeComponent: ', SomeComponent);
    return (
        <section class="contact-us" id="contact-section">
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    message: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={onSubmitForm}
            >

                {({ errors, touched }) => (
                    <Form id="contact" action="" method="post">

                        <div class="section-heading">
                            <h4>Contact us</h4>
                        </div>

                        <div class="inputField">
                            <Field type="name" name="name" id="name" placeholder="Your name" autocomplete="on" required />
                            {errors.name && touched.name ? (<div className='error'>{errors.name}</div>) : null}
                            <span class="valid_info_name"></span>
                        </div>

                        <div class="inputField">
                            <Field type="Email" name="email" id="email" placeholder="Your email" required="" />
                            {errors.email && touched.email ? (<div className='error'>{errors.email}</div>) : null}
                            <span class="valid_info_email"></span>

                        </div>

                        <div class="inputField">
                            <Field as="textarea" name="message" id="message" placeholder="Your message"/>
                            {errors.message && touched.message ? (<div className='error'>{errors.message}</div>) : null}
                            <span class="valid_info_message"></span>
                        </div>

                        <div class="inputField btn">
                            <button type="submit" id="form-submit" class="main-gradient-button" >Send a message</button>
                        </div>

                    </Form>
                )}
            </Formik>

        </section>
    )
}

export default Contect