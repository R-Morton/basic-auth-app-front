import { useState } from "react"
import { passwordResetEmail } from "../services/UserServices"


export default function PasswordResetEmailComponent(props) {

    const [email, setEmail] = useState('')
    const [result, setResult] = useState('')

    function handleEmailChange(event) {
        setEmail(event.target.value)
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault()
        let apiData = {
            email: email
        }

        const resetResult = await passwordResetEmail(apiData)
        setResult(resetResult.message || resetResult.error)
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <label>Email</label>
                <input type="text" onChange={handleEmailChange} />
                <button type="submit">Submit</button>
                <button onClick={props.back}>Back</button>
            </form>
            <p>{result}</p>
        </div>
    )
}