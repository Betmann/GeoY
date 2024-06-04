import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Input, Text, Button } from "@rneui/base"; // Importando Input e Button da biblioteca @rneui/base
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation()

    const handleNavRegister = () => {

        navigation.navigate("Register");
    }
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require("../../../assets/logo0bc.png")} />
            <Input containerStyle={{ width: "85%", marginTop: 75}} style={{color: "white" }} placeholder="user" />
            <Input containerStyle={{ width: "85%", marginTop: 40}} style={{color: "white" }} placeholder="password" secureTextEntry={true} />
            <Button containerStyle={{ width: 180, marginTop: 60 }} buttonStyle={{borderColor:"#ffffff",}} titleStyle={{color:"#BA55D3" }} title="Entrar" type="outline" />
            <Text onPress={() =>{handleNavRegister();}} h4 h4Style= {{color:"white", marginTop: 60 }}>Faça seu Registro</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
        paddingTop: 128,
        alignItems: "center",
    },
    logo: {
        width: 120,
        height: 120,
    }
});

export default Login;
