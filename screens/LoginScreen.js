import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { login } from '../util/auth';
import LoadingOverlay from '../components/UI/LoadingOverlay';

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  async function loginHandler({email, password}) {
    setIsAuthenticating(true);
    try {
      await login(email, password);
    } catch(err) {
      Alert.alert('Authentication failed', 'Could not log you in. Please check you credential or try again later');
    }
  
    setIsAuthenticating(false);
  }

  if(isAuthenticating) {
    return <LoadingOverlay maessege="Logging you in..." />
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;