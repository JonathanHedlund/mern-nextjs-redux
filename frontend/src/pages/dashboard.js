import { useRouter } from 'next/router'

import { useUser } from '../hooks/user'

import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

const dashboard = () => {
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    router.push('/')
  }

  const router = useRouter()
  return (
    <div>
        <p>
            hej dashboard fucker {user && user.name}, klicka här för att logga ut
        </p>
        <button onClick={onLogout}>logga ut</button>
    </div>
  )
}

export default dashboard