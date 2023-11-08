import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from '../components/UI/LoadingOverlay';
import { createUser } from "../util/auth";
function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  async function signupHandler({email, password}) {
    try {
      await createUser(email, password);
    } catch(err) {
      Alert.alert('Authentication failed', 
      'Could not create user. Please check you credential or try again later');
    }
  }

  if(isAuthenticating) {
    return <LoadingOverlay maessege="Creating user..." />
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
