import Link from 'next/Link'

import styles from '../../styles/Home.module.css'

export const Header = () => {
  return (
    <div className={styles.headerContainer}>
        <div className={styles.headerContainerInner}>
            <Link href="/">
                <a >
                    <h2>Hobbies</h2>
                </a>
            </Link>
            <div className={styles.headerActionLinks}>
            <Link href="/login">
                <a className="link-purple">
                    Login
                </a>
            </Link>
            <Link href="/signup">
                <a className={`btn btn-purple ${styles.headerSignupButton}`}>
                    Sign up
                </a>
            </Link>
            </div>
        </div>
    </div>
  )
}

export default Header