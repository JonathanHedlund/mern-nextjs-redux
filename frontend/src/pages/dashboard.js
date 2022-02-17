import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

const dashboard = () => {
  const router = useRouter()

  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    if (!user) {
      router.push('/')
    }
  }, [user])
  

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
  }

  return (
    <div>
        <p>
            hej dashboard {user && user.name}, <span className="link-purple" onClick={onLogout}>klicka här för att logga ut</span>
        </p>
    </div>
  )
}

export default dashboard