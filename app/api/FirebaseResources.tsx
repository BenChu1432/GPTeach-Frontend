import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendEmailVerification,
    signOut,
} from "firebase/auth";
import { FIREBASE_AUTH } from "../config/firebaseConfig";

const auth = getAuth(FIREBASE_AUTH);

const signIn = async (
    email: string,
    password: string,
    setEmailVerified: (emailVerified: boolean) => void,
    setLoading: (loading: boolean) => void,
    setSigninError: (signupError: boolean) => void,
    setUserEmail: (userEmail: string) => void
) => {
    setLoading(true);
    try {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(process.env.SECRET);
                console.log("Login success!");
                const user = userCredential.user;
                if (!user.emailVerified) {
                    setEmailVerified(false);
                    sendEmailVerification(user);
                } else {
                    setEmailVerified(true);
                }
                setUserEmail(user.email!);
                setLoading(false);
                setSigninError(false);
            })
            .catch((error) => {
                console.log(error);
                setSigninError(true);
                setLoading(false);
            });
    } catch (e) {
        console.log(e);
        setSigninError(true);
        setLoading(false);
    }
};

const signup = async (
    email: string,
    password: string,
    setLoading: (loading: boolean) => void,
    setSignupError: (signupError: boolean) => void
) => {
    setLoading(true);
    try {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                sendEmailVerification(user);
                setSignupError(false);
            })
            .catch((error) => {
                console.log(error);
                setSignupError(true);
                setLoading(false);
            });
    } catch (e) {
        console.log(e);
        setSignupError(true);
        setLoading(false);
    }
};

const logout = async () => {
    const auth = getAuth();
    signOut(auth)
        .then(() => {
            // Sign-out successful.
        })
        .catch((error) => {
            console.log(error);
        });
};

export { signIn, signup, logout };
