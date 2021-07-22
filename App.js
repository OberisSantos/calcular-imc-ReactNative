import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

export default function App() {
    const [peso, alteraPeso] = useState();
    const [altura, alteraAltura] = useState();
    const [imc, alteraImc] = useState("0");
    const [grau, alterarGrau] = useState("");
    const [classificacao, alteraClassificacao] = useState("");
    const [cor, alteraCor] = useState('#c3c3c3');

    function calcular(){
      const imc = parseFloat(peso / (altura * altura));
      if (imc <= 18.5) {
        return(          
          alteraImc(imc),
          alterarGrau("Grau 0"),
          alteraClassificacao("Magreza"),
          alteraCor('#D1B514')
        )        
        
      } if (imc > 18.5 && imc <= 24.9) {
          return(
            alteraImc(imc),
            alterarGrau("Grau 0"),
            alteraClassificacao("Normal"),
            alteraCor('#599992')
          )
      } if (imc > 24.9 && imc <= 29.9) {
          return(
            alteraImc(imc),
            alterarGrau("Grau I"),
            alteraClassificacao("Sobrepeso"),
            alteraCor('#BB9599')
          )
      } if (imc > 29.9 && imc <= 39.9) {
          return(
            alteraImc(imc),
            alterarGrau("Grau II"),
            alteraClassificacao("Obesidade"),
            alteraCor('#B45714')
          )
      } if (imc > 39.9) {
          return(
            alteraImc(imc),
            alterarGrau("Grau III"),
            alteraClassificacao("Obesidade Grave"),
            alteraCor('#8C1A24')
          )      
      }else{
        return(
          alteraImc(imc),
          alterarGrau(""),
          alteraClassificacao(""),
          alteraCor('#c3c3c3')
        )
      }

    }

    
  return (
    <Tela>
      <Titulo>Calcular IMC</Titulo>
      <Input keyboardType="numeric" value= {peso} onChangeText={(p) => {alteraPeso(p)}} placeholder="Infomar o peso em kg"/>
      <Input keyboardType="numeric" value={altura}  onChangeText={(a) => {alteraAltura(a)}} placeholder="Infomar a altura em m"/>
      <BtnView>
        <BtnCalcular title="Calcular" onPress={() => {calcular()}} color="#54A0A5"/>
      </BtnView>
      
      <Resultado style={{backgroundColor:cor}}>
        <TituloResultado>IMC: {parseFloat(imc).toFixed(2)}  {grau}</TituloResultado>
        <SubResultado>{classificacao}</SubResultado>
      </Resultado>

    </Tela>
  );
}

const Resultado = styled.View`
  width: 70%;
  margin-top: 35px;
  height: 89px;
  backgroundColor:orange;
  align-items: center;
  padding-top: 5px;

  border-radius: 20px;

`;
const SubResultado = styled.Text`
  margin-top: 15px;
  font-size: 15px;
`;

const TituloResultado = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-size: 20px;
`;


const BtnCalcular = styled.Button`
  border-radius: 5px;

`;

const BtnView = styled.View`
  width: 90%;
  margin-top: 35px;
  
`;


const Titulo = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 29px;
  color: #914444;

  margin-top: 25px;
`;

const Input = styled.TextInput`
  width: 90%;
  height: 40px;
  backgroundColor: #E3E2E2;
  border-radius: 5px;
  margin-top: 10px;
  padding-left: 10px;
`;

const Tela = styled.View`
  align-items: center;
  flex: 1;
`;

