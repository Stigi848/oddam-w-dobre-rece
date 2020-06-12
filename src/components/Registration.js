import React from 'react';
import { Formik } from 'formik';
import img2 from '../assets/assets/Decoration.svg';
import { Link as ReactLink } from 'react-router-dom';

class Registration extends React.Component {
  state = {
    mail: '',
    password: ''
  }


  render() {
    const handleChange = (e) => {

      return this.setState({
        password: e.target.value
        
        
      })

    }
    return (
      <div className='registrationAll'>


        <h1>Załóż konto</h1>
        <img src={img2} />



        < div className='formik'>
          <Formik
            initialValues={{ email: '', password1: '', password2: '' }}
            validate={values => {
              const errors = {};
              if (!values.email) {
                errors.email = 'Required';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Niepoprawny email';
              }
              else if (values.password1 !== values.password2) {
                errors.email = 'hasła nie są takie same';
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
                  <p className='Registration'> Twój email:</p>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <br />
          Twoje hasło: <br />
                  {errors.email && touched.email && errors.email}
                  <input
                    type="password"
                    name="password1"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  <br />
          Powtórz hasło: <br />
                  {errors.email && touched.email && errors.email}
                  <input
                    type="password"
                    name="password2"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  <br />
                  {errors.password && touched.password && errors.password}
                  <button className='regitationBtn' type="submit" disabled={isSubmitting}>
                    Załóż konto
          </button>
                </form>
              )}
          </Formik>
        </div>
        <ReactLink className='RegistrationBtnLog' to="/log">Logowanie</ReactLink>

      </div>

    );
  }
}
export default Registration;