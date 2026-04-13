export default function App() {
  return (
    <View style={styles.container}>
      <CartaoPerfil
        nome="Roberto Carlos"
        profissao="Cantor"
        cidade="Urca, RJ"
        email="BertoCarlitos@email.com"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // centraliza vertical
    alignItems: "center",     // centraliza horizontal
    backgroundColor: "#f0f0f0",
  },
});