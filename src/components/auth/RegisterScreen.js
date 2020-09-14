import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
    return (
        <>
            <h3 className="auth__title">Register</h3>
            <form>
                <input type="text"      placeholder="Name"              name="name"     className="aut__input" autoComplete="off" />
                <input type="text"      placeholder="Email"             name="email"    className="aut__input" autoComplete="off" />
                <input type="password"  placeholder="Password"          name="password" className="aut__input" />
                <input type="password"  placeholder="Confirm Password"  name="confirm"  className="aut__input" />

                <button type="submit" className="btn btn-primary btn-block mb-5">Login</button>

                
                <Link to="/auth/login" className="link">Already registered?</Link>
            </form>
        </>
    )
}
