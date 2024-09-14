import { View } from "react-native";
import Label from "@/components/atoms/Label";

export default function Profile({ labelText, buttonText}){
    return(
        <View
            style={{
                flexDirection:"row",
                gap: 20,
                alignItems: "center"
            }}    
        >
        <img src="/assets/images/doggo.jpg" alt="woman smilling" style={{width:200, height: 200, borderRadius:"50%"}}/>
        <Label labelText={labelText} />
        </View>
    );
};