import { useEffect, useState } from "react"
import { passwordResetFormService } from "../services/UserServices"
import { useNavigate, useParams } from "react-router-dom"


export default function PasswordResetForm() {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [passwordMatch, setPasswordMatch] = useState(true)
    const [success, setSuccess] = useState(false)
    const [response, setResponse] = useState('')

    const { token, _id } = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        if (password === confirmPassword) {
            setPasswordMatch(true)
        } else {
            setPasswordMatch(false)
        }
    // eslint-disable-next-line
    },[confirmPassword])

    useEffect(() => {
        if (success) {
            setTimeout(() => {
                navigate('/sign-in')
            }, 3000)
        }
    // eslint-disable-next-line
    }, [success])

    function handlePasswordChange (event) {
        setPassword(event.target.value)
    }

    function handleConfirmPasswordChange (event) {
        setConfirmPassword(event.target.value)
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault()
        let apiData = {
            password: password
        }
        const resetResult = await passwordResetFormService(token, _id, apiData)
        if (resetResult.error) {
            setResponse(resetResult.error)
        } else {
            setResponse(resetResult.message)
            setSuccess(true)
        }

    }

    return (
        <div>
            {success ? 
                <div>
                    <p>{response}</p>
                </div>
                :
                <div>
                    <form onSubmit={handleFormSubmit}>
                        <label>New Password</label>
                        <input type="text" onChange={handlePasswordChange} />
                        <label>Confirm New Password</label>
                        <input type="text" onChange={handleConfirmPasswordChange} />
                        <button type="submit" disabled={!passwordMatch}>Submit</button>
                    </form>
                    {!passwordMatch && 
                    <p>Passwords must match</p>
                    }
                    {response && <p>{response}</p>}
                </div>
            
            
            
            }
        </div>
    )
}