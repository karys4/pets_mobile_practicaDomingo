import React from "react";
import {View, Text, TextInput, StyleSheet} from "react-native";
import { reducer, initialState, actions } from "./reducer";

 

const FormularioMascotas = () => {
    const [state, dispatch] = React.useReducer(reducer, initialState)
    const modifyInput = (nombre, valor) => {
dispatch({
    type: actions.modifyForm, name: nombre,
    value: valor
})
    }
    return (<View>
        <Text>Nombre de mascota:</Text>
        <TextInput
        style={styles.inputStyle}
        value={state.form.name}
        onChangeText={text=> modifyInput("name", text)}/>
        <Text>Nombre de propietario:</Text>
        <TextInput
        style={styles.inputStyle}
        value={state.form.owner}
        onChangeText={text=> modifyInput("owner", text)}/>
        <Text>Edad:</Text>
        <TextInput
        style={styles.inputStyle}
        value={state.form.age}
        onChangeText={text=> modifyInput("age", text)}/>
    </View>)
}

const styles = StyleSheet.create({
    inputStyle: {
        borderColor: "#000",
        borderWidth: 1,

    }
})



export default FormularioMascotas;