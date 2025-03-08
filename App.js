import { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

export default function App() {
  const [idade, setIdade] = useState("");
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");

  const [qntHomem, setQntHomem] = useState("");
  const [qntMulher, setQntMulher] = useState("");
  const [qntCrianca, setQntCrianca] = useState("");

  const handleMaioridade = () => {
    const idadeNum = parseInt(idade);
    if (isNaN(idadeNum)) {
      alert("Por favor, insira uma idade válida.");
      return;
    }
    if (idadeNum < 18) {
      alert("Menor de idade");
    } else {
      alert("Você é maior de idade");
    }
  };

  const handleCalcularIMC = () => {
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);
    
    if (isNaN(pesoNum) || isNaN(alturaNum) || pesoNum <= 0 || alturaNum <= 0) {
      alert("Por favor, insira dados válidos para peso e altura.");
      return;
    }
    const alturaEmMetros = alturaNum / 100;  // Convertendo para metros
    const IMC = pesoNum / (alturaEmMetros * alturaEmMetros);

    let resultado;
    if (IMC < 18.5) resultado = "Abaixo do Peso";
    else if (IMC < 25) resultado = "Peso Normal";
    else if (IMC < 30) resultado = "Sobrepeso";
    else if (IMC < 35) resultado = "Obesidade Grau 1";
    else if (IMC < 40) resultado = "Obesidade Grau 2";
    else resultado = "Obesidade Grau 3";
    alert(resultado);
  };

  const handleCalcularChurrasco = () => {
    const qntHomemNum = parseFloat(qntHomem) || 0;
    const qntMulherNum = parseFloat(qntMulher) || 0;
    const qntCriancaNum = parseFloat(qntCrianca) || 0;

    const carneHomem = (qntHomemNum * 400) / 1000;
    const carneMulher = (qntMulherNum * 300) / 1000;
    const carneCrianca = (qntCriancaNum * 200) / 1000;
    const totalCarne = carneCrianca + carneMulher + carneHomem;
    const totalCarvao = (totalCarne / 6) * 5;

    alert(`A quantidade total de carne necessária é: ${totalCarne} kg.
      ${carneHomem} kg é o necessário para os homens.
      ${carneMulher} kg é o necessário para as mulheres.
      ${carneCrianca} kg é o necessário para as crianças.
      O total de carvão necessário é ${totalCarvao} kg.`);
  };

  return (
    <View style={styles.container}>
      <Text>ATIVIDADE REALIZADA POR PAULO H - DIA 06 E 07/03/25</Text>
      <Text>Atividade 1, Calculadora de Maioridade</Text>
      <TextInput
        placeholder="Digite a sua idade"
        keyboardType="numeric"
        onChangeText={(pIdade) => setIdade(pIdade)}
        value={idade}
      />
      <Button
        title="Ver se possui Maioridade"
        onPress={handleMaioridade}
      />

      <Text>Atividade 2, IMC Calculadora</Text>
      <TextInput
        placeholder="Digite seu Peso em Kg"
        keyboardType="numeric"
        onChangeText={(pPeso) => setPeso(pPeso)}
        value={peso}
      />
      <TextInput
        placeholder="Digite sua Altura em Centímetros"
        keyboardType="numeric"
        onChangeText={(pAltura) => setAltura(pAltura)}
        value={altura}
      />
      <Button
        title="Ver IMC"
        onPress={handleCalcularIMC}
      />

      <Text>Atividade 3, Churras Calculator</Text>
      <TextInput
        placeholder="Digite quantos homens estarão no churrasco"
        keyboardType="numeric"
        onChangeText={(pQntHomem) => setQntHomem(pQntHomem)}
        value={qntHomem}
      />
      <TextInput
        placeholder="Digite quantas mulheres estarão no churrasco"
        keyboardType="numeric"
        onChangeText={(pQntMulher) => setQntMulher(pQntMulher)}
        value={qntMulher}
      />
      <TextInput
        placeholder="Digite quantas crianças estarão no churrasco"
        keyboardType="numeric"
        onChangeText={(pQntCrianca) => setQntCrianca(pQntCrianca)}
        value={qntCrianca}
      />
      <Button
        title="Calcular quantidade de carne e carvão necessário"
        onPress={handleCalcularChurrasco}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: "center",
    justifyContent: "center",
  },
});
