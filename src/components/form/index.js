import React, { useState} from "react";
import { TextInput, View, Text, TouchableOpacity, Vibration } from "react-native";
import ResultImc from "./ResultImc";
import styles from "./style";


export default function Form(){
    const [n1, setn1] = useState(null);
    const [n2, setn2] = useState(null);
    const [n3, setn3] = useState(null);
    const [n4, setn4] = useState(null);
    const [messagemedia, setMessagemedia] =useState ("Preencha as Notas");
    const [media, setmedia] =useState (null);
    const [textButton, setTextButton]=useState ("Calcular");
    const [textMedia, setTextMedia]=useState (null);
    const [errorMessage, setErrorMessage]=useState(null);

function mediaCalculator(){
    return (parseFloat(n1) + parseFloat(n2) + parseFloat(n3) + parseFloat(n4) ) / 4 
}

function verificationmedia(){
    if(media == null){ 
        setErrorMessage("Campo Obrigatório")
        Vibration.vibrate()
    }

}

function validationmedia(){
    if (n1 != null && n2 !=null && n1 != null && n2 !=null){
        setmedia(mediaCalculator())
        const medias = mediaCalculator()
        setn1(null)
        setn2(null)
        setn3(null)
        setn4(null)
        setMessagemedia(" Sua media é igual a: ")
        setTextButton ("Calcular Novamente")
        setErrorMessage(null)
        if (medias < 5) {
            setTextMedia("reprovadO")
        }
        else if(medias >= 6){
            setTextMedia("Aprovado")
        }
return
}
    setmedia(null)
    setTextButton("Calcular")
    setMessagemedia("Preencha as Notas !")
    verificationmedia()
}

return(
<View style={styles.formContext}>
    <View style={styles.form}>

        <Text style={styles.label}>Nota 1</Text>
        <Text style={styles.errorMessager}>{errorMessage}</Text>
        <TextInput style={styles.input}  onChangeText={setn1} value={n1} placeholder="Ex: 10" keyboardType="numeric"/>

        <Text style={styles.label}>Nota 2</Text>
        <Text style={styles.errorMessager}>{errorMessage}</Text>
        <TextInput style={styles.input} onChangeText={setn2} value={n2} placeholder="Ex: 10" keyboardType="numeric"/>

        <Text style={styles.label}>Nota 3</Text>
        <Text style={styles.errorMessager}>{errorMessage}</Text>
        <TextInput style={styles.input}  onChangeText={setn3} value={n3} placeholder="Ex: 10" keyboardType="numeric"/>

        <Text style={styles.label}>Nota 4</Text>
        <Text style={styles.errorMessager}>{errorMessage}</Text>
        <TextInput style={styles.input} onChangeText={setn4} value={n4} placeholder="Ex: 10" keyboardType="numeric"/>

        <TouchableOpacity style={styles.buttonCalculator} onPress={()=> validationmedia()}>
        <Text style={styles.textButtonCalculator}>{textButton}</Text></TouchableOpacity>


    </View>
    <ResultImc messageResultImc={messagemedia} resultImc={media} resultmedias={textMedia}/>
</View>
);
}