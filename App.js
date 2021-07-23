import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

export default function App() {
    const [peso, alteraPeso] = useState();
    const [altura, alteraAltura] = useState();
    const [imc, alteraImc] = useState(0);
    const [grau, alterarGrau] = useState("");
    const [classificacao, alteraClassificacao] = useState("");
    const [cor, alteraCor] = useState('#D1B514');

    const calcular = () => {
      
      if (altura > 0) {
        const cal = peso / (altura * altura);
        alteraImc((cal).toFixed(1));
      

        if (cal <= 18.5) {    
            alterarGrau("0");
            alteraClassificacao("Magreza");
            alteraCor('#D1B514');
                
          
        } else if (cal > 18.5 && cal <= 24.9) {
              alterarGrau("0");
              alteraClassificacao("Normal");
              alteraCor('#599992');
            
        } else if (cal > 24.9 && cal <= 29.9) {
              alterarGrau("I");
              alteraClassificacao("Sobrepeso");
              alteraCor('#BB9599');
            
        } else if (cal > 29.9 && cal <= 39.9) {
              alterarGrau("II");
              alteraClassificacao("Obesidade");
              alteraCor('#B45714');
            
        } else if (cal > 39.9) {
              alterarGrau("III");
              alteraClassificacao("Obesidade Grave");
              alteraCor('#8C1A24');
            
        }
      }else{
        alteraImc(0);
      }
    }
    {/*Chama a função automaticamente */}
    useEffect (() => { calcular() }, [altura, peso]);
    
  return (
    <Tela>
      <Titulo>Calcular IMC</Titulo>
      <Input keyboardType="numeric" value= {peso} onChangeText={(p) => {alteraPeso(p)}} placeholder="Infomar o peso em kg"/>
      <Input keyboardType="numeric" value={altura}  onChangeText={(a) => {alteraAltura(a)}} placeholder="Infomar a altura em m"/>
      
      {/* Essa parte foi removida para ficar automática o calculo
      <BtnView>
        <BtnCalcular title="Calcular" onPress={calcular} color="#54A0A5"/>
      </BtnView>
      */}

      { imc > 0 && (
        <Resultado cor={cor}>
          <TituloResultado>IMC: {imc} Grau: {grau}</TituloResultado>
          <SubResultado>{classificacao}</SubResultado>
        </Resultado>)
      }

    </Tela>
  );
}

const Resultado = styled.View`
  width: 70%;
  margin-top: 35px;
  height: 89px;
  background-color:${props => props.cor};
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
  background-color: #E3E2E2;
  border-radius: 5px;
  margin-top: 10px;
  padding-left: 10px;
`;

const Tela = styled.View`
  align-items: center;
  flex: 1;
`;

