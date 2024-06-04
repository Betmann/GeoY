import React from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import { Input, Text, Button } from "@rneui/base"; // Importando Input e Button da biblioteca @rneui/base
import { useNavigation } from '@react-navigation/native';

const Register = () => {
    const navigation = useNavigation()

    const handleNavLogin = () => {

        navigation.navigate("Login");
    }
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
            <Image style={styles.logo} source={require("../../../assets/logo0bc.png")} />
            <Input containerStyle={{ width: "85%", marginTop: 75}} style={{color: "white" }} placeholder="Nome" />
            <Input containerStyle={{ width: "85%", }} style={{color: "white" }} placeholder="Sobrenome"/>
            <Input containerStyle={{ width: "85%", }} style={{color: "white" }} placeholder="E-mail"/>
            <Input containerStyle={{ width: "85%", }} style={{color: "white" }} placeholder="Senha" secureTextEntry={true} />
            <Input containerStyle={{ width: "85%", }} style={{color: "white" }} placeholder="Confirmar a sua senha" secureTextEntry={true}/>
            <Button containerStyle={{ width: 180, marginTop: 60 }} buttonStyle={{borderColor:"#ffffff",}} titleStyle={{color:"#BA55D3" }} title="Registrado" type="outline" />
            <Text onPress={() =>{handleNavLogin();}} h4 h4Style= {{color:"white", marginTop: 60 }}>Faça seu Login</Text>
        </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
      flex: 1,
    },
    container: {
        backgroundColor: "#121212",
        paddingTop: 120,
        paddingBottom: 60,
        alignItems: "center",
    },
    logo: {
        width: 120,
        height: 120,
    }
});

export default Register;
