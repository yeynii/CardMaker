import { firebaseApp } from "./firebase";
import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";

class AuthService {
  auth = getAuth(firebaseApp);
  login(providerName) {
    let provider;
    if (providerName === "Google") provider = new GoogleAuthProvider();
    if (providerName === "Github") provider = new GithubAuthProvider();
    return signInWithPopup(this.auth, provider);
  }
  logout() {
    signOut(this.auth);
  }

  onAuthChange(onUserChanged){
    onAuthStateChanged(this.auth, user => onUserChanged(user));
  }
}

export default AuthService;
