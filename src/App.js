import Input from "./components/Input";
import Button from "./components/Button";

import { Container, Content, Column, Row } from "./styles";
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');

  const handleOnClear = () => {    // Limpa o visor da calculadora
    setCurrentNumber('0')
  };

  const handleAddNumber = (num) => {  // Adiciona os valores a cada botão
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }


  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row >
          <Button variant="secundary" label={"C"} onClick={handleOnClear}/>
          <Button variant="secundary" label={"^"} onClick={() => handleAddNumber('')}/>
          <Button variant="secundary" label={"%"} onClick={() => handleAddNumber('')}/>
          <Button variant="secundary" label={"+"} />
        </Row>
        <Row>
          <Button label={"7"} onClick={() => handleAddNumber('7')}/>
          <Button label={"8"} onClick={() => handleAddNumber('8')}/>
          <Button label={"9"} onClick={() => handleAddNumber('9')}/>
          <Button variant="secundary" label={"-"} onClick={() => handleAddNumber('')}/>
        </Row>
        <Row>
          <Button label={"4"} onClick={() => handleAddNumber('4')}/>
          <Button label={"5"} onClick={() => handleAddNumber('5')}/>
          <Button label={"6"} onClick={() => handleAddNumber('6')}/>
          <Button variant="secundary" label={"X"}  onClick={() => handleAddNumber('')}/>
        </Row>
        <Row>
          <Button label={"1"} onClick={() => handleAddNumber('1')}/>
          <Button label={"2"} onClick={() => handleAddNumber('2')}/>
          <Button label={"3"} onClick={() => handleAddNumber('3')}/>
          <Button variant="secundary" label={"/"} onClick={() => handleAddNumber('')}/>
        </Row>
        <Row>
          <Button label={"0"} onClick={() => handleAddNumber('0')}/>
          <Button label={"."} onClick={() => handleAddNumber('')}/>
          <Column>
           <Button variant="primary" label={"="}  onClick={() => handleAddNumber('')}/>
          </Column>
        </Row>
      </Content>
    </Container>
  );
};

export default App;
