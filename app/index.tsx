import { Text, View } from "react-native";
import Profile from "@/components/molecules/Profile";

export default function Index(){
    return(
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
        <Profile labelText="Candice Smith" infoText="blah blah blah blah" buttonText="Follow"/>
        </View>
    );
};