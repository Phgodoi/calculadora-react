
import Input from "./components/Input";
import Button from "./components/Button";

import { Container, Content, Column, Row } from "./styles";
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState('');
  

  const handleOnClear = () => {
    // Limpa o visor da calculadora
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation('');
  };

  const handleAddNumber = (num) => {
    // Adiciona os valores a cada botão
    setCurrentNumber(prev => `${prev === "0" ? "" : prev}${num}`);
  };

  const handleSumNumber = () => {  //Função para somar os valores (+)
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation("+");
    } else {
      const sum = Number(currentNumber) + Number(firstNumber);
      setCurrentNumber(String(sum));
      setOperation("");
    }
  };

  const handleMinusNumber = () => {  //Função para subtrair os valores (-)
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation("-");
    } else {
      const sub = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sub));
      setOperation("");
    }
  };

  const handleMultNumber = () => {  //Função para multplica os valores (*)

    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation("X");
    } else {
      const mult = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(mult));
      setOperation("X");
      setFirstNumber(Number(firstNumber));
    }
  };

  const handleDivNumber = () => {  //Função para divide os valores (/)
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation("/");
    } else {
      const mult = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(mult));
      setOperation("");
    }
  };

  const handleExpNumber = () => {  //Função para fazer exponenciação  dos valores os valores (^)
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation("^");
    } else {
      const exp = Math.pow(Number(firstNumber), Number(currentNumber));
      setCurrentNumber(String(exp));
      setOperation('');
    }
  };

  const handlePercentNumber = () => {  //Função para fazer exponenciação  dos valores os valores (^)
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation("%");
    } else {
      const perc = ((Number(firstNumber) * Number(currentNumber))/ 100);
      setCurrentNumber(String(perc));
      setOperation('');
    }
  };

  const handleEquals = () => { //Função para executar a conta (=)
    if (firstNumber !== "0" && operation !== "" && currentNumber !== "0") {
      switch (operation) {
        case "+":
          handleSumNumber();
          break;
        case "-":
          handleMinusNumber();
          break;
        case "X":
          handleMultNumber();
          break;
        case "/":
          handleDivNumber();
          break;
        case "^":
          handleExpNumber();
          break;
        case "%":
          handlePercentNumber();
          break;
        default:
          break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button variant="secundary" label={"C"} onClick={handleOnClear} />
          <Button
            variant="secundary"
            label={"^"}
            onClick={handleExpNumber}
          />
          <Button
            variant="secundary"
            label={"%"}
            onClick={handlePercentNumber}
          />
          <Button variant="secundary" label={"+"} onClick={handleSumNumber} />
        </Row>
        <Row>
          <Button label={"7"} onClick={() => handleAddNumber("7")} />
          <Button label={"8"} onClick={() => handleAddNumber("8")} />
          <Button label={"9"} onClick={() => handleAddNumber("9")} />
          <Button variant="secundary" label={"-"} onClick={handleMinusNumber}
          />
        </Row>
        <Row>
          <Button label={"4"} onClick={() => handleAddNumber("4")} />
          <Button label={"5"} onClick={() => handleAddNumber("5")} />
          <Button label={"6"} onClick={() => handleAddNumber("6")} />
          <Button
            variant="secundary"
            label={"X"}
            onClick={handleMultNumber}
          />
        </Row>
        <Row>
          <Button label={"1"} onClick={() => handleAddNumber("1")} />
          <Button label={"2"} onClick={() => handleAddNumber("2")} />
          <Button label={"3"} onClick={() => handleAddNumber("3")} />
          <Button
            variant="secundary"
            label={"/"}
            onClick={handleDivNumber}
          />
        </Row>
        <Row>
          <Button label={"0"} onClick={() => handleAddNumber("0")} />
          <Button label={"."} onClick={() => handleAddNumber("")} />
          <Column>
            <Button variant="primary" label={"="} onClick={handleEquals}
            />
          </Column>
        </Row>
      </Content>
    </Container>
  );
};

export default App;
