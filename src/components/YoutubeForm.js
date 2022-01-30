import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import TextError from './TextError';

const initialValues = {
    name: 'Rishi',
    email: '',
    channel: '',
    comments: '',
    address: '',
    social:{
        facebook:'',
        twitter:''
    }
}

const onSubmit = (values) => {
    console.log(values);
}

const validationSchema = Yup.object({
    name: Yup.string().required('Name is Required !'),
    email: Yup.string()
        .email('Invalid Email Format !')
        .required('Email is Required !'),
    channel: Yup.string().required('Channel is Required !')
})


const YoutubeForm = () => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <div className="signupFrm">
                <Form action="" className="form">
                    <h1 className="title">Youtube Form</h1>

                    <div className="inputContainer">
                        <label htmlFor="" className="label">Name</label>
                        <Field type="text"
                            className="input"
                            placeholder="Name"
                            name='name'
                        />
                        <ErrorMessage name='name' component={TextError} />
                    </div>

                    <div className="inputContainer">
                        <label htmlFor="" className="label">Email</label>
                        <Field type="text"
                            className="input"
                            placeholder="Email"
                            name='email'
                        />
                        <ErrorMessage name='email' />
                    </div>

                    <div className="inputContainer">
                        <label htmlFor="" className="label">Channel</label>
                        <Field type="text"
                            className="input"
                            placeholder="Channel"
                            name='channel'
                        />
                        <ErrorMessage name='channel' />
                    </div>

                    <div className='inputContainer'>
                        <label htmlFor='address'>Address</label>
                        <Field id='address' name='address'>
                            {(props) => {
                                const { field, form, meta } = props;
                                return (
                                    <div>
                                        <input id='address' {...field}/>
                                        {(meta.touched && meta.error) && <div>{meta.error}</div>}
                                    </div>
                                )
                            }}
                        </Field>
                    </div>

                    <div className='inputContainer'>
                        <label htmlFor='comments'>Comments</label>
                        <Field as='textarea' id='comments' name='comments'></Field>
                    </div>

                    <div className='inputContainer'>
                        <label htmlFor='facebook'>Facebook</label>
                        <Field type="text"
                            className="input" id='facebook' name='social.facebook'></Field>
                    </div>

                    <div className='inputContainer'>
                        <label htmlFor='twitter'>Twitter</label>
                        <Field type="text"
                            className="input" id='twitter' name='social.twitter'></Field>
                    </div>

                    <div className="inputContainer">
                        <input type="submit" className="submitBtn" value="Submit" />
                    </div>
                </Form>
            </div>
        </Formik>

    )
}

export default YoutubeForm;

