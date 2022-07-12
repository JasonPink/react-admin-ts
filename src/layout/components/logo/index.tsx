import logo from '@/assets/images/logo.png'
import { useSelector } from 'react-redux'

const Logo = (props: any) => {
  const { isCollapsed } = useSelector((state) => state.menu)

  return (
    <div className="logo-wrap">
      <img src={logo} alt="logo" className="logo-img" />
      {!isCollapsed ? <h2 className="logo-text">React Admin</h2> : null}
    </div>
  )
}

export default Logo
