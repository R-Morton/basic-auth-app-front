import { useState } from "react";
import { useUserDispatch } from "../contexts/userContext";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/UserServices";


export default function SignInForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const userDispatch = useUserDispatch()
    // eslint-disable-next-line
    const [cookies, setCookie] = useCookies()
    const navigate = useNavigate()

    function handleEmailChange(event) {
        setEmail(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault()
        let apiData = {
            email: email,
            password: password
        }

        const loginResult = await loginUser(apiData)
        const token = loginResult.token
        const localData = loginResult.response
        if (token) {
            userDispatch({
                type: "login",
                data: localData
            })
            const expirationDate = new Date();
            expirationDate.setDate(expirationDate.getDate() + 7)

            // set cookie with data
            setCookie('authorization', token, {path: '/', secure: true, expires: expirationDate})
            navigate('/')
        } else {
            console.log("something went wrong")
        }
        
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <label>Email:</label>
                <input type="text" onChange={handleEmailChange}></input>
                <label>Password:</label>
                <input type="text" onChange={handlePasswordChange}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}