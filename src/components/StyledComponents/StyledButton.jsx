// 기존 버튼 확장해서 사용하는 StyledButton
import styled from 'styled-components';
import BaseButton from './BaseButton';

const StyledButton = styled(BaseButton)`
  background-color: green;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default StyledButton;
