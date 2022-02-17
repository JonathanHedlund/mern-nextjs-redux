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
        <div className={styles.loginContainer} >
            <div className={styles.loginContainerInner}>
                <h1 className={styles.loginHeader}>Login</h1>
                <div className={styles.loginWebContainerInner}>
                    <LoginForm formData={formData} setFormData={setFormData} />
                </div>
                <div className={styles.loginRedirectLink}>
                        Don't have an account yet?
                        <Link href="/signup">
                            <a className={`link-purple ${styles.loginLinkText}`} >
                                Register here!
                            </a>
                        </Link>
                    </div>
            </div>
        </div>
    )
}

export default login
