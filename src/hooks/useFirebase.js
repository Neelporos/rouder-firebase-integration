import { useState } from "react"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import App from "../firebase.init";


const auth = getAuth(App)
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});



    const singInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user)
                console.log(user);
            })

    }
    return { user, singInWithGoogle }
}

export default useFirebase;