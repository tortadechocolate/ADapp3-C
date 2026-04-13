//Aluno: Pietro de Souza Rodrigues e Luiz Filipe Esposito 3-C Tec
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

export default function CartaoPerfil({ nome, profissao, cidade, email }) {
  const enviarEmail = () => {
    Alert.alert("E-mail enviado para: " + email);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.profissao}>{profissao}</Text>
      <Text style={styles.cidade}>{cidade}</Text>
      <Text style={styles.email}>{email}</Text>

      <TouchableOpacity style={styles.botao} onPress={enviarEmail}>
        <Text style={styles.textoBotao}>Enviar E-mail</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    elevation: 5, // Android
    shadowColor: "#000", // iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    width: 300,
    alignItems: "center",
  },
  nome: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },
  profissao: {
    fontSize: 16,
    color: "#555",
  },
  cidade: {
    fontSize: 14,
    color: "#777",
  },
  email: {
    fontSize: 14,
    color: "#999",
    marginBottom: 15,
  },
  botao: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});