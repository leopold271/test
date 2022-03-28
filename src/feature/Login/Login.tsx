import React, { useState } from "react";
import { FormLayout, Form, TextField, Button, Icon } from "@shopify/polaris";
import { ViewMinor } from '@shopify/polaris-icons';
import { useFormik } from 'formik';
import * as yup from 'yup';
import styles from './login.module.scss'

export const Login = () => {

  const [error, setError] = useState('');
  const [isVisible, setIsVisible] = useState(false);

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

  const handleChange = (value: string, id: string) => {
    if (error) setError('');
    formik.handleChange({ target: { id, value } });
  };

  const handleVisibilityIconClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsVisible(!isVisible);
    e.stopPropagation();
  }

  return (
    <div className={styles.form__position}>
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
              onChange={handleChange}
              autoComplete='off'
            />
            <TextField
              value={formik.values.password}
              type={isVisible ? "text" : "password"}
              id='password'
              placeholder="enter your password"
              label='password'
              labelHidden
              error={formik.touched.password && formik.errors.password}
              onChange={handleChange}
              autoComplete='off'
              suffix=
              {<div className={styles.form__visibilityButton} onClick={handleVisibilityIconClick}>
                <Icon source={ViewMinor} color="base" />
              </div>
              }
            />
          </FormLayout>
          <Button submit outline>
            Sign in
          </Button>
        </Form>
      </div>
    </div>
  )
}