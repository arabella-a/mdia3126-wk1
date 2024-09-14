import { Text, View } from "react-native";

export default function Label({ labelText }){
    return(
        <View>
            <Text style={{fontSize:42, fontFamily:"monospace"}}>{labelText}</Text>
        </View>
    )
};