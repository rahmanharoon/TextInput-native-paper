import React from "react";
import { TextInput } from "react-native-paper";

export default function App() {
  const [text, setText] = React.useState("");

  return (
    <TextInput
      label="Email"
      value={text}
      mode="outlined"
      onChangeText={(text) => setText(text)}
      theme={{ roundness: 30 }}
      style={{
        width: "95%",
        alignSelf: "center",
        marginTop: 100,
        paddingRight: 15,
      }}
    />
  );
}
