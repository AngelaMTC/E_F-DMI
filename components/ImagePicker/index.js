import React, { useEffect, useState } from "react";
import { Button, Image, Platform, View, KeyboardAvoidingView } from "react-native";
import * as ImagePicker from "expo-image-picker";
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";
import { Avatar, Card, IconButton, Paragraph, Title } from "react-native-paper";

export default function ImagePickerExample() {
    createTodo = () => {
        const {name} = this.state;
        const list = {name};
        this.props.addList(list)
       
        this.setState({name : ""})
        this.props.closeModal();
      
      }
  return (

    <KeyboardAvoidingView style={styles.container} behavior="padding">
        <TouchableOpacity style = {{position: "absolute", top: 64, right:32}} onPress={this.props.closeModal}>
        <AntDesign name="close" size={24}/>
        </TouchableOpacity>

        <View style = {{alignSelf : "stretch", marginHorizontal: 32}}>
          <Text style = {styles.title}> Crea tu Tarea : </Text>
          <TextInput 
          style = {styles.input} 
          placeholder="Nombre de la Tarea"
          onChangeText={text => this.setState({name:text})}
          />

          <View style={{flexDirection:"row", justifyContent:"space-between", marginTop:12}} ></View>


          <TouchableOpacity style = {[styles.create, {backgroundColor: this.state.color}]} onPress={this.createTodo} >

          <Text style = {{color: Colors.white, fontWeight: "600"}}> Crear! </Text>

          </TouchableOpacity>
        </View>

      </KeyboardAvoidingView>

);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    position: "absolute",
    backgroundColor: "",
},

txtForo: {
    color: "#1C304A"
},

containerCard:{
    marginBottom: 30,
}
});
