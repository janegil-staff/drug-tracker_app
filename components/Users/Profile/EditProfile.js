import { StyleSheet, Text, View } from "react-native";

function EditProfile({user}) {
  
  return (<View><Text>{user.name}</Text></View>
  );
}

export default EditProfile;

const styles = StyleSheet.create({

});
