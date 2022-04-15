import React, { Component } from "react";
import { TextInput,StyleSheet, View, Image,Text, NativeSyntheticEvent } from "react-native";

interface InputProps{
    placeholder:string,
    onSubmitEdFct:any,
}

export default class Input extends Component<InputProps,{}>{

    render(): React.ReactNode {
        return(
            <View style={styles.container}>
                <TextInput
                style={styles.input}
                placeholder={this.props.placeholder}
                onSubmitEditing={(event) => this.props.onSubmitEdFct(event.nativeEvent.text)}
                />
            </View>

        )
    }
}


const styles = StyleSheet.create({
    container: {
      backgroundColor: 'grey',
    },
    input:{
        fontSize:24,
        margin:5,
    }
  });