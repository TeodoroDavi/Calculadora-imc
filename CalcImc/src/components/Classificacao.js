import React from "react";
import {Text, StyleSheet} from 'react-native';

const Classificacao = ({ imc }) => {
    const imcValue = parseFloat(imc);
    const classificacao = ()=>{
       if (imcValue < 18.5){
            return 'Abaixo do peso';
       } else if (imcValue < 24.9){
                return 'Peso normal';
        } else if (imcValue < 29.9){
                return 'Sobrepeso';
        } else if (imcValue < 34.9){
                return 'Obesidade grau 1';
        } else if (imcValue < 39.9){
            return 'Obesidade grau 2';
       } else {
            return 'Obesidade grau 3';
        }
    };
        

    return(
        <Text style={styles.classificacao}>
            Classificação: {classificacao()}
        </Text>
     );
}

const styles = StyleSheet.create({
    classificacao:{
        marginTop: 20,
        fontSize: 24,
        textAlign: 'center',
        color: '#333333',
    },
});

export default Classificacao;