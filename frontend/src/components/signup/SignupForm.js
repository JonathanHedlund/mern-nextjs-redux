import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { register, reset } from "../../features/auth/authSlice";


import styles from '../../styles/Login.module.css'

const SignupForm = ({formData, setFormData}) => {
    const router = useRouter();

    const { name, email, password } = formData

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

    }, [user, isError, isSuccess, message, router, dispatch])

    const onChangeInput = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }
    
    async function onSubmit(e) {
        e.preventDefault()

        const newUser = { ...formData }

        dispatch(register(newUser))
    }

    

    return (
        <form onSubmit={onSubmit}>
            <div className="formInputContainer">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" id="name" name="name" value={name} className={`form-control`} 
                onChange={onChangeInput}/>
            </div>
            <div className="formInputContainer">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" name="email" value={email} className={`form-control`} 
                onChange={onChangeInput}/>
            </div>
            <div className="formInputContainer">
                <label htmlFor="password" className="form-label">Create a password</label>
                <input type="password" id="password" name="password" value={password} className={`form-control`} 
                onChange={onChangeInput}/>
            </div>
            <button type="submit" className={`btn-purple btn-large ${styles.loginButton}`}>
                Sign up for free!
            </button>
        </form>
    )
}

export default SignupForm
