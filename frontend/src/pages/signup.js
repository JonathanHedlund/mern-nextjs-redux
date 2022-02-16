import Link from 'next/Link'
import { useEffect, useState } from 'react'

import SignupForm from '../components/Signup/SignupForm'

import styles from '../styles/Login.module.css'

const signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  return (
    <>
        <h1 className={styles.loginHeader}>Sign up</h1>
            <SignupForm formData={formData} setFormData={setFormData} />
            <div className={styles.loginRedirectLink}>
                Already have an account?
                <Link href="/login">
                    <a className={`link-purple ${styles.loginLinkText}`} >
                        Login!
                    </a>
                </Link>
            </div>
    </>
  )
}

export default signup