import estilo from "@/app/logincss";
import { AuthContext } from "@/app/utils/authContext";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";

function Dashboard() {
  const auth = useContext(AuthContext);
  return (
    <View>
      <Text> Dashboard - {auth.user?.email}</Text>

      <TouchableOpacity
        style={estilo.button}
        onPress={() => {
          auth.logOut();
        }}
      >
        <Ionicons name="checkmark-circle" size={32} color="#fff" />
        <Text style={estilo.buttonTexto}> sair </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Dashboard;
