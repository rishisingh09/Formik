import React from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup";

const initialValues = {
    name: 'Rishi',
    email: '',
    channel: ''
}

const onSubmit = (values) => {
    console.log(values);
}

const validate = (values) => {
    let errors = {}

    if (!values.name && values.name.length === 0) {
        errors.name = "Name is Required"
    }
    if (!values.email && values.email.length === 0) {
        errors.email = "Email is Required"
    } else if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/).test(values.email)) {
        errors.email = "Invalid Email Format"
    }
    if (!values.channel && values.channel.length === 0) {
        errors.channel = "Channel is Required"
    }

    return errors;
}

const validationSchema = Yup.object({
    name: Yup.string().required('Name is Required !'),
    email: Yup.string()
        .email('Invalid Email Format !')
        .required('Email is Required !'),
    channel: Yup.string().required('Channel is Required !')
})

const YoutubeForm = () => {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })
    console.log("Form Errors --", formik.touched);
    return (
        <div className="signupFrm">
            <form action="" className="form" onSubmit={formik.handleSubmit}>
                <h1 className="title">Youtube Form</h1>

                <div className="inputContainer">
                    <label htmlFor="" className="label">Name</label>
                    <input type="text"
                        className="input"
                        placeholder="Name"
                        name='name'
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        onBlur={formik.handleBlur}
                    />
                    {(formik.touched.name && formik?.errors?.name) && <div className='errors'>{formik.errors.name}</div>}
                </div>

                <div className="inputContainer">
                    <label htmlFor="" className="label">Email</label>
                    <input type="text"
                        className="input"
                        placeholder="Email"
                        name='email'
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                    />
                    {(formik.touched.email && formik?.errors?.email) && <div className='errors'>{formik.errors.email}</div>}
                </div>

                <div className="inputContainer">
                    <label htmlFor="" className="label">Channel</label>
                    <input type="text"
                        className="input"
                        placeholder="Channel"
                        name='channel'
                        onChange={formik.handleChange}
                        value={formik.values.channel}
                        onBlur={formik.handleBlur}
                    />
                    {(formik.touched.channel && formik?.errors?.channel) && <div className='errors'>{formik.errors.channel}</div>}
                </div>

                <div className="inputContainer">
                    <input type="submit" className="submitBtn" value="Submit" />
                </div>

            </form>
        </div>

    )
}

export default YoutubeForm;

