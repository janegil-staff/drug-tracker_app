import React, { useState } from "react";
import {  StyleSheet, Text, View } from "react-native";

import ProfileImage from "./ProfileImage";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../store/auth-context";
import { API_URL } from "../../../constants/http";
import axios from "axios";
import IconButton from "../../UI/IconButton";
import { useNavigation } from "@react-navigation/native";
import EditUserScreen from "../../../screens/EditUserScreen";

function UserProfile() {
  const navigation = useNavigation();
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
 
  const userPressHandler = () => {

    navigation.navigate('EditUserScreen', {
      user: user,
    });
  }

  return (
    <>
      <ProfileImage />
      <View style={styles.nameContainer}>
        {hasUser && (
          <Text style={styles.nameItem}>
            {user.name ? user.name : "Anonymous"}
          </Text>
        )}
      </View>
      <View style={styles.iconButton}>
        <IconButton
          icon="settings"
          color="black"
          size={32}
          onPress={userPressHandler}
        />
      </View>
    </>
  );
}

export default UserProfile;

const styles = StyleSheet.create({
  iconButton: {
    paddingTop: 16,
    alignItems: "center",
  },
  nameItem: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: '90%',
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
