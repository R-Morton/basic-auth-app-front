import SignInForm from "../components/SignInForm";
import { useState } from "react";
import PasswordResetEmailComponent from "../components/PasswordResetEmail";

export default function SignIn() {

    const [passReset, setPassReset] = useState(false)

    function handlePassReset() {
        setPassReset(!passReset)
    }

    return (
        <div>
            {passReset ? 
                <PasswordResetEmailComponent back={handlePassReset} />
            :
                <div>
                    <h1>Sign in</h1>
                    <SignInForm />
                    <button onClick={handlePassReset}>Forgot password?</button>
                </div>
            }
        </div>
    )
}