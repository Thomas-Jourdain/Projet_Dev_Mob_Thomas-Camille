import React, { Component, isValidElement } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Input from "../components/Input";
import { NavigationProps } from "../navigation/app-stacks";
import User from "../services/user.model";
import UserDbApi from "../services/userdbpai.service"
interface ConnexionScreenState{
    pseudo:string,
    mdp:string
}

export default class ConnexionScreen extends Component<NavigationProps,ConnexionScreenState> {
    state: ConnexionScreenState={
        pseudo:"",
        mdp:""
    }

    updatePseudo=(pseudo:string)=>{
        this.setState({pseudo})
    }

    updateMdp=(mdp:string)=>{
        this.setState({mdp})
    }

    connexionButton=()=>{
        UserDbApi.connexion(this.state.pseudo,this.state.mdp).then(
        )

    }



  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Connexion</Text>
        <Input  placeholder="Pseudo" onSubmitEdFct={this.updatePseudo}/>
        <Input  placeholder="Mdp" onSubmitEdFct={this.updateMdp}/>
        <TouchableOpacity
        onPress={this.connexionButton}
        >
            <Text>
                Connexion
            </Text>
        </TouchableOpacity>

      </View>
    );
  }
}