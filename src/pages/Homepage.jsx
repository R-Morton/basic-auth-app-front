import { useCookies } from "react-cookie"
import { Link } from "react-router-dom"

export default function Homepage() {
    // eslint-disable-next-line
    const [cookies, setCookie, removeCookie] = useCookies()
    
    const handleLogout = () => {
        removeCookie('authorization')
    }

    return (
        <div>
            <h1>Some homepage</h1>
            {cookies.authorization ? 
            <button onClick={handleLogout}>Logout</button>
            :
            <div>
            <button><Link to={'/sign-up'}>Sign up </Link></button>
            <button>Sign In</button>
            </div>
            }
        </div>
    )
}