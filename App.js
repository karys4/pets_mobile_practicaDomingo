import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import FormularioMascotas from "./screens/formularioMascotas";
import ListaMascotas from "./screens/listaMascotas";

export default function App() {
  return <FormularioMascotas />; // formularioMascotas/index.jsx  (const FormularioMascotas)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
