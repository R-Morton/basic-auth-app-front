import { useEffect } from "react"
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom"


export default function SecurePage() {
    const [cookies, setCookies] = useCookies()
    const navigate = useNavigate()

    const redirect = () => {
        setTimeout(() => {
            navigate('/')
        }, 3000)
    }

    useEffect(() => {
        if (!cookies.authorization) {
            redirect()
        }
    }, [])


    return (
        <div>
            {cookies.authorization ? 
            <h1>You are in a secure page</h1>
            :
            <p>You are not authorized for this page. Redirecting you in 3 seconds ...</p>
            }
        </div>
    )
}