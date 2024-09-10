import { Text, View } from "react-native";
import InputForm from "@/components/molecules/InputForm";

export default function Index(){
    return(
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <InputForm labelText="this is a label!" buttonText="click me"/>
        </View>
    );
};