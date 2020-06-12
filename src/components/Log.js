import React from 'react';
import { Formik } from 'formik';
import img2 from '../assets/assets/Decoration.svg';
import { Link as ReactLink } from 'react-router-dom';

const Log = () => {
    return (  
        
<div className='registrationAll'>


<h1>Zaloguj</h1>
<img src={img2}/>



< div className='formikLog'>
<Formik
  initialValues={{ email: '', password1: ''}}
  validate={values => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Błędny email';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Niepoprawny email';
    }
    return errors;
  }}
  onSubmit={(values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  }}
>
  {({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  }) => (
    <form onSubmit={handleSubmit}>
      <p className='LogInP'> Twój email:</p> <br/>
      <input
        type="email"
        name="email"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
      /> 
      <br/>
      <br/>
      Twoje hasło: <br/>
      {errors.email && touched.email && errors.email}
      <input
        type="password"
        name="password1"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
      />
      {errors.password && touched.password && errors.password}
      <button className='LogInBtn' type="submit" disabled={isSubmitting}>
      Załóż konto
      </button>
    </form>
  )}
</Formik>
</div>
<ReactLink className= 'LogInBtnRegis' to="/registration">Rejestracja</ReactLink>

</div>

    );
}
 
export default Log;






