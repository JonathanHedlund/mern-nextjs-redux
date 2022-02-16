
import styles from '../../styles/Login.module.css'

const SignupForm = ({formData, setFormData}) => {
    const { name, email, password } = formData

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
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" id="password" name="password" value={password} className={`form-control`} 
                onChange={onChangeInput}/>
            </div>
            <button type="submit" className={`btn-purple btn-large ${styles.loginButton}`}>
                Sign up for free
            </button>
        </form>
    )
}

export default SignupForm