
import { View, Text} from 'react-native';
import UserForm from '../components/Users/Profile/UserForm';

const EditUserScreen = ({route}) => {

  console.log(route.params);
  return <View>
    <Text></Text>
    <UserForm />
    </View>
}

export default EditUserScreen; 