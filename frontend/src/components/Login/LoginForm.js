import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { login, reset } from "../../features/auth/authSlice";


import styles from '../../styles/Login.module.css'

const LoginForm = ({formData, setFormData}) => {
    const router = useRouter();

    const { email, password } = formData

    const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        if (isSuccess || user) {
            router.push('/dashboard')
        }

        dispatch(reset())

    }, [user, isError, isSuccess, message, dispatch])

    const onChangeInput = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }
    
    async function onSubmit(e) {
        e.preventDefault()

        const loginUser = { ...formData }

        dispatch(login(loginUser))
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