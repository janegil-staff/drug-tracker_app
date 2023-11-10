import { Image, StyleSheet, Text, View } from "react-native";

function ProfileImage() {
  return (
    <View style={styles.container}>
    <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../../assets/images/avatar.webp")}
        />
      </View>
    </View>
  );
}

export default ProfileImage;

const styles = StyleSheet.create({
  container: {
    marginVertical: 64,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    borderWidth: 1,
    borderRadius:'50%',
    overflow: 'hidden'
  },
  image: {
    width: 200,
    height: 200,
    borderRadius:'50%',
  }
});
