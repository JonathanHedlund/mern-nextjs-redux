import Link from 'next/link'
import { useEffect, useState } from 'react'

import SignupForm from '../components/Signup/SignupForm'

import styles from '../styles/Login.module.css'

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginContainerInner}>        
        <h1 className={styles.loginHeader}>Sign up</h1>
          <div className={styles.loginWebContainerInner}>
            <SignupForm formData={formData} setFormData={setFormData} />
          </div>
            <div className={styles.loginRedirectLink}>
              <Link href="/login">
                <a>
                  Already have an account? <span className={`link-purple ${styles.loginLinkText}`}>
                      Login!
                  </span>
                </a>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default Signup