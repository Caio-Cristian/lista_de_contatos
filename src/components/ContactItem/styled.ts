import styled from 'styled-components'

export const ButtonEdit = styled.button`
  padding: 5px;
  background-color: rgb(87, 87, 87);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
  margin-right: 5px;

  &:hover {
    background-color: rgb(97, 97, 97);
  }
`

export const ButtonRemove = styled.button`
  padding: 5px;
  background-color: rgb(150, 0, 0);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;

  &:hover {
    background-color: rgb(255, 0, 0);
  }
`
