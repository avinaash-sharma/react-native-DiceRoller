import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      uri: require("./Component/Images/DiceAssets/dice1.png")
    };
  }

  getRandomValue = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  playButtonPressed = () => {
    //Alert.alert("Heyyyy: " + this.getRandomValue());
    var rNumber = this.getRandomValue();

    switch (rNumber) {
      case 1:
        this.setState({ uri: require("./Component/Images/DiceAssets/dice1.png") });
        break;
      case 2:
        this.setState({ uri: require("./Component/Images/DiceAssets/dice2.png") });
        break;
      case 3:
        this.setState({ uri: require("./Component/Images/DiceAssets/dice3.png") });
        break;
      case 4:
        this.setState({ uri: require("./Component/Images/DiceAssets/dice4.png") });
        break;
      case 5:
        this.setState({ uri: require("./Component/Images/DiceAssets/dice5.png") });
        break;
      case 6:
        this.setState({ uri: require("./Component/Images/DiceAssets/dice6.png") });
        break;

      default:
        this.setState({ uri: require("./Component/Images/DiceAssets/dice1.png") });
        break;
    }
    
  };

  render() {
    console.log(this.state.uri);
    return (
      <View style={styles.container}>
        <Image source={this.state.uri} />
        <TouchableOpacity onPress={this.playButtonPressed}>
          <Text style={styles.launchButton}>Click Me :p</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C3335",
    alignItems: "center",
    justifyContent: "center"
  },
  launchButton: {
    marginTop: 35,
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: "bold",
    borderWidth: 2,
    paddingVertical: 8,
    paddingHorizontal: 40,
    borderRadius: 5,
    borderColor: "#FFF",
    backgroundColor: "#2C3335",
    
  }
});
