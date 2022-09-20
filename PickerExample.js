import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
class PickerExample extends Component {
state = { day: "" ,month:"",year:"" };
updateUser = (day) => {
this.setState({ day:day});
};
updateMonth = (month) => {
this.setState({ month:month});
};
updateYear = (year) => {
this.setState({ year:year});
};
render() {
return (
<View style={styles.container}>
<Text style={styles.text}>Select Date</Text>

<Picker selectedValue={this.state.day} onValueChange={this.updateUser}>
<Picker.Item label="1" value="1" />
<Picker.Item label="2" value="2" />
<Picker.Item label="3" value="3" />
</Picker>
<Text style={styles.text}>Select Month</Text>

<Picker selectedValue={this.state.month} onValueChange={this.updateMonth}>
<Picker.Item label="Jan" value="Jan" />
<Picker.Item label="Feb" value="Feb" />
<Picker.Item label="March" value="March" />
</Picker>
<Text style={styles.text}>Select Year</Text>

<Picker selectedValue={this.state.year} onValueChange={this.updateYear}>
<Picker.Item label="2020" value="2020" />
<Picker.Item label="2021" value="2021" />
<Picker.Item label="2022" value="2022" />
</Picker>

<Text style={styles.text}>{this.state.day}</Text>
<Text style={styles.text}>{this.state.month}</Text>
<Text style={styles.text}>{this.state.year}</Text>


</View>
);
}
}
export default PickerExample;

const styles = StyleSheet.create({
container: {
marginTop:60,
},
text: {
fontSize: 30,
alignSelf: "center",
color:"red",
},
});