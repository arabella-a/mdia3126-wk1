import { Text, View } from "react-native";
import Profile from "@/components/molecules/Profile";
import Bio from "@/components/atoms/Bio";

export default function Index(){
    return(
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                paddingLeft:100
            }}
        >
        <Profile labelText="Candice Smith" buttonText="Follow"/>
        <Bio bioText="hi! my name is candice! this is a profile i made to meet new friends :> I am 21 yrs old and my hobby is playing games and sleeping. I'm currently in the process of getting my BA in Education in UCLA. If anyone wants to hmu, my insta handle is @cancandice! Have a great day :D"/>
        </View>
    );
};