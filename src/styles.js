import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  background-color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  min-width: 10%;
  min-height: 350px;

  background-color: black;
  border-radius: 7px;
  border: 5px solid black;
  box-sizing: content-box;

`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
