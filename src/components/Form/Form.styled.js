import styled from 'styled-components';

export const ContainerForm = styled.form`
  border: 1px solid;
  margin-bottom: 15px;
  max-width: 300px;
  padding: 15px;
  box-sizing: border-box;
`;

export const ContaierField = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const FieldItem = styled.input`
  border: 1px solid #d3d3d3;
  cursor: pointer;
  margin-top: 5px;

  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
`;

export const BtnDisabled = styled.button`
  background-color: transparent;
  border: 1px solid #000;
  border-radius: 3px;
  cursor: pointer;
  padding: 2px 10px;
  margin-top: 10px;
`;
