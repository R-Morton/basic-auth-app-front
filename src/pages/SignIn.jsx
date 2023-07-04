import { Link } from "react-router-dom";
import SignInForm from "../components/SignInForm";

export default function SignIn() {
    return (
        <div>
            <h1>Sign in</h1>
            <SignInForm />
            <p>Forgot password?</p>
            <Link>Reset Password</Link>
        </div>
    )
}