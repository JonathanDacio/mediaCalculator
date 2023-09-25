import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";


export default function ResultImc(props){
    return(
     <View>
        <Text style={styles.numberImc}>{props.messageResultImc}</Text>
        <Text style={styles.information}>{props.resultImc}</Text>
        <Text style={styles.information}>{props.resultmedias}</Text>
    
      </View>
    );
}