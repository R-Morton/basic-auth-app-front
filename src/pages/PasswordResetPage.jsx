import { useEffect, useState } from "react"
import { passwordResetPageValidation } from "../services/UserServices"
import PasswordResetForm from "../components/PasswordResetForm"
import { useParams } from "react-router-dom"


export default function PasswordResetPage() {

    const [errorState, setErrorState] = useState(null)
    const { token, _id } = useParams()


    useEffect(() => {
        passwordResetPageValidation(token, _id)
        .then((response) => {
            if (response.error) {
                setErrorState(true)
            }
        })
    // eslint-disable-next-line
    }, [])

    return(
        <div>
            {!errorState ? 
            <PasswordResetForm />
            :
            <p>You are not authenticated</p>
            }
        </div>
    )
}