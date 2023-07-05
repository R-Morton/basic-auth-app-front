import { useCookies } from "react-cookie"
import { Link } from "react-router-dom"
import { useUserData } from "../contexts/userContext"
import { useEffect } from "react"
import { findUser } from "../services/UserServices"

export default function Homepage() {
    // eslint-disable-next-line
    const [cookies, setCookie, removeCookie] = useCookies()
    const userData = useUserData()
    
    const handleLogout = () => {
        removeCookie('authorization')
        localStorage.clear()
    }

    useEffect(() => {
        let user = userData._id
        findUser(user)
        .then((response) => {
            if (!response._id) {
                handleLogout()
            }
        })
    }, [])

    return (
        <div>
            <h1>Some homepage</h1>
            {cookies.authorization ? 
            <button onClick={handleLogout}>Logout</button>
            :
            <div>
            <button><Link to={'/sign-up'}>Sign up </Link></button>
            <button><Link to={'/sign-in'}>Sign in</Link></button>
            </div>
            }
        </div>
    )
}