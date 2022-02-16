import styles from '../styles/Login.module.css'

const LoginLayout = ({children}) => {

    return (
        <div className={styles.loginLayoutBackground}>
            <div className={styles.loginLayoutInner}>
                {children}
            </div>
            <div className={styles.loginLayoutSlantedBackground} />
        </div>
  )
}

export default LoginLayout