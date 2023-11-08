import { useContext, useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { login } from '../util/auth';
import LoadingOverlay from '../components/UI/LoadingOverlay';
import { AuthContext } from '../store/auth-context';

function LoginScreen() {
  const authCtx = useContext(AuthContext);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  async function loginHandler({email, password}) {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      authCtx.authenticate(token);
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