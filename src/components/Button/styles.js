import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`
  padding: 20px;
  border: 1px solid #444;
  background-color: #bfbfbf;
  color: #ffff;
  font-size: 24px;
  font-weight: 700;
  flex: 1;
  border-radius: 10px;

  ${({ variant }) =>
    variant === "primary" &&
    css`
      padding: 12px;
      background-color: #c56565;
      font-size: 31px;
      font-weight: 900;
      width: 160px;
      border: 1px solid #444;
    `}

    ${({ variant }) => variant === "secundary" && css`
    background-color: #888;
    `}

    &:hover {
      opacity: .8;
      cursor: pointer;
    }
`;
