import React from "react";
import { FormLayout, Form, TextField, Button } from "@shopify/polaris";
import { useFormik } from 'formik';
import * as yup from 'yup';
import styles from './login.module.scss'

export const Login = () => {

  const loginSchema = yup.object().shape({
    password: yup
      .string()
      .min(6, 'Password must be 6 or more characters')
      .required('Password is a required'),
    email: yup.string().email('Invalid email').required('Email is required'),
  });

  const formik = useFormik<{ email: string; password: string }>({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: loginSchema,
    onSubmit: () => alert('submit')
  })

  return (
    <div className={styles.form__wrapper}>
      <p>Please sign in</p>
      <Form onSubmit={() => alert('submit')}>
        <FormLayout>
          <TextField
            value={formik.values.email}
            type='email'
            id='email'
            placeholder="example@gmail.com"
            label='d'
            labelHidden
            error={formik.touched.email && formik.errors.email}
            onChange={formik.handleChange}
            autoComplete='off'
          />
          <TextField
            value={formik.values.password}
            type='password'
            id='password'
            placeholder="enter your password"
            label='password'
            labelHidden
            error={formik.touched.password && formik.errors.password}
            onChange={formik.handleChange}
            autoComplete='off'
          />
        </FormLayout>
        <Button submit outline>
          Sign in
        </Button>
      </Form>
    </div>
  )
}