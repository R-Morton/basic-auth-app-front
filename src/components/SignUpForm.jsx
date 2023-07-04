import { useState } from "react"
import { useUserDispatch } from "../contexts/userContext"
import { createUser } from "../services/UserServices"
import { useNavigate } from "react-router-dom"
import { useCookies } from "react-cookie"

export default function SignUp() {
    
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    // eslint-disable-next-line
    const [cookies, setCookie] = useCookies(['auth'])
    const navigate = useNavigate()

    const userDispatch = useUserDispatch()

    function handleEmailChange (event) {
        setEmail(event.target.value)
    }

    function handlePasswordChange (event) {
        setPassword(event.target.value)
    }

    function handleNameChange (event) {
        setName(event.target.value)
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault()
        let apiData = {
            email: email,
            name: name,
            password: password
        }
        const createUserResult = await createUser(apiData)
        const token = createUserResult.token
        const localData = createUserResult.response
        if (token) {
            userDispatch({
                type: "login",
                data: localData
            })

            // set token into a cookie
            // create and set an expiration date
            const expirationDate = new Date();
            expirationDate.setDate(expirationDate.getDate() + 7)

            // set cookie with data
            setCookie('authorization', token, {path: '/', secure: true, expires: expirationDate})
            navigate('/')
        } else {
            console.log("Something wrong happened")
        }
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <label>Email:</label>
                <input type="text" onChange={handleEmailChange} />

                <label>Password:</label>
                <input type="text" onChange={handlePasswordChange} />

                <label>Name:</label>
                <input type="text" onChange={handleNameChange} />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}