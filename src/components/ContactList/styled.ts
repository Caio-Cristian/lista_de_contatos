import styled from 'styled-components'

export const StyledContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  h2 {
    margin-top: 0;
    text-align: center;
  }

  ul {
    list-style: none;
    padding: 0;
  }
`

export const Separator = styled.hr`
  margin: 20px 0;
  border: none;
  height: 1px;
  background-color: #ccc;
`
