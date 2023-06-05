import { ButtonContainer } from "./styles";

const Button = ({label, onClick, variant = "prymary" }) => {
    return (
      <ButtonContainer variant={variant} onClick={onClick}>
        {label}
      </ButtonContainer>
    );
  }
  
  export default Button;