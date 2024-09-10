import { View } from "react-native";
import Button from "@/components/atoms/Button";
import Label from "@/components/atoms/Label";
import Info from "@/components/atoms/Info";

export default function Profile({ labelText, buttonText, infoText }){
    return(
        <View
            style={{
                flexDirection:"row",
                gap: 10,
                alignItems: "center"
            }}    
        >
        <Label labelText={labelText} />
        <Info infoText={infoText}/>
        <Button buttonText={buttonText} />
        </View>
    );
};