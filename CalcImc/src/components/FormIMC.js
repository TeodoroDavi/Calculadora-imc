import {View, TextInput, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Result from './Result';
import Classificacao from './Classificacao';
import { useState } from 'react';

const FormIMC = () => {
    const [peso,setPeso] = useState('');
    const [altura,setAltura] = useState('');
    const [imc,setImc] = useState(null);

    const calcularIMC = () => {
        if(peso && altura){
            const alturaMetros = parseFloat(altura) / 100;
            const imcCalculado = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2);
            setImc(imcCalculado);
        }
    };

    return(
        <View style={styles.formContainer}>
            <TextInput
                style={styles.input}
                placeholder ="Peso(kg)"
                keyboardType="numeric"
                value={peso}
                onChangeText={setPeso}
            />
            <TextInput
                style={styles.input}
                placeholder ="Altura(cm)"
                keyboardType="numeric"
                value={altura}
                onChangeText={setAltura}
            />
            <TouchableOpacity style={styles.button} onPress={calcularIMC}>
                <Text style={styles.buttonText}>Calcular IMC</Text>
            </TouchableOpacity>
            {imc && <Result imc={imc} />} 
            {imc && <Classificacao imc={imc} />}
        </View>
    );
};

const styles = StyleSheet.create({
    formContainer:{
        backgroundColor:"#A5A5A5",
        padding: 16,
        borderRadius: 10,
        borderColor:"#F28705",
        borderWidth: 2.5,
    },
    input: {
        
        height: 40,
        borderColor: '#0D0D0D',
        borderWidth: 0.8,
        marginBottom : 12,
        paddingHorizontal:8,
        borderRadius: 5,
    },
    button: {
        backgroundColor:'#F28705',
        padding: 10,
        borderRadius: 5,
        borderColor:"#0D0D0D",
        borderWidth: 1,
    },
    buttonText: {
        color:'#0D0D0D',
        textAlign:'center',
        fontSize: 16,
    },
});

export default FormIMC;