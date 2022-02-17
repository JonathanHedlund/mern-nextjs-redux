import { useRouter } from 'next/router' 

import LoginLayout from '../layouts/LoginLayout'
import DashboardLayout from '../layouts/DashboardLayout'

const LayoutPicker = ({children}) => {
    const router = useRouter()

    if (router.pathname.startsWith("/login") || router.pathname.startsWith("/signup")) {
        return (
            <LoginLayout children={undefined}>
                {children}
            </LoginLayout>
        )
    }

    else return (
        <>
            {children}
        </>
    )

}

export default LayoutPicker