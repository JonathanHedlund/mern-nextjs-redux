import { useState } from 'react/cjs/react.development'

import styles from '../../styles/Login.module.css'

const LoginForm = ({formData, setFormData}) => {
    const { email, password } = formData

    const onChangeInput = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }
    
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="formInputContainer">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" name="email" id="email" value={email} className={`form-control`} 
                onChange={onChangeInput} />
            </div>
            <div className="formInputContainer">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" name="password" id="password" value={password} className={`form-control`} 
                onChange={onChangeInput} />
            </div>
            <button type="submit" className={`btn-purple btn-large ${styles.loginButton}`}>
                Login
            </button>
        </form>
    )
}

export default LoginForm