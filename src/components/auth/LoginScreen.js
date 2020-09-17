import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm';
import { login } from '../../actions/auth';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const initialForm = {
        email: 'charly@gmail.com',
        password: '123456'
    };
    
    const [ formValues, handleInputChange ] = useForm( initialForm );

    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(login());
    }

    return (
        <>
            <h3 className="auth__title">Login</h3>
            <form onSubmit={ handleLogin } >
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="aut__input"
                    value={ email }
                    onChange={ handleInputChange }
                    autoComplete="off"
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="aut__input"
                    value={ password }
                    onChange={ handleInputChange }
                />

                <button type="submit" className="btn btn-primary btn-block">Login</button>

                <div className="auth__social-networks">
                    <p>Login with Social Networks</p>
                    <div className="google-btn">
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                <Link to="/auth/register" className="link">Create New Account</Link>
            </form>
        </>
    )
}
