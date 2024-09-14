import { Text, View } from "react-native";

export default function Bio({ bioText }){
    return(
        <View>
            <Text style={{fontSize:26, fontFamily:"monospace", color:"pink", padding:100}}>{bioText}</Text>
        </View>
    )
};