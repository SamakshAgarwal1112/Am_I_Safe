import React, {useContext,useEffect,useState} from "react";
// import "./Login.css"
// import { signInWithGoogle } from "../../../firebase";
import { UserContext } from "../providers";
import { redirect } from "react-router-dom";
import { EmailAuthProvider, GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const user = useContext(UserContext)
    const [Redirect, setRedirect] = useState(null)
    const navigate = useNavigate();

    const signInWithGoogle = async (e)=>{
        const provider = await new GoogleAuthProvider();
        // const provider = await new EmailAuthProvider();
        return signInWithPopup(auth,provider);
    }

    useEffect(() => {
        if (user) {
        // setRedirect('/dashboard')
        navigate('/dashboard')
        }
    }, [user])
    // if (redirect) {
    //     <redirect to={Redirect}/>
    // }
    return (
        <div className="login-buttons">
            <button className="login-provider-button" onClick={signInWithGoogle}>
            <img src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt="google icon"/>
            <span> Continue with Google</span>
        </button>
        </div>
    );
}