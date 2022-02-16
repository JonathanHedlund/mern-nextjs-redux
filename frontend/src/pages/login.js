import Link from 'next/Link'

import { useEffect, useState } from 'react'

import LoginForm from '../components/Login/LoginForm'

import styles from '../styles/Login.module.css'

const login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    return (
        <div>
            <h1 className={styles.loginHeader}>Login</h1>
            <LoginForm formData={formData} setFormData={setFormData} />
            <div className={styles.loginRedirectLink}>
                Don't have an account yet?
                <Link href="/signup">
                    <a className={`link-purple ${styles.loginLinkText}`} >
                        Register here!
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default login
