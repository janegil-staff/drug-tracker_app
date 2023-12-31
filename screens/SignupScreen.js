import { useContext, useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from '../components/UI/LoadingOverlay';
import { createUser } from "../util/auth";
import { AuthContext } from "../store/auth-context";
import { Alert } from "react-native";
function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  
  const authCtx = useContext(AuthContext);
  async function signupHandler({email, password}) {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token);
    } catch(err) {
      Alert.alert('Authentication failed', 
      'Could not create user. Please check you credential or try again later');
      setIsAuthenticating(false);
    }
  }

  if(isAuthenticating) {
    return <LoadingOverlay maessege="Creating user..." />
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
