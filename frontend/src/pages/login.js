import Link from 'next/link'

import React, { useEffect, useState } from 'react'

import LoginForm from '../components/login/LoginForm'

import styles from '../styles/Login.module.css'


function Login() {
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
                    <Link href="/signup">
                        <a>
                            Don&apos;t have an account yet? 
                            <br className={styles.loginLinkTextBreak}/> <span className={`link-purple ${styles.loginLinkText}`}>
                                Register here!
                            </span>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login
