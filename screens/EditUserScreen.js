import { View, Text } from "react-native";
import UserForm from "../components/Users/Profile/UserForm";

const EditUserScreen = ({ route }) => {
  const { user } = route.params;
  return (
    <View>
      <UserForm user={user} />
    </View>
  );
};

export default EditUserScreen;
