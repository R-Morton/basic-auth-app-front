import { useState } from "react"
import { useUserDispatch } from "../contexts/userContext"
import { createUser } from "../services/UserServices"

export default function SignUp() {
    
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

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
                type: "create",
                data: localData
            })
            console.log(token)
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