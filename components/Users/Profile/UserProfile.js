import { StyleSheet, Text, View } from "react-native";
import ProfileImage from "./ProfileImage";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../store/auth-context";
import { API_URL } from "../../../constants/http";
import axios from "axios";

function UserProfile() {

  const [loadedUser, setLoadedUser] = useState();
  const auth = useContext(AuthContext);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        let url = `${API_URL}/users`;
        await axios
          .get(url, {
            headers: {
              Authorization: "Bearer " + auth.token,
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            setLoadedUser(response.data.user);
          });
      } catch (err) {
        console.log("An error has occured", err);
      }
    };
    fetchUser();
  }, []);

  let hasUser = false;
  let user;
  if (loadedUser) {
    user = loadedUser;
    hasUser = true;
  }


  return <>
  <ProfileImage />
  <View style={styles.nameContainer}>
    {hasUser && <Text style={styles.nameItem}>{user.name}</Text>}
  </View>
   
  </>
}

export default UserProfile;

const styles = StyleSheet.create({
  nameContainer: {
  
  },
  nameItem: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold' 
  }
});